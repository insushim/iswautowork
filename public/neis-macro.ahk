; ============================================
; NEIS 자동 입력 매크로 (AutoHotkey v2)
; ============================================
; 사용법:
; 1. 웹앱에서 "매크로용 복사" 버튼 클릭
; 2. NEIS에서 1번 학생 입력 칸에 커서 놓기
; 3. Ctrl+Shift+V 누르면 자동 입력 시작
; 4. ESC 누르면 중지
; ============================================

#Requires AutoHotkey v2.0
#SingleInstance Force

; 설정
global TabCount := 3        ; Tab 키 누르는 횟수
global DelayMs := 300       ; 각 동작 사이 딜레이 (밀리초)
global PasteDelay := 500    ; 붙여넣기 후 대기 시간
global IsRunning := false

; Ctrl+Shift+V: 매크로 시작
^+v:: {
    global IsRunning

    if IsRunning {
        MsgBox("이미 매크로가 실행 중입니다.`nESC를 눌러 중지하세요.")
        return
    }

    ; 클립보드에서 데이터 읽기
    clipData := A_Clipboard

    if (clipData = "") {
        MsgBox("클립보드가 비어있습니다.`n웹앱에서 '매크로용 복사' 버튼을 먼저 클릭하세요.")
        return
    }

    ; @@STUDENT@@ 구분자로 분리
    if !InStr(clipData, "@@STUDENT@@") {
        MsgBox("매크로용 데이터 형식이 아닙니다.`n웹앱에서 '매크로용 복사' 버튼을 클릭하세요.")
        return
    }

    students := StrSplit(clipData, "@@STUDENT@@")
    studentCount := 0

    ; 빈 항목 제거하고 개수 세기
    validStudents := []
    for student in students {
        trimmed := Trim(student)
        if (trimmed != "") {
            validStudents.Push(trimmed)
            studentCount++
        }
    }

    if (studentCount = 0) {
        MsgBox("학생 데이터가 없습니다.")
        return
    }

    result := MsgBox("총 " . studentCount . "명의 학생 데이터를 입력합니다.`n`n"
        . "NEIS 1번 학생 입력 칸에 커서가 있는지 확인하세요.`n`n"
        . "시작하시겠습니까?", "NEIS 자동 입력", "YesNo")

    if (result = "No")
        return

    IsRunning := true

    ; 잠시 대기 (NEIS 창으로 전환할 시간)
    Sleep(1000)

    ; 각 학생 데이터 입력
    for index, studentData in validStudents {
        if !IsRunning
            break

        ; 클립보드에 현재 학생 데이터 복사
        A_Clipboard := studentData
        Sleep(DelayMs)

        ; 붙여넣기 (Ctrl+V)
        Send("^v")
        Sleep(PasteDelay)

        ; 마지막 학생이 아니면 Tab 이동
        if (index < validStudents.Length) {
            Loop TabCount {
                Send("{Tab}")
                Sleep(DelayMs)
            }
        }

        ; 툴팁으로 진행 상황 표시
        ToolTip(index . "/" . studentCount . " 완료")
    }

    IsRunning := false
    ToolTip()
    MsgBox("입력 완료! (" . studentCount . "명)")
}

; ESC: 매크로 중지
Esc:: {
    global IsRunning
    if IsRunning {
        IsRunning := false
        ToolTip()
        MsgBox("매크로가 중지되었습니다.")
    }
}

; F1: 도움말
F1:: {
    MsgBox(
        "NEIS 자동 입력 매크로`n"
        . "================================`n`n"
        . "단축키:`n"
        . "  Ctrl+Shift+V : 매크로 시작`n"
        . "  ESC : 매크로 중지`n"
        . "  F1 : 도움말`n`n"
        . "사용법:`n"
        . "  1. 웹앱에서 '매크로용 복사' 클릭`n"
        . "  2. NEIS 1번 학생 입력 칸에 커서`n"
        . "  3. Ctrl+Shift+V 누르기`n`n"
        . "설정 변경:`n"
        . "  스크립트 파일 열어서 수정`n"
        . "  - TabCount: Tab 횟수 (기본 3)`n"
        . "  - DelayMs: 딜레이 (기본 300ms)"
    , "도움말")
}

; 시작 알림
TrayTip("NEIS 매크로 실행 중", "Ctrl+Shift+V: 시작 | ESC: 중지 | F1: 도움말")

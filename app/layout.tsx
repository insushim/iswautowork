import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NEIS 입력 보조기 v2.0',
  description: '초등학교 학교생활기록부 기록 생성 도우미 - 2022 개정 교육과정 기반',
  keywords: ['NEIS', '학교생활기록부', '생활기록부', '초등학교', '교육과정', '학생 기록'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

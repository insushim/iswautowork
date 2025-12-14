'use client';

import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  charCount?: number;
  maxLength?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, charCount, maxLength, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100',
            'border-gray-300 dark:border-gray-600',
            'placeholder-gray-400 dark:placeholder-gray-500',
            'resize-none',
            error && 'border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
        <div className="flex justify-between mt-1">
          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}
          {charCount !== undefined && (
            <p className={cn(
              'text-sm ml-auto',
              maxLength && charCount > maxLength ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'
            )}>
              {charCount}자 {maxLength && `/ ${maxLength}자`}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

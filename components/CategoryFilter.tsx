'use client';

import { HookCategory } from '@/types/hook';
import { getCategoryLabel } from '@/lib/utils';
import { X } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: HookCategory | '';
  onCategoryChange: (category: HookCategory | '') => void;
  categoryCounts?: Record<string, number>;
}

const categories: (HookCategory | '')[] = [
  '',
  'code-quality',
  'security',
  'workflow',
  'monitoring',
  'notifications',
  'development-tools',
];

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
  categoryCounts = {},
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        const label = category === '' ? 'All' : getCategoryLabel(category);
        const count = category === ''
          ? Object.values(categoryCounts).reduce((sum, count) => sum + count, 0)
          : categoryCounts[category] || 0;

        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isSelected
                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 ring-2 ring-blue-500'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {label}
            {count > 0 && (
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                isSelected
                  ? 'bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200'
                  : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
              }`}>
                {count}
              </span>
            )}
          </button>
        );
      })}

      {selectedCategory && (
        <button
          onClick={() => onCategoryChange('')}
          className="inline-flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <X className="w-4 h-4" />
          Clear
        </button>
      )}
    </div>
  );
}
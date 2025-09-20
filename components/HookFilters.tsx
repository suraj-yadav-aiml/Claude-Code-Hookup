'use client';

import { HookCategory, HookFilters as HookFiltersType } from '@/types/hook';
import { SearchBar } from './SearchBar';
import { CategoryFilter } from './CategoryFilter';

interface HookFiltersProps {
  filters: HookFiltersType;
  onFiltersChange: (filters: HookFiltersType) => void;
  categoryCounts?: Record<string, number>;
}

export function HookFilters({
  filters,
  onFiltersChange,
  categoryCounts,
}: HookFiltersProps) {
  const handleSearchChange = (search: string) => {
    onFiltersChange({ ...filters, search });
  };

  const handleCategoryChange = (category: HookCategory | '') => {
    onFiltersChange({ ...filters, category });
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="max-w-md">
        <SearchBar
          value={filters.search}
          onChange={handleSearchChange}
          placeholder="Search hooks by name or description..."
        />
      </div>

      {/* Category Filter */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Filter by Category
        </h3>
        <CategoryFilter
          selectedCategory={filters.category}
          onCategoryChange={handleCategoryChange}
          categoryCounts={categoryCounts}
        />
      </div>
    </div>
  );
}
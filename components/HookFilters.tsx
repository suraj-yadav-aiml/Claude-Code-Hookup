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
    <div>
      {/* Category Filter Only - Search is now in Hero */}
      <CategoryFilter
        selectedCategory={filters.category}
        onCategoryChange={handleCategoryChange}
        categoryCounts={categoryCounts}
      />
    </div>
  );
}
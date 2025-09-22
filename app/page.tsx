'use client';

import { useState, useMemo } from 'react';
import { HookFilters } from '@/types/hook';
import { hooks } from '@/data/hooks';
import { HookGrid } from '@/components/HookGrid';
import { HookFilters as HookFiltersComponent } from '@/components/HookFilters';

export default function Home() {
  const [filters, setFilters] = useState<HookFilters>({
    search: '',
    category: '',
  });

  const filteredHooks = useMemo(() => {
    return hooks.filter((hook) => {
      const matchesSearch =
        filters.search === '' ||
        hook.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        hook.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        hook.tags.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase()));

      const matchesCategory =
        filters.category === '' || hook.category === filters.category;

      return matchesSearch && matchesCategory;
    });
  }, [filters]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    hooks.forEach((hook) => {
      counts[hook.category] = (counts[hook.category] || 0) + 1;
    });
    return counts;
  }, []);

  const featuredHooks = filteredHooks.filter(hook => hook.featured);
  const regularHooks = filteredHooks.filter(hook => !hook.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 dark:from-gray-950 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
              HookHub
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Open-source Claude Code hooks for developers
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search hooks..."
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  className="w-full px-6 py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                />
                <svg className="absolute right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="mb-8">
          <HookFiltersComponent
            filters={filters}
            onFiltersChange={setFilters}
            categoryCounts={categoryCounts}
          />
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            {filteredHooks.length === hooks.length
              ? `Showing all ${hooks.length} hooks`
              : `Found ${filteredHooks.length} of ${hooks.length} hooks`}
          </p>
        </div>

        {/* Featured Hooks */}
        {featuredHooks.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              ⭐ Featured Hooks
            </h2>
            <HookGrid hooks={featuredHooks} />
          </section>
        )}

        {/* All Hooks or Filtered Results */}
        {regularHooks.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {featuredHooks.length > 0 ? 'More Hooks' : 'All Hooks'}
            </h2>
            <HookGrid hooks={regularHooks} />
          </section>
        )}

        {/* No Results */}
        {filteredHooks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-600 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No hooks found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              We couldn&apos;t find any hooks matching your search criteria. Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="mb-2">
              Built with ❤️ for the Claude Code community
            </p>
            <p className="text-sm">
              Want to submit your hook?{' '}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Contribute on GitHub
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

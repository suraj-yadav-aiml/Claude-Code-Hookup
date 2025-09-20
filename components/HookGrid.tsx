import { Hook } from '@/types/hook';
import { HookCard } from './HookCard';

interface HookGridProps {
  hooks: Hook[];
  isLoading?: boolean;
}

export function HookGrid({ hooks, isLoading = false }: HookGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 animate-pulse"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
              <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="mb-3">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
              </div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (hooks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-gray-400 dark:text-gray-600 text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          No hooks found
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
          We couldn&apos;t find any hooks matching your search criteria. Try adjusting your filters or search terms.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {hooks.map((hook) => (
        <HookCard key={hook.id} hook={hook} />
      ))}
    </div>
  );
}
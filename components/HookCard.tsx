import { Hook } from '@/types/hook';
import { formatStars, getCategoryLabel, getCategoryColor } from '@/lib/utils';
import { ExternalLink, Star, Calendar } from 'lucide-react';

interface HookCardProps {
  hook: Hook;
}

export function HookCard({ hook }: HookCardProps) {
  const handleClick = () => {
    window.open(hook.githubUrl, '_blank');
  };

  return (
    <div
      className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 cursor-pointer group"
      onClick={handleClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {hook.name}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              by {hook.author.username}
            </span>
            {hook.featured && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                Featured
              </span>
            )}
          </div>
        </div>
        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
      </div>

      {/* Category Badge */}
      <div className="mb-3">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(hook.category)}`}>
          {getCategoryLabel(hook.category)}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
        {hook.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span>{formatStars(hook.stars)}</span>
          </div>
          <span className="text-xs">{hook.language}</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <Calendar className="w-3 h-3" />
          <span>{new Date(hook.lastUpdated).toLocaleDateString()}</span>
        </div>
      </div>

      {/* Tags */}
      {hook.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3">
          {hook.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
          {hook.tags.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 rounded text-xs text-gray-500 dark:text-gray-500">
              +{hook.tags.length - 3} more
            </span>
          )}
        </div>
      )}
    </div>
  );
}
import { Hook } from '@/types/hook';
import { formatStars, getCategoryLabel, getCategoryColor } from '@/lib/utils';
import { ArrowUpRight, Star, GitFork, Code2, Sparkles } from 'lucide-react';

interface HookCardProps {
  hook: Hook;
}

export function HookCard({ hook }: HookCardProps) {
  const handleClick = () => {
    window.open(hook.githubUrl, '_blank');
  };

  return (
    <div
      className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-6 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-gray-300 dark:hover:border-gray-700 hover:-translate-y-1 transition-all duration-300 cursor-pointer group overflow-hidden"
      onClick={handleClick}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Header with featured badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            {hook.featured && (
              <div className="inline-flex items-center gap-1 px-2.5 py-1 mb-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span className="text-xs font-medium text-amber-600 dark:text-amber-400">Featured</span>
              </div>
            )}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              {hook.name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              @{hook.author.username}
            </p>
          </div>
          <div className="p-2 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 group-hover:bg-blue-500 dark:group-hover:bg-blue-600 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" />
          </div>
        </div>

        {/* Category and Language */}
        <div className="flex items-center gap-2 mb-4">
          <span className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold ${getCategoryColor(hook.category)} backdrop-blur-sm`}>
            {getCategoryLabel(hook.category)}
          </span>
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <Code2 className="w-3 h-3 text-gray-500 dark:text-gray-400" />
            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">{hook.language}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
          {hook.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/20">
            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{formatStars(hook.stars)}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100/80 dark:bg-gray-800/80">
            <GitFork className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{hook.forks || 0}</span>
          </div>
        </div>

        {/* Tags */}
        {hook.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {hook.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-gray-700/50"
              >
                #{tag}
              </span>
            ))}
            {hook.tags.length > 3 && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium text-gray-500 dark:text-gray-500">
                +{hook.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Last updated - subtle footer */}
        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Updated {new Date(hook.lastUpdated).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
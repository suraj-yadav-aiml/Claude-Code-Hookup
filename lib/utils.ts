import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatStars(stars?: number): string {
  if (!stars) return '0';
  if (stars >= 1000) {
    return `${(stars / 1000).toFixed(1)}k`;
  }
  return stars.toString();
}

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    'code-quality': 'Code Quality',
    'security': 'Security',
    'workflow': 'Workflow',
    'monitoring': 'Monitoring',
    'notifications': 'Notifications',
    'development-tools': 'Development Tools',
  };
  return labels[category] || category;
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'code-quality': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    'security': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    'workflow': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'monitoring': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    'notifications': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    'development-tools': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
  };
  return colors[category] || colors['development-tools'];
}
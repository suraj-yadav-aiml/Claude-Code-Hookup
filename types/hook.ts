export interface Hook {
  id: string;
  name: string;
  description: string;
  category: HookCategory;
  githubUrl: string;
  author: {
    username: string;
    avatarUrl?: string;
  };
  stars?: number;
  language: string;
  tags: string[];
  lastUpdated: string;
  featured?: boolean;
}

export type HookCategory =
  | 'code-quality'
  | 'security'
  | 'workflow'
  | 'monitoring'
  | 'notifications'
  | 'development-tools';

export interface HookFilters {
  search: string;
  category: HookCategory | '';
}
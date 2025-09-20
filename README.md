# 🪝 HookHub

**Discover and explore open-source Claude Code hooks to enhance your development workflow**

HookHub is a curated discovery platform for Claude Code hooks - user-defined shell commands that execute at various points in Claude Code's lifecycle. Find hooks for code quality, security, workflow automation, monitoring, and more.


## Features

- **🔍 Smart Search** - Find hooks by name, description, or tags
- **🏷️ Category Filtering** - Filter by code quality, security, workflow, monitoring, notifications, and development tools
- **⭐ Featured Hooks** - Discover popular and recommended hooks
- **📱 Responsive Design** - Works beautifully on desktop, tablet, and mobile
- **🌙 Dark Mode** - Automatic dark/light theme based on system preference
- **🚀 Fast Performance** - Built with Next.js 15 and optimized for speed

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Geist](https://vercel.com/font) family
- **Development**: ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hookhub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see HookHub in action.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Project Structure

```
hookhub/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main hooks browser page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── HookCard.tsx       # Individual hook display
│   ├── HookGrid.tsx       # Grid layout component
│   ├── SearchBar.tsx      # Search functionality
│   ├── CategoryFilter.tsx # Category filtering
│   └── HookFilters.tsx    # Combined filters
├── data/                  # Static data
│   └── hooks.ts           # Curated hooks collection
├── types/                 # TypeScript definitions
│   └── hook.ts            # Hook interfaces
├── lib/                   # Utility functions
│   └── utils.ts           # Helper functions
└── spec/                  # Documentation
    └── CLAUDE.md          # Complete project specification
```

## What are Claude Hooks?

Claude Code hooks are user-defined shell commands that execute at various points in Claude Code's lifecycle. They provide deterministic control over Claude Code's behavior, enabling:

- **Code Quality**: Automated linting, formatting, and testing
- **Security**: File protection and validation checks
- **Workflow**: Development pipeline automation
- **Monitoring**: Real-time observability and logging
- **Notifications**: Alerts and status updates

### Hook Event Types

- **PreToolUse**: Runs before tool calls and can block them
- **PostToolUse**: Fires after successful tool completion
- **UserPromptSubmit**: Fires when user submits a prompt
- **SessionEnd/Start**: Runs at session boundaries
- **Stop/SubagentStop**: Fires when execution stops
- **PreCompact**: Runs before conversation compacting

## Featured Hooks

HookHub currently showcases these popular Claude Code hooks:

1. **[claude-code-hooks-mastery](https://github.com/disler/claude-code-hooks-mastery)** - Complete hook lifecycle coverage
2. **[claudekit](https://github.com/carlrannaberg/claudekit)** - Security toolkit with file-guard
3. **[claude-hooks](https://github.com/decider/claude-hooks)** - Lightweight validation system
4. **[claude-hooks-typescript](https://github.com/johnlindquist/claude-hooks)** - Full TypeScript support
5. **[multi-agent-observability](https://github.com/disler/claude-code-hooks-multi-agent-observability)** - Real-time monitoring
6. **[awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)** - Curated collection

## Contributing

We welcome contributions to HookHub! Here's how you can help:

### Adding New Hooks

To add a new hook to the collection:

1. **Fork the repository**
2. **Update the hooks data** in `data/hooks.ts`:
   ```typescript
   {
     id: 'unique-id',
     name: 'hook-name',
     description: 'Brief description of what the hook does',
     category: 'appropriate-category',
     githubUrl: 'https://github.com/username/repo',
     author: {
       username: 'github-username',
       avatarUrl: 'https://github.com/username.png',
     },
     stars: 0, // GitHub stars (optional)
     language: 'Python', // Primary language
     tags: ['tag1', 'tag2'],
     lastUpdated: '2024-12-15',
     featured: false, // Set to true for exceptional hooks
   }
   ```
3. **Test your changes** locally
4. **Submit a pull request** with a clear description

### Development Guidelines

- Follow the existing code style and patterns
- Write clear, descriptive commit messages
- Test your changes thoroughly
- Update documentation when needed
- Ensure ESLint passes: `npm run lint`

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- **Claude Code Team** - For creating the amazing Claude Code platform
- **Open Source Community** - For building and sharing incredible hooks
- **Contributors** - For helping improve HookHub

## 🔗 Links

- **[Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)**
- **[Hooks Reference](https://docs.anthropic.com/en/docs/claude-code/hooks)**
- **[Claude Code GitHub](https://github.com/anthropics/claude-code)**


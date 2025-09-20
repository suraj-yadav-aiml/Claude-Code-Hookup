# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HookHub is a Next.js 15 application built with TypeScript, React 19, and Tailwind CSS 4. The project follows the modern Next.js App Router architecture.

## Development Commands

- `npm run dev` - Start development server (runs on http://localhost:3000)
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code linting

## Architecture

This is a Next.js App Router application with the following structure:

### Core Files
- `app/layout.tsx` - Root layout component with Geist font configuration
- `app/page.tsx` - Home page component
- `app/globals.css` - Global styles with Tailwind CSS and custom CSS variables
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration with `@/*` path mapping

### Styling
- Uses Tailwind CSS 4 with PostCSS
- Custom CSS variables for theming (`--background`, `--foreground`)
- Dark mode support via `prefers-color-scheme`
- Geist and Geist Mono fonts from `next/font/google`

### Code Style
- ESLint configured with Next.js TypeScript preset
- Strict TypeScript configuration enabled
- App Router pattern with file-based routing in `app/` directory

## Key Dependencies

- **Framework**: Next.js 15.5.3 with React 19
- **Styling**: Tailwind CSS 4 with PostCSS
- **Development**: TypeScript, ESLint with Next.js config
- **Fonts**: Geist and Geist Mono via next/font

## Development Notes

- Project uses Next.js App Router (not Pages Router)
- All components should be TypeScript with proper typing
- Follow the existing component pattern in `app/page.tsx` for new pages
- Styling follows Tailwind utility-first approach with custom CSS variables for theming
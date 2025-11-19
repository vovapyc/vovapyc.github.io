# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with SvelteKit 5 and deployed to GitHub Pages. It's a static site showcasing work experience and contact information.

## Development Commands

### Package Manager
This project uses **pnpm** (not npm or yarn). All dependency management must use pnpm.

### Common Commands
- `pnpm install` - Install dependencies
- `pnpm run dev` - Start development server
- `pnpm run dev -- --open` - Start dev server and open in browser
- `pnpm run build` - Build for production (outputs to `build/` directory)
- `pnpm run preview` - Preview production build locally
- `pnpm run check` - Type check with svelte-check
- `pnpm run check:watch` - Type check in watch mode
- `pnpm run format` - Format code with Prettier
- `pnpm run lint` - Check formatting with Prettier

## Architecture

### Build Configuration
- **Adapter**: Uses `@sveltejs/adapter-static` for static site generation
- **Prerendering**: Enabled via `export const prerender = true` in `src/routes/+layout.ts`
- **Output**: Builds to `build/` directory (configured in `svelte.config.js`)

### Styling Stack
- **Tailwind CSS v4**: Configured via `@tailwindcss/vite` plugin in Vite
- **DaisyUI**: Component library for pre-built UI components (Card, etc.)
- **Custom Theme**: Extended in `tailwind.config.js` with custom base colors
- **Global Styles**: Defined in `src/app.css` which imports JetBrains Mono font and sets up Tailwind/DaisyUI

### Component Structure
The app uses a component-based architecture with reusable components in `src/lib/components/`:
- **Card.svelte**: Generic card wrapper with title and optional footer slot
- **WorkExperiences.svelte**: Container for work experience timeline (wraps Card)
- **WorkExperience.svelte**: Individual timeline item with company/period props
- **Link.svelte**: Reusable link component

Components use Svelte 5's modern syntax including `$props()` runes.

### SEO & Metadata
Metadata is centralized in `src/routes/+layout.svelte` including:
- OpenGraph tags for social sharing
- Structured data (JSON-LD) for search engines
- Meta description and canonical URL
- Dynamic SVG emoji favicon

### Assets
Static assets like videos are stored in `src/lib/assets/` and imported directly into components using Vite's asset handling.

## Deployment

The site automatically deploys to GitHub Pages on every push to `master` branch via `.github/workflows/deploy.yml`. The workflow:
1. Uses pnpm 9 and Node.js 24
2. Runs `pnpm install --frozen-lockfile=false`
3. Builds with `pnpm run build`
4. Deploys the `build/` directory to GitHub Pages

Manual deployment can be triggered via workflow_dispatch.

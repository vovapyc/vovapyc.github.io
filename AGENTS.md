# Repository Guide

## What this repository is

This is Volodymyr Pytsiuk's personal portfolio and app-policy website. It is a statically prerendered SvelteKit site deployed to GitHub Pages at `https://vovapyc.github.io/`.

The site contains:

- the portfolio homepage with personal, project, work, and contact sections;
- English and Canadian French privacy policies for Days in Canada;
- the privacy policy for The Shy Dock.

## Stack and package management

- Svelte 5 and SvelteKit 2
- TypeScript with strict checking
- Tailwind CSS 4 and DaisyUI
- `@sveltejs/adapter-static`, with output written to `build/`
- PostHog browser analytics
- pnpm only; `pnpm-lock.yaml` is the canonical lockfile

Do not create, update, or commit `package-lock.json`. Do not commit generated `build/`, `.svelte-kit/`, or `node_modules/` content.

## Repository map

- `src/routes/+page.svelte` — all portfolio homepage content and the ordered lists of projects and work experience.
- `src/routes/+layout.svelte` — global styles, favicon, SEO metadata, Open Graph tags, and Person JSON-LD.
- `src/routes/+layout.ts` — site-wide prerendering and browser-only PostHog initialization.
- `src/routes/canada-days-privacy/+page.svelte` — English Days in Canada privacy policy.
- `src/routes/canada-days-privacy-fr/+page.svelte` — Canadian French Days in Canada privacy policy.
- `src/routes/the-shy-dock-privacy/+page.svelte` — The Shy Dock privacy policy.
- `src/lib/components/` — reusable `Card`, `Project`, `WorkExperience`, and link wrappers.
- `src/lib/assets/me.mov` — imported homepage video.
- `src/app.css` — global Tailwind/DaisyUI setup and JetBrains Mono font.
- `.github/workflows/deploy.yml` — GitHub Pages build and deployment on pushes to `master`.

## Editing conventions

- Keep homepage content in `src/routes/+page.svelte`; extend the existing components instead of duplicating their markup.
- Preserve the order of portfolio sections and project cards unless reordering is explicitly requested.
- Treat project names, descriptions, technology tags, and destination URLs as exact public copy. Verify changed public URLs before publishing.
- When removing a portfolio item or component, remove its import, render site, and now-unused file together.
- Privacy-policy claims must match actual app behavior. Do not invent collection, storage, analytics, payment, or third-party-service details.
- The English and French Days in Canada policies are paired documents. When behavior changes affect both, update both and keep their revision dates aligned; do not silently rewrite translations for unrelated edits.
- Keep browser-only APIs and analytics behind the existing `browser` guard so static prerendering continues to work.
- Keep the PostHog host and `project: 'byvova.com'` registration unchanged unless the task explicitly concerns analytics.
- Use the existing Tailwind/DaisyUI visual language, including light/dark styles and responsive `md:` behavior. Check visual changes at desktop and narrow mobile widths.
- Follow the local component style when making a small edit. Do not migrate legacy `export let` components to Svelte 5 runes unless migration is part of the task.
- Use tabs, single quotes, no trailing commas, and the 100-column Prettier configuration in `.prettierrc`.

## Commands

Run commands from the repository root:

```sh
pnpm install
pnpm run dev
pnpm run check
pnpm run lint
pnpm run build
pnpm run preview
```

`pnpm run lint` is a Prettier check; there is no separate ESLint configuration or automated test suite. Avoid `pnpm run format` when unrelated user changes are present because it rewrites the whole repository.

For a normal change, run at least:

```sh
pnpm run check
pnpm run lint
pnpm run build
```

For content-only changes, also run `git diff --check`. For link changes, verify the destination. For layout or styling changes, inspect the rendered page rather than relying only on the build.

## Deployment

Every push to `master` triggers `.github/workflows/deploy.yml`, which installs with pnpm, builds the static site, uploads `build/`, and deploys it to GitHub Pages. A successful local build does not prove deployment succeeded; check the Pages workflow and the live route when deployment verification is part of the task.

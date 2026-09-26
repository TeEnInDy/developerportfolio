# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev`: dev server on <http://localhost:3000>
- `npm run build`: production build. It also type-checks, so use it to verify changes (there is no separate `tsc` script).
- `npm run lint`: ESLint 9 flat config (`eslint-config-next` core-web-vitals + typescript)

There is no test framework. Verify changes by building and by loading the routes (`/`, `/works`, `/about`, `/contact`) in the dev server.

## Stack

Next.js 16 (App Router) with React 19, TypeScript (strict), and Tailwind CSS v4 (configured through `@theme inline` in `src/app/globals.css`; there is no `tailwind.config`). Per AGENTS.md, check `node_modules/next/dist/docs/` before using Next APIs. For example, layouts use the global `LayoutProps<"/">` type instead of hand-written props.

## Architecture

A personal developer portfolio. It is a static, content-driven site with no API routes, database or env vars.

- **Content lives in `src/data/*.ts`** (`profile`, `projects`, `skills`, `experience`, `education`, `quotation`) as typed exports. Components import from there. To change what the site says, edit the data files, not the components. Project images are in `public/images/`, referenced by URL-encoded paths such as `/images/Warehouse%20Management%20System.jpg`.
- **Routes** (`src/app/`): `page.tsx` (home), `works/`, `about/`, `contact/`. `layout.tsx` wraps every page with `Navbar`/`Footer` and builds metadata from `profile`.
- **Components** (`src/components/`) are grouped by the page that uses them (`home/`, `works/`, `about/`), plus `layout/` and shared `ui/` primitives (`GlassCard`, `Tag`). Components are Server Components by default. Only the interactive ones (`ProjectCard`, `Reveal`, `ServiceQuotation`) are marked `"use client"`.
- **Fonts**: Geist (display) and Inter (body) are loaded in the root layout as CSS variables, exposed as the Tailwind `font-display` and `font-body` utilities. The `/about` page also loads IBM Plex Sans Thai (`--font-thai`) because its content includes Thai.

## Styling conventions

- Dark theme only: page background `#0A0A0A`, text `#F5F5F5`, accent violet `#A78BFA`. Each project has its own `accent` color in `projects.ts`.
- Most layout and visual styling is written as inline `style={{...}}` objects. Tailwind classes are used mainly for responsive grid and layout breakpoints (for example, the `SPAN_CLASSES` map in `ProjectCard` for the 12-column works grid). Follow the surrounding file's approach.
- The `/about` section uses a CSS module (`about.module.css`) with its own scoped custom properties and the scroll-reveal animation that `Reveal` toggles through `data-visible`.

## Product context

`PRODUCT.md` (used by the `impeccable` design skill in `.claude/skills/`) describes the audience: recruiters and freelance clients. Its "Operating Context" section is out of date. It refers to a Vite prototype under `src/src/` that has since been removed and ported into this Next.js app. Its core rule still applies: show only real information about the owner, and never invent projects, metrics or bio content.

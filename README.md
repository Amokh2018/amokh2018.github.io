# Ali Mokh — interactive portfolio

Astro 7 + React 19 + TypeScript, with Motion layout transitions, Lucide icons and self-hosted Manrope / DM Serif Display fonts.

## Work locally

Use Node 22.12 or later.

```sh
npm ci
npm run dev
```

The four portfolio pages are authored in `src/pages/`. Shared layout, styling and interactive components live in `src/layouts/`, `src/styles/` and `src/components/`. Career, project and course content is maintained in `src/data/portfolio.ts`.

The supplied portrait is `assets/imgs/profile.png`. Astro generates an optimized WebP for the home page; the original is preserved.

## Build, verify and publish

```sh
npm run build
npm test
npm run preview
```

`npm run build` type-checks the site, renders all pages, optimizes the portrait, and copies generated HTML and `_astro/` assets to the repository root. Commit the source, lockfile, generated four HTML pages, `_astro/` and `.nojekyll` together. GitHub Pages uses GitHub Actions: pushes to `main` build, test, upload `.build/` and deploy it. The workflow can also be run manually on `main`. Generated root files remain available for a plain static preview.

The build also copies existing course pages and their assets into `.build/` for local production preview. Existing `/teaching.html`, `/consultancy.html`, `/projects.html` and course URLs are retained. The legacy course templates are preserved with their original DevCRUD assets; `gulpfile.js` belongs to those old templates and is not used by the new build.

The GitHub Actions workflow installs dependencies, checks types, builds and tests the site. Pull requests run validation only. Successful pushes to `main` (or manual runs on `main`) upload the built website and deploy it through the `github-pages` environment. The deployment job has only Pages and OIDC write permissions; it runs only after the build succeeds.

## Interaction and accessibility

- Career timeline filters with native expandable role details.
- Project and course filters with animated layout updates and disclosure panels.
- Interactive 3GPP Knowledge Fabric concept map.
- Responsive navigation with keyboard controls and a reading-progress indicator.
- Server-rendered content, links and disclosures remain available without JavaScript; filters appear after hydration.
- Reduced-motion support, visible focus states, semantic landmarks and local fonts.

## Content boundaries

Use verified titles and dates. Present leadership as a career direction, without claiming an executive role already held. Distinguish research, exploratory repositories, teaching and project-management work. Publicly refer to the telecom knowledge work as 3GPP Knowledge Fabric. Keep work-traceability entries generic and omit client information. Do not add private personal or family details.

The old PDF under `assets/pdf/` remains an archive and is not linked as a current résumé.

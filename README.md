# Ali Mokh — professional portfolio

Static multi-page portfolio, served by GitHub Pages. No build step is required for the current pages.

- `index.html`: career, education, expertise and technical leadership direction.
- `teaching.html`: ESILV, professional training and public course resources.
- `consultancy.html`: advisory focus, relevant responsibilities and delivery approach.
- `projects.html`: filterable research, project and teaching portfolio.
- `assets/css/portfolio.css` and `assets/js/portfolio.js`: shared styling and interaction.
- `courses/`: legacy telecom outlines; the old ML URL now routes readers to actual ML resources.

## Preview

From the repository root, run `python3 -m http.server 8000` and visit http://localhost:8000.

## Content maintenance

Use verified roles and dates. Distinguish research themes, educational repositories and project-management responsibilities from deployed products. Do not add client results, metrics or executive titles without evidence. Keep personal and family information out of the site.

The legacy `assets/pdf/my_CV.pdf` predates the current profile and is not linked as a current résumé. The on-page career section is the current summary. Work-traceability descriptions omit client identity and internal details. 3GPP Knowledge Fabric is the public-facing name for the telecom knowledge work.

Navigation works without JavaScript; JavaScript adds a mobile menu and category filters. Project details use native HTML disclosure controls. Reduced-motion preferences are respected.

Legacy course pages use the original John Doe template from DevCRUD, with its bundled assets. The current four-page portfolio uses the shared portfolio stylesheet.

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
export default defineConfig({ site: 'https://amokh2018.github.io', integrations: [react()], outDir: './.build', build: { format: 'file' }, devToolbar: { enabled: false } });

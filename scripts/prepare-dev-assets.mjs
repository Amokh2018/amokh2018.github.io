import { cp, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = resolve(import.meta.dirname, '..');
await mkdir(resolve(root, 'public'), { recursive: true });
for (const folder of ['assets', 'courses']) {
  await cp(resolve(root, folder), resolve(root, 'public', folder), { recursive: true, filter: source => !source.endsWith('.DS_Store') });
}

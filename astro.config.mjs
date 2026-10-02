// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: set BASE_PATH=/your-repo-name and SITE_URL=https://<user>.github.io
// User/org site (username.github.io repo) or custom domain: leave unset (defaults below).
function normalizeBase(path) {
  if (!path || path === '/') return '/';
  return path.endsWith('/') ? path : `${path}/`;
}

const base = normalizeBase(process.env.BASE_PATH);
const site =
  process.env.SITE_URL ??
  (base === '/' ? 'https://ftckronos.com' : undefined);

// https://astro.build/config
export default defineConfig({
  site,
  base,
});

function siteBase(): string {
  const base = import.meta.env.BASE_URL;
  if (!base || base === '/') return '/';
  return base.endsWith('/') ? base : `${base}/`;
}

/** Prefix internal paths with Astro base (required for GitHub Pages project sites). */
export function withBase(path: string): string {
  const base = siteBase();

  if (!path || path === '/') {
    return base;
  }

  if (path.startsWith('/#')) {
    return `${base.replace(/\/$/, '')}${path}`;
  }

  if (path.startsWith('#')) {
    return `${base.replace(/\/$/, '')}${path}`;
  }

  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
}

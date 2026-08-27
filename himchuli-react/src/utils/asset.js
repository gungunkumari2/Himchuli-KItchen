/** Prefix public paths with Vite BASE_URL (needed for GitHub Pages). */
export function asset(path) {
  if (!path) return path
  if (/^https?:\/\//i.test(path) || path.startsWith('data:')) return path
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${String(path).replace(/^\//, '')}`
}

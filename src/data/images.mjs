// Foto do produto (webp que não é OG) em public/img/<slug>/, para os cartões de categoria.
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('public/img');
export function productImage(href) {
  const slug = href.replace(/^\/|\/$/g, '').split('/')[0];
  try {
    const f = fs.readdirSync(path.join(root, slug)).filter((n) => n.endsWith('.webp') && !n.startsWith('og-')).sort()[0];
    return f ? `/img/${slug}/${f}` : null;
  } catch {
    return null;
  }
}

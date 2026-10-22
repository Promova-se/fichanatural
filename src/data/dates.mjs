// Datas reais de cada página, tiradas do histórico do Git:
// publicada = primeiro commit do arquivo da página; atualizada = último commit que mudou esse arquivo.
// Usado no layout (datePublished, dateModified, "Atualizado em") e no lastmod do sitemap.
// Precisa do histórico completo (no GitHub Actions, checkout com fetch-depth: 0).
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const cache = new Map();

function git(args) {
  try {
    return execSync(`git ${args}`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return '';
  }
}

// "/collagen-vitta/funciona/" -> "src/pages/collagen-vitta/funciona/index.astro"
function fileFor(pathname) {
  const clean = pathname.replace(/^\/+|\/+$/g, '');
  const candidates = clean
    ? [`src/pages/${clean}/index.astro`, `src/pages/${clean}.astro`]
    : ['src/pages/index.astro'];
  return candidates.find((f) => existsSync(f));
}

export function pageDates(pathname) {
  if (cache.has(pathname)) return cache.get(pathname);
  const today = new Date().toISOString().slice(0, 10);
  const file = fileFor(pathname);
  let published = today;
  let modified = today;
  if (file) {
    const history = git(`log --follow --format=%cs -- "${file}"`).split('\n').filter(Boolean);
    if (history.length) {
      modified = history[0];
      published = history[history.length - 1];
    }
  }
  const result = { published, modified };
  cache.set(pathname, result);
  return result;
}

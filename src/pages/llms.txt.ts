// /llms.txt: resumo do site para assistentes de IA (formato proposto em llmstxt.org).
// Gerado a partir do catálogo e dos guias, então se atualiza sozinho a cada produto ou guia novo.
import type { APIRoute } from 'astro';
import { site, catalog, guideHubs } from '../data/site';

export const GET: APIRoute = () => {
  const abs = (href: string) => new URL(href, site.url).href;
  const lines: string[] = [
    `# ${site.name}`,
    '',
    `> ${site.name} (${site.url}) publica fichas independentes de suplementos e produtos naturais vendidos no Brasil, em português. Cada ficha confere composição e doses, compara com estudos científicos, separa promessa de evidência, verifica empresa, CNPJ e Reclame Aqui, e registra preços e regras de garantia com a data da consulta.`,
    '',
    `Os textos são da Redação ${site.name}. O site é mantido por ${site.company} (CNPJ ${site.cnpj}) e recebe comissão de afiliado de alguns produtos analisados, sem que isso mude a análise. O conteúdo é informativo e não substitui orientação médica. Datas de publicação e atualização aparecem em cada página.`,
    '',
    '## Sobre o site',
    '',
    `- [Sobre e critérios de análise](${abs('/sobre/')}): quem escreve, como cada ficha é feita e quando um produto é tratado com mais rigor`,
    `- [Aviso de afiliado](${abs('/aviso-de-afiliado/')}): como o site se mantém`,
    `- [Todos os produtos](${abs('/produtos/')})`,
    `- [Todos os guias](${abs('/guias/')})`,
    '',
    '## Guias de ingredientes e comparações',
    '',
  ];
  for (const hub of guideHubs) {
    for (const g of hub.pages) lines.push(`- [${g.title}](${abs(g.href)})`);
  }
  lines.push('', '## Fichas de produtos', '');
  for (const p of catalog) {
    lines.push(`### ${p.name}`, '', `${p.summary}`, '');
    for (const pg of p.pages) lines.push(`- [${pg.title}](${abs(pg.href)})`);
    lines.push('');
  }
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

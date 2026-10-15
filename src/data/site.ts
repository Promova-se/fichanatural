// Dados centrais do site. Para adicionar um produto, inclua um item em `products`.
export const site = {
  name: 'Ficha Natural',
  url: 'https://fichanatural.com.br',
  tagline: 'A ficha técnica dos produtos naturais, sem promessa milagrosa.',
  email: 'loja@promovase.net',
  company: 'Promova-se',
  cnpj: '43.315.814/0001-28',
  updated: '2026-10-14',
  ga4: 'G-L47PVELQQ4',
};

// Código de afiliado na Monetizze (parâmetro mcr) e montagem do link de checkout de cada kit.
export const affiliate = { monetizze: 'AXA22582261' };
// O código `mcr` muda por produto: passe o do produto (padrão = ReduPhine).
// Link oficial de afiliado da Monetizze ("Pegar link de venda"): /r/{mcr}?u=c&pl={código do checkout sem o D inicial}.
// Passa pelo rastreio da Monetizze e redireciona para o checkout com ?mcr=. Testado nos 23 kits em 15/10/2026.
// Exceção: checkouts cujo código não começa com D (ex.: Inibe One, KHG273901) não funcionam no /r/ e vão
// direto para app.monetizze.com.br/checkout/{código}?mcr=..., o mesmo destino do redirecionamento oficial.
export const checkoutUrl = (plan: string, mcr: string = affiliate.monetizze) =>
  plan.startsWith('D')
    ? `https://app.monetizze.com.br/r/${mcr}?u=c&pl=${plan.slice(1)}`
    : `https://app.monetizze.com.br/checkout/${plan}?mcr=${mcr}`;

export type Product = {
  slug: string;
  name: string;
  category: 'emagrecimento' | 'beleza' | 'bem-estar';
  status: 'publicado' | 'aguardando-dados';
  summary: string;
  // Links de afiliado por kit. Preencher `label` e `price` quando o produtor confirmar.
  offers: { label: string; price?: string; url: string }[];
};

// Morosil Colágeno removido em 10/10/2026: o produtor encerrou o programa de afiliados.
export const products: Product[] = [
  {
    slug: 'reduphine-caps',
    name: 'ReduPhine Caps',
    category: 'emagrecimento',
    status: 'publicado',
    summary: 'Cápsulas com spirulina, psyllium, quitosana e cromo, da VittaBalance.',
    offers: [{ label: 'Site oficial', url: 'https://app.monetizze.com.br/r/AXA22582261' }],
  },
];

// Dados do ReduPhine conferidos na página oficial em 10/10/2026.
export const reduphine = {
  name: 'ReduPhine Caps',
  brand: 'VittaBalance',
  cnpj: '40.249.792/0001-57',
  sac: 'sac@vittabalance.com.br',
  link: 'https://app.monetizze.com.br/r/AXA22582261',
  ingredients: ['Spirulina', 'Psyllium', 'Quitosana', 'Cromo'],
  // `plan` = código do checkout na Monetizze. Link do kit = checkoutUrl(plan).
  kits: [
    { name: '1 pote', months: 1, total: 147, installments: '12x de R$ 14,76', plan: 'DKM307454' },
    { name: 'Compre 2, leve 3', months: 3, total: 197, installments: '12x de R$ 19,78', plan: 'DUG229618' },
    { name: 'Compre 3, leve 5', months: 5, total: 247, installments: '12x de R$ 24,80', plan: 'DLT200331' },
    { name: 'Compre 5, leve 8', months: 8, total: 377, installments: '12x de R$ 37,85', plan: 'DBS298416' },
  ],
};

// Combo ReduPhine Caps + ReduGota, conferido na página oficial em 11/10/2026.
// Preços conferidos no print da página e no checkout em 11/10/2026. Cada kit = N potes de ReduPhine + 1 ReduGota.
// SAC informado no checkout: sac@vittabalance.com.br. Parcelas com acréscimo de 2,99% a.m.
export const combo = {
  name: 'ReduPhine Caps + ReduGota',
  link: 'https://reduphinecaps.com.br/combo-promo-phinegota-monetizze/?mcr=AXA22582261',
  ingredients: ['Spirulina', 'Quitosana', 'Psyllium', 'Cromo', 'Café verde', 'Extrato de laranja moro', 'Chlorella'],
  kits: [
    { name: 'Pague 1, leve 2', months: 1, total: 119.9, installments: '12x de R$ 12,04', plan: 'DKZ360706' },
    { name: 'Pague 2, leve 3', months: 2, total: 139.9, installments: '12x de R$ 14,05', plan: 'DMV360707' },
    { name: 'Pague 3, leve 4', months: 3, total: 159.9, installments: '12x de R$ 16,05', plan: 'DSM360709' },
  ],
};

// Vitta Resveratrol, conferido na página oficial em 11/10/2026.
// Kits: nomes e códigos tirados da página; preços conferidos no print de 11/10/2026 (1 pote = 1 mês).
export const resveratrol = {
  name: 'Vitta Resveratrol',
  distributor: 'Natturabio Produtos Naturais',
  cnpj: '37.971.418/0001-56',
  sac: 'sac@natturabio.com.br',
  mcr: 'ACA24896422',
  link: 'https://app.monetizze.com.br/r/ACA24896422',
  ingredients: ['Trans-resveratrol', 'Colágeno hidrolisado', 'Ácido hialurônico', 'Silício orgânico', 'Vitamina K2', 'Vitamina C', 'Vitamina E', 'Retinol (vitamina A)'],
  kits: [
    { name: 'Compre 1, leve 2', qty: '2 potes · 2 meses', months: 2, total: 157, installments: '12x de R$ 15,76', plan: 'DRE294254' },
    { name: 'Compre 2, leve 3', qty: '3 potes · 3 meses', months: 3, total: 197, installments: '12x de R$ 19,78', plan: 'DJF294255' },
    { name: 'Compre 3, leve 4', qty: '4 potes · 4 meses', months: 4, total: 257, installments: '12x de R$ 25,80', plan: 'DPC294256' },
    { name: 'Compre 5, leve 6', qty: '6 potes · 6 meses', months: 6, total: 377, installments: '12x de R$ 37,85', plan: 'DXB294257' },
  ],
};

export const resveratrolPages = [
  { href: '/vitta-resveratrol/', title: 'Vitta Resveratrol: ficha completa, composição e preço', short: 'Ficha completa' },
  { href: '/vitta-resveratrol/funciona/', title: 'Vitta Resveratrol funciona? O que a ciência diz de cada ingrediente', short: 'Funciona?' },
  { href: '/vitta-resveratrol/como-tomar/', title: 'Como tomar Vitta Resveratrol, efeitos colaterais e quem não deve usar', short: 'Como tomar e cuidados' },
  { href: '/vitta-resveratrol/onde-comprar/', title: 'Onde comprar Vitta Resveratrol original e como funciona a garantia', short: 'Onde comprar e garantia' },
  { href: '/vitta-resveratrol/e-confiavel/', title: 'Vitta Resveratrol é confiável? Reclame Aqui e a Natturabio', short: 'É confiável? Reclame Aqui' },
];

// OzenVitta, conferido na página oficial, no rótulo e no checkout em 12/10/2026.
// Marca no rótulo: OzenPharma. Vendedor no checkout: OZENVITTA. Nenhum dos três mostra CNPJ.
// Parcelas com acréscimo de 2,99% a.m. (o total à vista vale para o Pix).
export const ozenvitta = {
  name: 'OzenVitta',
  brand: 'OzenPharma',
  sac: 'sac@ozenpharma.com',
  mcr: 'ATX24835707',
  link: 'https://app.monetizze.com.br/r/ATX24835707',
  ingredients: ['Psyllium', 'Inulina', 'L-carnitina', 'Spirulina', 'Laranja moro', 'Picolinato de cromo'],
  kits: [
    { name: 'Pote único', qty: '1 pote · 30 dias', months: 1, total: 147, installments: '12x de R$ 14,76', plan: 'DHV290570' },
    { name: 'Leve 3, pague 2', qty: '3 potes · 90 dias', months: 3, total: 197, installments: '12x de R$ 19,78', plan: 'DDS290571' },
    { name: 'Leve 5, pague 3', qty: '5 potes · 150 dias', months: 5, total: 247, installments: '12x de R$ 24,80', plan: 'DNT290572' },
    { name: 'Leve 8, pague 5', qty: '8 potes · 240 dias', months: 8, total: 377, installments: '12x de R$ 37,85', plan: 'DGQ290574' },
  ],
};

// TG30 (Crisfit), conferido na página oficial, no rótulo e no checkout em 14/10/2026.
// Fabricante: Lemoncaps (Cuiabá/MT). SAC no checkout: Gmail + WhatsApp. Páginas de troca e privacidade dão 404.
export const tg30 = {
  name: 'TG30 Crisfit',
  maker: 'Lemoncaps Indústria e Comércio LTDA',
  cnpj: '55.836.075/0001-07',
  sacLabel: 'sac@lemoncaps.com.br',
  sacCheckout: 'emagrecedortg30@gmail.com',
  mcr: 'AEB25846147',
  link: 'https://app.monetizze.com.br/r/AEB25846147',
  ingredients: ['Extrato de cúrcuma', 'Extrato de café verde', 'Bitartarato de colina', 'Inulina', 'Extrato de feno-grego', 'Picolinato de cromo', 'Vitamina D3', 'Vitamina B12'],
  kits: [
    { name: '1 frasco', qty: '1 frasco · 30 dias', months: 1, total: 149.9, installments: '12x de R$ 15,05', plan: 'DKB385163' },
    { name: '2 frascos', qty: '2 frascos · 60 dias', months: 2, total: 249.9, installments: '12x de R$ 25,09', plan: 'DUM385164' },
    { name: '3 frascos', qty: '3 frascos · 90 dias', months: 3, total: 349.9, installments: '12x de R$ 35,13', plan: 'DMK385165' },
    { name: '6 frascos', qty: '6 frascos · 180 dias', months: 6, total: 649.9, installments: '12x de R$ 65,25', plan: 'DXR385766' },
  ],
};

export const tg30Pages = [
  { href: '/tg30/', title: 'TG30 Crisfit: ficha completa, composição e preço', short: 'Ficha completa' },
  { href: '/tg30/funciona/', title: 'TG30 funciona? As doses do rótulo e o que a ciência diz', short: 'Funciona?' },
  { href: '/tg30/como-tomar/', title: 'Como tomar TG30: quantas gotas, efeitos colaterais e quem não deve usar', short: 'Como tomar e cuidados' },
  { href: '/tg30/onde-comprar/', title: 'Onde comprar TG30 original: site oficial, preço e garantia', short: 'Onde comprar e garantia' },
  { href: '/tg30/e-confiavel/', title: 'TG30 é confiável? Empresa, garantia e pontos de atenção', short: 'É confiável?' },
];

// Mounjax (gotas), da Ozenpharma, conferido na página oficial e no checkout em 14/10/2026.
// Nome lembra o Mounjaro (tirzepatida). Existe outro "Mounjax" em cápsulas (mounjax.com.br, Sigofarma, Braip): não é o mesmo produto.
export const mounjax = {
  name: 'Mounjax',
  brand: 'Ozenpharma',
  sac: 'sac@ozenpharma.com',
  mcr: 'ARZ25846150',
  link: 'https://app.monetizze.com.br/r/ARZ25846150',
  ingredients: ['Café verde', 'Dihidrocapsiato', 'Cúrcuma', 'Colina', 'Inulina', 'Feno-grego', 'Cromo', 'Vitamina D3', 'Vitamina B12'],
  kits: [
    { name: 'Frasco único', qty: '1 frasco · 30 dias', months: 1, total: 147, installments: '12x de R$ 14,76', plan: 'DQH336826' },
    { name: 'Leve 3, pague 2', qty: '3 frascos · 90 dias', months: 3, total: 197, installments: '12x de R$ 19,78', plan: 'DAJ338770' },
    { name: 'Leve 5, pague 3', qty: '5 frascos · 150 dias', months: 5, total: 247, installments: '12x de R$ 24,80', plan: 'DMU338771' },
    { name: 'Leve 8, pague 5', qty: '8 frascos · 240 dias', months: 8, total: 377, installments: '12x de R$ 37,85', plan: 'DUX338772' },
  ],
};

export const mounjaxPages = [
  { href: '/mounjax/', title: 'Mounjax: ficha completa, composição e preço', short: 'Ficha completa' },
  { href: '/mounjax/funciona/', title: 'Mounjax funciona? O que a fórmula pode e não pode fazer', short: 'Funciona?' },
  { href: '/mounjax/como-tomar/', title: 'Como tomar Mounjax: quantas gotas, efeitos colaterais e contraindicações', short: 'Como tomar e cuidados' },
  { href: '/mounjax/onde-comprar/', title: 'Onde comprar Mounjax original: site oficial e cuidado com outro produto de mesmo nome', short: 'Onde comprar e site oficial' },
  { href: '/mounjax/anvisa/', title: 'Mounjax tem aprovação da Anvisa? E é o mesmo que Mounjaro?', short: 'Anvisa e Mounjaro' },
  { href: '/mounjax/e-confiavel/', title: 'Mounjax é confiável? Reclame Aqui e a empresa por trás', short: 'É confiável?' },
];

// DTX Black, da New Skin Suplementos (não é a New Skin da Divinitè), conferido na página e no checkout em 15/10/2026.
// Sem CNPJ, sem doses; "aprovado e eficaz pela Anvisa" na página; reembolso só com produto lacrado em 7 dias.
export const dtxblack = {
  name: 'DTX Black',
  brand: 'New Skin Suplementos',
  sac: 'suporte@portalnewskin.com.br',
  mcr: 'ANJ25846234',
  link: 'https://app.monetizze.com.br/r/ANJ25846234',
  ingredients: ['Psyllium', 'Cromo', 'Cafeína', 'Spirulina', 'Inulina', 'Farinha de linhaça'],
  kits: [
    { name: 'Experimente', qty: '1 pote · 30 dias', months: 1, total: 157, installments: '12x de R$ 15,76', plan: 'DHP376474' },
    { name: 'Pague 1, leve 2', qty: '2 potes · 60 dias', months: 2, total: 198, installments: '12x de R$ 19,88', plan: 'DPH376475' },
    { name: 'Pague 2, leve 3', qty: '3 potes · 90 dias', months: 3, total: 298, installments: '12x de R$ 29,92', plan: 'DAT376476' },
    { name: 'Pague 3, leve 5', qty: '5 potes · 150 dias', months: 5, total: 398, installments: '12x de R$ 39,96', plan: 'DJM376477' },
  ],
};

export const dtxblackPages = [
  { href: '/dtx-black/', title: 'DTX Black: ficha completa, composição e preço', short: 'Ficha completa' },
  { href: '/dtx-black/funciona/', title: 'DTX Black funciona? A promessa de 4 kg em 30 dias', short: 'Funciona?' },
  { href: '/dtx-black/como-tomar/', title: 'Como tomar DTX Black: cafeína, efeitos colaterais e quem não deve usar', short: 'Como tomar e cuidados' },
  { href: '/dtx-black/onde-comprar/', title: 'Onde comprar DTX Black original: preço, entrega e reembolso', short: 'Onde comprar e reembolso' },
  { href: '/dtx-black/e-confiavel/', title: 'DTX Black é confiável? Empresa, Anvisa e Reclame Aqui', short: 'É confiável?' },
];

// Inibe One, da Nutracaps Digital LTDA (CNPJ 29.822.523/0001-03, Belo Horizonte), conferido em 15/10/2026.
// Doses por cápsula (tabela da página): psyllium 100 mg, espirulina 75, FOS 75, inulina 50, chia 75, ágar 50, quitosana 50, cromo 125 mcg.
export const inibeone = {
  name: 'Inibe One',
  company: 'Nutracaps Digital LTDA',
  cnpj: '29.822.523/0001-03',
  sac: 'inibeone@gmail.com',
  mcr: 'AYZ25846371',
  link: 'https://app.monetizze.com.br/r/AYZ25846371',
  ingredients: ['Psyllium', 'Espirulina', 'Frutooligossacarídeos (FOS)', 'Inulina', 'Farinha de chia', 'Ágar-ágar', 'Quitosana', 'Cromo'],
  dose: [
    ['Psyllium', '100 mg'], ['Espirulina', '75 mg'], ['Frutooligossacarídeos (FOS)', '75 mg'], ['Farinha de chia', '75 mg'],
    ['Inulina', '50 mg'], ['Ágar-ágar', '50 mg'], ['Quitosana', '50 mg'], ['Cromo', '125 mcg (357% do valor diário)'],
  ],
  kits: [
    { name: '1 pote', qty: '1 pote · 1 mês', months: 1, total: 187, installments: '12x de R$ 18,78', plan: 'KHG273901' },
    { name: '2 potes', qty: '2 potes · 2 meses', months: 2, total: 337, installments: '12x de R$ 33,84', plan: 'KNR273906' },
    { name: '3 potes', qty: '3 potes · 3 meses', months: 3, total: 437, installments: '12x de R$ 42,88', plan: 'KFM273911' },
  ],
};

export const inibeonePages = [
  { href: '/inibe-one/', title: 'Inibe One: ficha completa, composição e preço', short: 'Ficha completa' },
  { href: '/inibe-one/funciona/', title: 'Inibe One funciona? As doses do rótulo e o "efeito bariátrica"', short: 'Funciona?' },
  { href: '/inibe-one/como-tomar/', title: 'Como tomar Inibe One: efeitos colaterais e contraindicações', short: 'Como tomar e cuidados' },
  { href: '/inibe-one/onde-comprar/', title: 'Onde comprar Inibe One original: preço e as regras da garantia', short: 'Onde comprar e garantia' },
  { href: '/inibe-one/e-confiavel/', title: 'Inibe One é confiável? Reclame Aqui e a empresa por trás', short: 'É confiável?' },
];

export const ozenvittaPages = [
  { href: '/ozenvitta/', title: 'OzenVitta: ficha completa, composição e preço', short: 'Ficha completa' },
  { href: '/ozenvitta/funciona/', title: 'OzenVitta funciona? O que a ciência diz de cada ingrediente', short: 'Funciona?' },
  { href: '/ozenvitta/como-tomar/', title: 'Como tomar OzenVitta, efeitos colaterais e quem não deve usar', short: 'Como tomar e cuidados' },
  { href: '/ozenvitta/onde-comprar/', title: 'Onde comprar OzenVitta original e como funciona a garantia', short: 'Onde comprar e garantia' },
  { href: '/ozenvitta/e-confiavel/', title: 'OzenVitta é confiável? Reclame Aqui, empresa e garantia', short: 'É confiável? Reclame Aqui' },
];

export const reduphinePages = [
  { href: '/reduphine-caps/', title: 'ReduPhine Caps: ficha completa, composição e preço', short: 'Ficha completa' },
  { href: '/reduphine-caps/funciona/', title: 'ReduPhine funciona? O que diz a ciência sobre cada ingrediente', short: 'Funciona?' },
  { href: '/reduphine-caps/como-tomar/', title: 'Como tomar ReduPhine Caps: horário e cuidados', short: 'Como tomar' },
  { href: '/reduphine-caps/efeitos-colaterais/', title: 'ReduPhine Caps: efeitos colaterais e contraindicações', short: 'Efeitos colaterais' },
  { href: '/reduphine-caps/onde-comprar/', title: 'Onde comprar ReduPhine Caps original e como funciona a garantia', short: 'Onde comprar e garantia' },
  { href: '/reduphine-caps/combo-redugota/', title: 'Combo ReduPhine + ReduGota: o que muda com as gotas de laranja moro', short: 'Combo com ReduGota' },
  { href: '/reduphine-caps/e-confiavel/', title: 'ReduPhine é confiável? Reclame Aqui e o atendimento da VittaBalance', short: 'É confiável? Reclame Aqui' },
];

// Comparações e guias de ingredientes (fora dos produtos).
export const comparePages = [
  { href: '/ozenvitta-ou-reduphine/', title: 'OzenVitta ou ReduPhine: qual escolher? Comparação completa', short: 'OzenVitta ou ReduPhine?' },
];
export const ingredientGuides = [
  { href: '/psyllium/', title: 'Psyllium emagrece? O que é, como tomar e cuidados', short: 'Psyllium emagrece?' },
  { href: '/resveratrol/', title: 'Resveratrol: o que é, para que serve e o que a ciência diz', short: 'Resveratrol: o que é' },
];

// Reputação no Reclame Aqui, consultada em 14/10/2026 (painel dos últimos 6 meses de cada empresa).
export const reputation = {
  checked: '14/10/2026',
  ozenpharma: {
    name: 'Ozenpharma (OzenVitta)', url: 'https://www.reclameaqui.com.br/empresa/ozenvitta-da-ozenpharma/',
    label: 'Regular', score: '6,4', complaints: '132', answered: '100%', resolved: '71,4%', again: '40,8%',
    time: '4 dias e 2 horas', period: 'fevereiro a julho de 2026',
  },
  vittabalance: {
    name: 'VittaBalance (ReduPhine)', url: 'https://www.reclameaqui.com.br/empresa/vittabalance/',
    label: 'Não recomendada', score: '2,3', complaints: '10', answered: '0%', resolved: 'não informado', again: 'não informado',
    time: 'sem respostas', period: 'abril a setembro de 2026', total: '116',
  },
  natturabio: {
    name: 'Natturabio (Vitta Resveratrol)', url: 'https://www.reclameaqui.com.br/empresa/nattura-bio/',
    label: 'Sem índice (poucas avaliações)', score: 'sem nota', complaints: '1', answered: '0%', resolved: 'não informado', again: 'não informado',
    time: 'sem respostas', period: 'abril a setembro de 2026', total: '23',
  },
};

// Guias publicados (usados no menu, na home e nos "leia também").
export const guides = [
  { href: '/laranja-moro/', title: 'Laranja moro: o que é e para que serve', short: 'O que é laranja moro' },
  { href: '/laranja-moro/emagrece/', title: 'Laranja moro emagrece mesmo? O que o estudo mostrou', short: 'Emagrece mesmo?' },
  { href: '/laranja-moro/como-tomar/', title: 'Como tomar laranja moro: dose, horário e duração', short: 'Como tomar' },
  { href: '/laranja-moro/efeitos-colaterais/', title: 'Laranja moro: efeitos colaterais e quem não deve usar', short: 'Efeitos colaterais' },
  { href: '/laranja-moro/picolinato-de-cromo/', title: 'Laranja moro com picolinato de cromo: vale a combinação?', short: 'Com picolinato de cromo' },
];

export const study = {
  cite: 'Briskey D, Malfa GA, Rao A. Nutrients, 2022;14(3):427',
  url: 'https://pubmed.ncbi.nlm.nih.gov/35276783/',
};

// Catálogo usado no menu, no rodapé e nas páginas-índice /produtos/ e /guias/.
// Para um produto novo: crie as páginas, a lista xxxPages e adicione um item aqui.
export const catalog = [
  { name: 'OzenVitta', href: '/ozenvitta/', pill: 'Emagrecimento', summary: 'Fibras, L-carnitina, laranja moro e cromo em cápsulas.', pages: ozenvittaPages },
  { name: 'ReduPhine Caps', href: '/reduphine-caps/', pill: 'Emagrecimento', summary: 'Spirulina, psyllium, quitosana e cromo, com opção de combo com gotas.', pages: reduphinePages },
  { name: 'Inibe One', href: '/inibe-one/', pill: 'Emagrecimento', summary: 'Psyllium, quitosana, espirulina, chia, ágar e cromo em cápsulas.', pages: inibeonePages },
  { name: 'DTX Black', href: '/dtx-black/', pill: 'Emagrecimento', summary: 'Psyllium, cafeína, cromo, spirulina, inulina e linhaça em cápsulas.', pages: dtxblackPages },
  { name: 'Mounjax', href: '/mounjax/', pill: 'Gotas', summary: 'Gotas da Ozenpharma com café verde, cúrcuma, cromo e vitaminas. Não é Mounjaro.', pages: mounjaxPages },
  { name: 'TG30 Crisfit', href: '/tg30/', pill: 'Gotas', summary: 'Café verde, cúrcuma e vitaminas D3 e B12 em gotas.', pages: tg30Pages },
  { name: 'Vitta Resveratrol', href: '/vitta-resveratrol/', pill: 'Pele', summary: 'Colágeno, ácido hialurônico, resveratrol e vitaminas.', pages: resveratrolPages },
];

export const guideHubs = [
  { name: 'Comparações', pages: comparePages },
  { name: 'Ingredientes', pages: ingredientGuides },
  { name: 'Laranja moro', pages: guides },
];

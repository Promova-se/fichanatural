// Dados centrais do site. Para adicionar um produto, inclua um item em `products`.
export const site = {
  name: 'Ficha Natural',
  url: 'https://fichanatural.com.br',
  tagline: 'A ficha técnica dos produtos naturais, sem promessa milagrosa.',
  email: 'loja@promovase.net',
  company: 'Promova-se',
  cnpj: '43.315.814/0001-28',
  updated: '2026-10-11',
  ga4: 'G-L47PVELQQ4',
};

// Código de afiliado na Monetizze (parâmetro mcr) e montagem do link de checkout de cada kit.
export const affiliate = { monetizze: 'AXA22582261' };
// O código `mcr` muda por produto: passe o do produto (padrão = ReduPhine).
export const checkoutUrl = (plan: string, mcr: string = affiliate.monetizze) => `https://pay.monetizze.com.br/${plan}?mcr=${mcr}`;

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
  link: 'https://collagennatturabio.com.br/resveratrol/?mcr=ACA24896422',
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
];

// OzenVitta, conferido na página oficial em 12/10/2026. A página não informa empresa nem CNPJ.
export const ozenvitta = {
  name: 'OzenVitta',
  mcr: 'ATX24835707',
  link: 'https://ozenvitta.com/pvmon/?mcr=ATX24835707',
  ingredients: ['Psyllium', 'Inulina', 'L-carnitina', 'Spirulina', 'Laranja moro', 'Picolinato de cromo'],
  kits: [
    { name: 'Pote único', qty: '1 pote · 30 dias', months: 1, total: 147, installments: '12x de R$ 14,76', plan: 'DHV290570' },
    { name: 'Leve 3, pague 2', qty: '3 potes · 90 dias', months: 3, total: 197, installments: '12x de R$ 19,78', plan: 'DDS290571' },
    { name: 'Leve 5, pague 3', qty: '5 potes · 150 dias', months: 5, total: 247, installments: '12x de R$ 24,80', plan: 'DNT290572' },
    { name: 'Leve 8, pague 5', qty: '8 potes · 240 dias', months: 8, total: 377, installments: '12x de R$ 37,85', plan: 'DGQ290574' },
  ],
};

export const ozenvittaPages = [
  { href: '/ozenvitta/', title: 'OzenVitta: ficha completa, composição e preço', short: 'Ficha completa' },
  { href: '/ozenvitta/funciona/', title: 'OzenVitta funciona? O que a ciência diz de cada ingrediente', short: 'Funciona?' },
  { href: '/ozenvitta/como-tomar/', title: 'Como tomar OzenVitta, efeitos colaterais e quem não deve usar', short: 'Como tomar e cuidados' },
  { href: '/ozenvitta/onde-comprar/', title: 'Onde comprar OzenVitta original e como funciona a garantia', short: 'Onde comprar e garantia' },
];

export const reduphinePages = [
  { href: '/reduphine-caps/', title: 'ReduPhine Caps: ficha completa, composição e preço', short: 'Ficha completa' },
  { href: '/reduphine-caps/funciona/', title: 'ReduPhine funciona? O que diz a ciência sobre cada ingrediente', short: 'Funciona?' },
  { href: '/reduphine-caps/como-tomar/', title: 'Como tomar ReduPhine Caps: horário e cuidados', short: 'Como tomar' },
  { href: '/reduphine-caps/efeitos-colaterais/', title: 'ReduPhine Caps: efeitos colaterais e contraindicações', short: 'Efeitos colaterais' },
  { href: '/reduphine-caps/onde-comprar/', title: 'Onde comprar ReduPhine Caps original e como funciona a garantia', short: 'Onde comprar e garantia' },
  { href: '/reduphine-caps/combo-redugota/', title: 'Combo ReduPhine + ReduGota: o que muda com as gotas de laranja moro', short: 'Combo com ReduGota' },
];

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

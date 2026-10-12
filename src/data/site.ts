// Dados centrais do site. Para adicionar um produto, inclua um item em `products`.
export const site = {
  name: 'Ficha Natural',
  url: 'https://fichanatural.com.br',
  tagline: 'A ficha técnica dos produtos naturais, sem promessa milagrosa.',
  email: 'loja@promovase.net',
  company: 'Promova-se',
  cnpj: '43.315.814/0001-28',
  updated: '2026-10-10',
};

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
  link: 'https://app.monetizze.com.br/r/AXA22582261',
  ingredients: ['Spirulina', 'Psyllium', 'Quitosana', 'Cromo'],
  kits: [
    { name: '1 pote', months: 1, total: 147, installments: '12x de R$ 14,76' },
    { name: 'Compre 2, leve 3', months: 3, total: 197, installments: '12x de R$ 19,78' },
    { name: 'Compre 3, leve 5', months: 5, total: 247, installments: '12x de R$ 24,80' },
    { name: 'Compre 5, leve 8', months: 8, total: 377, installments: '12x de R$ 37,85' },
  ],
};

export const reduphinePages = [
  { href: '/reduphine-caps/', title: 'ReduPhine Caps: ficha completa, composição e preço', short: 'Ficha completa' },
  { href: '/reduphine-caps/funciona/', title: 'ReduPhine funciona? O que diz a ciência sobre cada ingrediente', short: 'Funciona?' },
  { href: '/reduphine-caps/como-tomar/', title: 'Como tomar ReduPhine Caps: horário e cuidados', short: 'Como tomar' },
  { href: '/reduphine-caps/efeitos-colaterais/', title: 'ReduPhine Caps: efeitos colaterais e contraindicações', short: 'Efeitos colaterais' },
  { href: '/reduphine-caps/onde-comprar/', title: 'Onde comprar ReduPhine Caps original e como funciona a garantia', short: 'Onde comprar e garantia' },
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

// Dados centrais do site. Para adicionar um produto, inclua um item em `products`.
export const site = {
  name: 'Ficha Natural',
  url: 'https://fichanatural.com.br',
  tagline: 'A ficha técnica dos produtos naturais, sem promessa milagrosa.',
  email: 'loja@promovase.net',
  company: 'Promova-se',
  cnpj: '43.315.814/0001-28',
  updated: '2026-10-19',
  ga4: 'G-L47PVELQQ4',
};

// Código de afiliado na Monetizze (parâmetro mcr) e montagem do link de checkout de cada kit.
export const affiliate = { monetizze: 'AXA22582261' };
// O código `mcr` muda por produto: passe o do produto (padrão = ReduPhine).
// Link oficial de afiliado da Monetizze ("Pegar link de venda"): /r/{mcr}?u=c&pl={código do checkout sem o D inicial}.
// Passa pelo rastreio da Monetizze e redireciona para o checkout com ?mcr=. Testado nos 23 kits em 15/10/2026.
// Exceção: checkouts cujo código não começa com D (ex.: Inibe One, KHG273901) não funcionam no /r/ e vão
// direto para app.monetizze.com.br/checkout/{código}?mcr=..., o mesmo destino do redirecionamento oficial.
// Produtos da Braip passam o link completo do checkout em `plan` (começa com https://) e ele é usado como está.
export const checkoutUrl = (plan: string, mcr: string = affiliate.monetizze) =>
  plan.startsWith('https://')
    ? plan
    : plan.startsWith('D')
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

// IArmonize (Integra Pharma), vendido pela Braip. No checkout, o produtor aparece como
// IRIS D'AGUA FARMACIA HOMEOPATIA E MANIPULACAO LTDA. Dados conferidos em 15/10/2026.
// Links: https://ev.braip.com/checkout/{plano}/cheq89gn?af={código}. O checkout mostra "REF.: afizj2v9e6".
// O Sleep (melatonina 5 mg, acima do limite de 0,21 mg/dia para suplemento, e 5-HTP) fica sem botão de compra.
// O kit completo inclui o Sleep: tem link, com aviso visível (decisão do dono do site em 15/10/2026).
const braipIarmonize = (plan: string) => `https://ev.braip.com/checkout/${plan}/cheq89gn?af=afizj2v9e6`;
export const iarmonize = {
  name: 'IArmonize',
  brand: 'Integra Pharma',
  maker: "Iris D'Água Farmácia Homeopatia e Manipulação Ltda.",
  address: 'Rua Augusto dos Anjos, 437 B, Rio Branco, Belo Horizonte (MG)',
  phone: '(31) 7137-2823',
  sac: 'contato@integrapharma.com.br',
  link: 'https://integrapharmabrasil.com.br/?pv=provwmw5&af=afizj2v9e6',
  kitLink: braipIarmonize('plav449r'),
  sleepWarning: 'O kit inclui o IArmonize Sleep, com 5 mg de melatonina por cápsula: cerca de 24 vezes o limite de 0,21 mg por dia que a Anvisa permite em suplementos. Dose desse tamanho só deveria ser usada com orientação médica.',
  kits: [
    { name: 'Kit IArmonize completo', qty: '2 Hair, 1 Sleep, 1 Energy, 3 Vital e necessaire · 3 meses', months: 3, total: 1256, installments: '10x de R$ 125,60 sem juros', plan: braipIarmonize('plav449r'), warn: 'Inclui o Sleep, com melatonina em dose acima do limite para suplementos. Leia o aviso antes de comprar.' },
    { name: 'Hair · 1 frasco', qty: '90 cápsulas · 45 dias', months: 1.5, total: 267, installments: '3x de R$ 89 sem juros', plan: braipIarmonize('plae68kd') },
    { name: 'Hair · 2 frascos', qty: '180 cápsulas · 3 meses', months: 3, total: 444, installments: '3x de R$ 148 sem juros', plan: braipIarmonize('plaq4x90') },
    { name: 'Energy · 1 frasco', qty: '90 cápsulas · 3 meses', months: 3, total: 167, installments: '3x de R$ 55,67 sem juros', plan: braipIarmonize('plamnyky') },
    { name: 'Vital · 1 frasco', qty: '30 ml · 1 mês', months: 1, total: 97, installments: '3x de R$ 32,33 sem juros', plan: braipIarmonize('plazr8km') },
    { name: 'Vital · 2 frascos', qty: '60 ml · 2 meses', months: 2, total: 167, installments: '3x de R$ 55,67 sem juros', plan: braipIarmonize('pla2vxod') },
    { name: 'Vital · 3 frascos', qty: '90 ml · 3 meses', months: 3, total: 227, installments: '3x de R$ 75,67 sem juros', plan: braipIarmonize('plagmq4v') },
  ],
  // Sem botão de compra no site (ver aviso acima). Planos na Braip: Sleep pla1l2o6, Sleep + Energy pla89por.
  noLink: [
    { name: 'Sleep · 1 frasco', qty: '90 cápsulas · 3 meses', total: 167 },
    { name: 'Sleep + Energy', qty: '2 frascos · 3 meses', total: 297 },
  ],
};

export const iarmonizePages = [
  { href: '/iarmonize/', title: 'IArmonize: ficha do kit da Integra Pharma, composição e preço', short: 'Ficha completa' },
  { href: '/iarmonize/funciona/', title: 'IArmonize funciona? Hair, Sleep, Energy e Vital, um por um', short: 'Funciona?' },
  { href: '/iarmonize/como-tomar/', title: 'Como tomar o kit IArmonize: horários, interações e quem não deve usar', short: 'Como tomar e cuidados' },
  { href: '/iarmonize/onde-comprar/', title: 'Onde comprar IArmonize original: preços dos kits e devolução', short: 'Onde comprar' },
  { href: '/iarmonize/e-confiavel/', title: 'IArmonize e Integra Pharma são confiáveis? Quem fabrica e Reclame Aqui', short: 'É confiável?' },
];

// Hot Men Caps, conferido na página oficial e nos checkouts em 15/10/2026.
// Sem empresa, CNPJ nem ingredientes na página. Termos citam "Hotman Caps"; checkout mostra busuplementos@gmail.com.
// Pote: 60 cápsulas de 500 mg (30 g), 2 por dia. Publicado por decisão do dono do site (já vendeu o produto),
// com as promessas tratadas como promessas do fabricante. Links testados: o checkout mostra "REF: APU24890749".
export const hotmen = {
  name: 'Hot Men Caps',
  sacCheckout: 'busuplementos@gmail.com',
  mcr: 'APU24890749',
  link: 'https://hotmencaps.com.br/?mcr=APU24890749',
  // Citados por sites de afiliados, não pela página oficial nem por rótulo legível.
  reported: ['Maca peruana', 'L-arginina', 'Zinco', 'Magnésio'],
  kits: [
    { name: '1 pote', qty: '60 cápsulas · 1 mês', months: 1, total: 227, installments: '12x de R$ 22,79', plan: 'DXD58400' },
    { name: 'Compre 2, receba 3', qty: '3 potes · 3 meses', months: 3, total: 327, installments: '12x de R$ 32,83', plan: 'DQP58401' },
    { name: 'Compre 3, receba 5', qty: '5 potes · 5 meses', months: 5, total: 427, installments: '12x de R$ 42,87', plan: 'DQE58402' },
  ],
};

export const hotmenPages = [
  { href: '/hot-men-caps/', title: 'Hot Men Caps: ficha completa, composição e preço', short: 'Ficha completa' },
  { href: '/hot-men-caps/funciona/', title: 'Hot Men Caps funciona? Aumento do pênis, ereção e o que a ciência diz', short: 'Funciona?' },
  { href: '/hot-men-caps/como-tomar/', title: 'Como tomar Hot Men Caps: dose, efeitos colaterais e quem não deve usar', short: 'Como tomar e cuidados' },
  { href: '/hot-men-caps/onde-comprar/', title: 'Onde comprar Hot Men Caps original: preço dos kits e garantia', short: 'Onde comprar e garantia' },
  { href: '/hot-men-caps/e-confiavel/', title: 'Hot Men Caps é confiável? Empresa, Anvisa e Reclame Aqui', short: 'É confiável?' },
];

// Kit S.O.S Crescimento (Lizz Anté Professional), cosmético capilar, conferido na página, nos checkouts e na loja
// da marca em 17/10/2026. Checkout: comercial@lizzante.com.br. Os 4 kits mostram "REF: ARP25846591".
// Códigos K (não começam com D): checkoutUrl usa /checkout/{código}?mcr=. Reclame Aqui: Ótima, 8,4.
export const kitsos = {
  name: 'Kit S.O.S Crescimento',
  brand: 'Lizz Anté Professional',
  sac: 'comercial@lizzante.com.br',
  whatsapp: '(19) 98164-7456',
  mcr: 'ARP25846591',
  link: 'https://app.monetizze.com.br/r/ARP25846591',
  actives: ['Biotina', 'Pantenol (vitamina B5)', 'Extrato de bambu', 'Óleo de rícino', 'Queratina hidrolisada', 'Extrato de bardana', 'Extrato de café (cafeína)'],
  kits: [
    { name: '1 kit', qty: 'Shampoo 300 ml, máscara 300 g e tônico 100 ml', months: 1, total: 179, installments: '12x de R$ 17,97', plan: 'KZX212457' },
    { name: '2 kits', qty: '2 kits + 1 tônico de brinde', months: 2, total: 279, installments: '12x de R$ 28,01', plan: 'KQZ212458' },
    { name: '3 kits', qty: '3 kits + 1 tônico e 1 shampoo de brinde', months: 3, total: 379, installments: '12x de R$ 38,05', plan: 'KEB212459' },
    { name: '4 kits', qty: '4 kits + tônico, shampoo e máscara de brinde', months: 4, total: 479, installments: '12x de R$ 48,09', plan: 'KJA354382' },
  ],
};

export const kitsosPages = [
  { href: '/kit-sos-crescimento/', title: 'Kit S.O.S Crescimento Lizz Anté: ficha completa, composição e preço', short: 'Ficha completa' },
  { href: '/kit-sos-crescimento/funciona/', title: 'Kit S.O.S Crescimento funciona? Queda, crescimento e o que a ciência diz', short: 'Funciona?' },
  { href: '/kit-sos-crescimento/como-usar/', title: 'Como usar o Kit S.O.S Crescimento: passo a passo e cuidados', short: 'Como usar' },
  { href: '/kit-sos-crescimento/onde-comprar/', title: 'Onde comprar Kit S.O.S Crescimento original: preço e garantia de 60 dias', short: 'Onde comprar e garantia' },
  { href: '/kit-sos-crescimento/e-confiavel/', title: 'Lizz Anté é confiável? Reclame Aqui e o Kit S.O.S Crescimento', short: 'É confiável? Reclame Aqui' },
];

// Artic Protect (Up Sports Nutrition), colágeno tipo 2 40 mg + magnésio + vitamina D3, conferido em 17/10/2026.
// Vendedor no checkout: Extra Fórmulas (bruno@extraformulas.com.br), o mesmo que vende na Droga Raia (R$ 167,90).
// O /r/ com pl não leva ao checkout deste produto: os links vão direto para /checkout/{código}?mcr= (testados, REF aparece).
// Página não diz se o colágeno é não desnaturado nem as doses de magnésio e D3. Sem garantia própria.
const articCheckout = (plan: string) => `https://app.monetizze.com.br/checkout/${plan}?mcr=AWQ25862505`;
export const artic = {
  name: 'Artic Protect',
  brand: 'Up Sports Nutrition',
  seller: 'Extra Fórmulas',
  sac: 'bruno@extraformulas.com.br',
  mcr: 'AWQ25862505',
  link: 'https://app.monetizze.com.br/r/AWQ25862505',
  kits: [
    { name: '1 pote', qty: '30 cápsulas · 1 mês', months: 1, total: 119, installments: '12x de R$ 11,95', plan: articCheckout('DLY95882') },
    { name: '3 potes', qty: '90 cápsulas · 3 meses', months: 3, total: 318, installments: 'até 12x no cartão', plan: articCheckout('DSU95884') },
    { name: '6 potes', qty: '180 cápsulas · 6 meses', months: 6, total: 570, installments: '12x de R$ 57,23', plan: articCheckout('DFJ95885') },
  ],
};

export const articPages = [
  { href: '/artic-protect/', title: 'Artic Protect: ficha completa, colágeno tipo 2 40 mg e preço', short: 'Ficha completa' },
  { href: '/artic-protect/funciona/', title: 'Artic Protect funciona? O que os estudos dizem do colágeno tipo 2', short: 'Funciona?' },
  { href: '/artic-protect/como-tomar/', title: 'Como tomar Artic Protect: horário, efeitos colaterais e quem não deve usar', short: 'Como tomar e cuidados' },
  { href: '/artic-protect/onde-comprar/', title: 'Onde comprar Artic Protect original: site oficial, farmácia e preço', short: 'Onde comprar' },
  { href: '/artic-protect/e-confiavel/', title: 'Artic Protect é confiável? Quem vende, Anvisa e Reclame Aqui', short: 'É confiável?' },
];

// Creatina 300g Nature's Prime (Braip), conferida na página, no rótulo e nos checkouts em 17/10/2026.
// Fabricante: Natures Farma Indústria e Comércio Ltda, CNPJ 28.209.818/0001-38 (Braip e Reclame Aqui, 0 reclamações).
// Links oficiais do painel: ev.braip.com/ref?pl={plano}&ck=chen80rq&af=afi8j06qdd. Os 4 mostram "REF.: afi8j06qdd".
// Parcelamento com juros de 3,49% a.m. Garantia de 30 dias. Preço bem acima de creatinas de marcas de mercado.
const creatinaRef = (plan: string) => `https://ev.braip.com/ref?pl=${plan}&ck=chen80rq&af=afi8j06qdd`;
export const creatina = {
  name: "Creatina Nature's Prime",
  maker: 'Natures Farma Indústria e Comércio Ltda',
  cnpj: '28.209.818/0001-38',
  sac: 'sac@naturesprime.ind.br',
  phone: '(62) 9374-2145',
  link: 'https://ev.braip.com/ref?pv=pro62wzm&af=afi8j06qdd',
  kits: [
    { name: '1 pote', qty: '300 g · 60 doses de 5 g', months: 2, total: 169.9, installments: '12x de R$ 17,57', plan: creatinaRef('pla1x6xn') },
    { name: '2 potes', qty: '600 g · 120 doses de 5 g', months: 4, total: 299.9, installments: '12x de R$ 31,02', plan: creatinaRef('plap0x48') },
    { name: '3 potes', qty: '900 g · 180 doses de 5 g', months: 6, total: 449.9, installments: '12x de R$ 46,53', plan: creatinaRef('pla08qql') },
    { name: '4 potes', qty: '1,2 kg · 240 doses de 5 g', months: 8, total: 549.9, installments: '12x de R$ 56,87', plan: creatinaRef('playgqqx') },
  ],
};

export const creatinaPages = [
  { href: '/creatina-natures-prime/', title: "Creatina Nature's Prime: ficha completa, composição e preço", short: 'Ficha completa' },
  { href: '/creatina-natures-prime/funciona/', title: "Creatina Nature's Prime funciona? O que a ciência diz sobre creatina", short: 'Funciona?' },
  { href: '/creatina-natures-prime/como-tomar/', title: 'Como tomar creatina: dose, fase de carga, horário e cuidados', short: 'Como tomar' },
  { href: '/creatina-natures-prime/onde-comprar/', title: "Onde comprar Creatina Nature's Prime: preço, comparação e garantia", short: 'Onde comprar e preço' },
  { href: '/creatina-natures-prime/e-confiavel/', title: "Creatina Nature's Prime é confiável? Fabricante, Anvisa e Reclame Aqui", short: 'É confiável?' },
];

// Cabelo, Pele & Unhas - Lizz Anté Nutri (Monetizze), conferido em 19/10/2026. Mesma empresa do Kit S.O.S.
// ATENÇÃO: o link geral /r/AVG25862882 do painel leva a um site inexistente (wwvv.info). Usar a página oficial com ?mcr=
// e os checkouts K diretos (os 4 mostram "REF: AVG25862882"). 9 ativos somando 1.000 mg/dia, sem doses publicadas.
export const lizznutri = {
  name: 'Cabelo, Pele & Unhas Lizz Anté Nutri',
  short: 'Lizz Anté Nutri',
  brand: 'Lizz Anté',
  sac: 'comercial@lizzante.com.br',
  whatsapp: '(19) 98137-9295',
  mcr: 'AVG25862882',
  link: 'https://encapsulados.lojalizzante.com.br/?mcr=AVG25862882',
  actives: ['Cisteína', 'Colágeno', 'Prolina', 'MSM (metilsulfonilmetano)', 'Vitamina B6', 'Zinco', 'Silício', 'Biotina', 'Ácido hialurônico'],
  kits: [
    { name: '1 mês', qty: '1 pote · 60 cápsulas', months: 1, total: 127, installments: '12x de R$ 12,75', plan: 'KEX391244' },
    { name: '3 meses', qty: 'Tratamento para 3 meses', months: 3, total: 227, installments: '12x de R$ 22,79', plan: 'KBL391245' },
    { name: '5 meses', qty: 'Tratamento para 5 meses', months: 5, total: 327, installments: '12x de R$ 32,83', plan: 'KLR391246' },
    { name: '10 meses', qty: 'Tratamento para 10 meses', months: 10, total: 627, installments: '12x de R$ 62,95', plan: 'KYP391247' },
  ],
};

export const lizznutriPages = [
  { href: '/lizz-ante-nutri/', title: 'Lizz Anté Nutri Cabelo, Pele e Unhas: ficha completa, composição e preço', short: 'Ficha completa' },
  { href: '/lizz-ante-nutri/funciona/', title: 'Lizz Anté Nutri funciona? Os 9 ativos e o que a ciência diz', short: 'Funciona?' },
  { href: '/lizz-ante-nutri/como-tomar/', title: 'Como tomar Lizz Anté Nutri: horário, efeitos colaterais e quem não deve usar', short: 'Como tomar e cuidados' },
  { href: '/lizz-ante-nutri/onde-comprar/', title: 'Onde comprar Lizz Anté Nutri original: preço dos kits e garantia de 90 dias', short: 'Onde comprar e garantia' },
  { href: '/lizz-ante-nutri/e-confiavel/', title: 'Lizz Anté Nutri é confiável? Empresa, Anvisa e Reclame Aqui', short: 'É confiável?' },
];

// Detox Fit Caps Black (Monetizze, produtor DBVNUTRI; rótulo "DPV Nutri"), conferido em 19/10/2026.
// Sem empresa/CNPJ; e-mail do checkout é pessoal (Hotmail). "Tabela nutricional" sem quantidades.
// Página exibe selo "RA1000" falso (Reclame Aqui: sem reputação, não verificada). Garantia de 30 dias na página,
// mas os termos só aceitam devolução lacrada em 7 dias com frete pago pelo cliente. Links testados (REF ASD25863106).
export const detoxfit = {
  name: 'Detox Fit Caps Black',
  brand: 'DPV Nutri (DBVNUTRI na Monetizze)',
  sac: 'diogopantarotto@hotmail.com',
  whatsapp: '(18) 99171-7774',
  mcr: 'ASD25863106',
  link: 'https://black.detoxfitcaps.com.br/?mcr=ASD25863106',
  ingredients: ['Cafeína', 'Extrato de laranja moro', 'Psyllium', 'Inulina', 'Espirulina', 'Chlorella', 'Picolinato de cromo', 'L-carnitina', 'Vitaminas do complexo B'],
  kits: [
    { name: '1 pote', qty: '60 cápsulas · 30 dias', months: 1, total: 137, installments: '12x de R$ 13,76', plan: 'DNY265165' },
    { name: '2 potes', qty: '120 cápsulas · 60 dias', months: 2, total: 167, installments: '12x de R$ 16,77', plan: 'DZM361372' },
    { name: '3 potes', qty: '180 cápsulas · 90 dias', months: 3, total: 197, installments: '12x de R$ 19,78', plan: 'DJW361373' },
    { name: '4 potes', qty: '240 cápsulas · 120 dias', months: 4, total: 257, installments: '12x de R$ 25,80', plan: 'DYJ361375' },
    { name: '6 potes', qty: '360 cápsulas · 180 dias', months: 6, total: 377, installments: '12x de R$ 37,85', plan: 'DFX361376' },
  ],
};

export const detoxfitPages = [
  { href: '/detox-fit-caps-black/', title: 'Detox Fit Caps Black: ficha completa, composição e preço', short: 'Ficha completa' },
  { href: '/detox-fit-caps-black/funciona/', title: 'Detox Fit Caps Black funciona? A promessa de reduzir 80% da gordura', short: 'Funciona?' },
  { href: '/detox-fit-caps-black/como-tomar/', title: 'Como tomar Detox Fit Caps Black: cafeína, efeitos colaterais e quem não deve usar', short: 'Como tomar e cuidados' },
  { href: '/detox-fit-caps-black/onde-comprar/', title: 'Onde comprar Detox Fit Caps Black original: preço e regras de reembolso', short: 'Onde comprar e reembolso' },
  { href: '/detox-fit-caps-black/e-confiavel/', title: 'Detox Fit Caps Black é confiável? Reclame Aqui, selo RA1000 e empresa', short: 'É confiável?' },
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
  { name: 'Detox Fit Caps Black', href: '/detox-fit-caps-black/', pill: 'Emagrecimento', summary: 'Fibras, laranja moro, cafeína, carnitina e cromo em cápsulas, sem doses no rótulo.', pages: detoxfitPages },
  { name: 'DTX Black', href: '/dtx-black/', pill: 'Emagrecimento', summary: 'Psyllium, cafeína, cromo, spirulina, inulina e linhaça em cápsulas.', pages: dtxblackPages },
  { name: 'Mounjax', href: '/mounjax/', pill: 'Gotas', summary: 'Gotas da Ozenpharma com café verde, cúrcuma, cromo e vitaminas. Não é Mounjaro.', pages: mounjaxPages },
  { name: 'TG30 Crisfit', href: '/tg30/', pill: 'Gotas', summary: 'Café verde, cúrcuma e vitaminas D3 e B12 em gotas.', pages: tg30Pages },
  { name: 'IArmonize', href: '/iarmonize/', pill: 'Cabelo, sono e energia', summary: 'Kit da Integra Pharma com quatro fórmulas: Hair, Sleep, Energy e Vital.', pages: iarmonizePages },
  { name: "Creatina Nature's Prime", href: '/creatina-natures-prime/', pill: 'Treino', summary: 'Creatina monohidratada pura em pó, 300 g, da Natures Farma.', pages: creatinaPages },
  { name: 'Artic Protect', href: '/artic-protect/', pill: 'Articulações', summary: 'Colágeno tipo 2 de 40 mg com magnésio e vitamina D3, da Up Sports Nutrition.', pages: articPages },
  { name: 'Lizz Anté Nutri', href: '/lizz-ante-nutri/', pill: 'Cabelo, pele e unhas', summary: 'Cápsulas da Lizz Anté com biotina, colágeno, silício, zinco e mais 5 ativos.', pages: lizznutriPages },
  { name: 'Kit S.O.S Crescimento', href: '/kit-sos-crescimento/', pill: 'Cabelo', summary: 'Shampoo, máscara e tônico da Lizz Anté para queda e crescimento capilar.', pages: kitsosPages },
  { name: 'Hot Men Caps', href: '/hot-men-caps/', pill: 'Saúde masculina', summary: 'Cápsulas vendidas para desempenho sexual masculino, sem ingredientes na página oficial.', pages: hotmenPages },
  { name: 'Vitta Resveratrol', href: '/vitta-resveratrol/', pill: 'Pele', summary: 'Colágeno, ácido hialurônico, resveratrol e vitaminas.', pages: resveratrolPages },
];

export const guideHubs = [
  { name: 'Comparações', pages: comparePages },
  { name: 'Ingredientes', pages: ingredientGuides },
  { name: 'Laranja moro', pages: guides },
];

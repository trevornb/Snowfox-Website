export type Lang = 'en' | 'fr'

type Dict = Record<Lang, string>

export const nav = {
  home: { en: 'Home', fr: 'Accueil' },
  spirits: { en: 'Our Spirits', fr: 'Nos spiritueux' },
  where: { en: 'Where to Buy', fr: 'Où acheter' },
  story: { en: 'Our Story', fr: 'Notre histoire' },
  contact: { en: 'Contact', fr: 'Nous joindre' },
} as const satisfies Record<string, Dict>

export const ageGate = {
  title: {
    en: 'Are you of legal drinking age (19+)?',
    fr: "Avez-vous l'âge légal pour consommer de l'alcool (19 ans et plus)?",
  },
  note: {
    en: 'You must be 19 or older to enter. Please enjoy responsibly.',
    fr: 'Vous devez avoir 19 ans ou plus pour entrer. Savourez de façon responsable.',
  },
  yes: { en: 'Yes', fr: 'Oui' },
  no: { en: 'No', fr: 'Non' },
  denied: {
    en: 'Sorry, you must be of legal drinking age to visit this site. Please come back when you are 19 or older.',
    fr: "Désolé, vous devez avoir l'âge légal pour consommer de l'alcool pour visiter ce site. Revenez nous voir quand vous aurez 19 ans.",
  },
} as const

export const hero = {
  brand: { en: 'SNOWFOX', fr: 'SNOWFOX' },
  pull: {
    en: 'A Moncton company. A Maritime fox.',
    fr: 'Une entreprise de Moncton. Un renard des Maritimes.',
  },
  ctaStore: { en: 'Find a Store', fr: 'Trouver un magasin' },
  ctaSpirits: { en: 'Our Spirits', fr: 'Nos spiritueux' },
} as const

export const spirits = {
  eyebrow: { en: 'Our Spirits', fr: 'Nos spiritueux' },
  title: { en: 'Our Spirits', fr: 'Nos spiritueux' },
  intro: {
    en: 'Blended and bottled in Moncton, NB. Start with the one on the shelf now.',
    fr: 'Assemblés et embouteillés à Moncton, N.-B. Commencez par celui qui est déjà en magasin.',
  },
  buy: { en: 'Order online', fr: 'Commander en ligne' },
  comingSoon: { en: 'Coming soon', fr: 'Bientôt disponible' },
  glass: {
    en: 'All bottles are glass.',
    fr: 'Toutes les bouteilles sont en verre.',
  },
  responsible: {
    en: 'Please enjoy responsibly. 19+.',
    fr: 'Savourez de façon responsable. 19 ans et plus.',
  },
} as const

export const vodka = {
  title: { en: 'Snowfox Vodka', fr: 'Vodka Snowfox' },
  spec: {
    en: '40% alc./vol. · 375 mL · 750 mL · 1.14 L (sizes vary by store)',
    fr: '40 % alc./vol. · 375 mL · 750 mL · 1,14 L (formats variables selon le magasin)',
  },
  intro: {
    en: 'A frosted bottle with a blue cap and a white fox. Blended and bottled in Moncton, NB, from neutral grain spirit.',
    fr: "Une bouteille givrée avec un capuchon bleu et un renard blanc. La vodka est assemblée et embouteillée à Moncton, N.-B., à partir d'alcool neutre de grain.",
  },
  tastingTitle: { en: 'Tasting notes', fr: 'Notes de dégustation' },
  tasting: {
    en: [
      'Nose: clean and neutral, with a light grain note.',
      'Taste: clean and light, with a hint of grain sweetness.',
      'Finish: clean and short.',
    ],
    fr: [
      'Au nez : nette et neutre, avec une légère note de grain.',
      'En bouche : nette et légère, avec une pointe de douceur de grain.',
      'En finale : nette et courte.',
    ],
  },
  serveTitle: { en: 'Serves', fr: 'Suggestions de service' },
  serves: {
    en: [
      {
        name: 'Snowfox & Soda',
        body: '1½ oz Snowfox Vodka over ice, topped with soda water, with a lime wedge.',
      },
      {
        name: 'Moscow Mule',
        body: '1½ oz vodka, ½ oz lime juice, topped with ginger beer, lime wedge.',
      },
      {
        name: 'Apple Sparkler',
        body: '1 oz vodka, 2 oz non-alcoholic cider, 1 oz sparkling wine.',
      },
    ],
    fr: [
      {
        name: 'Snowfox et soda',
        body: '1½ oz de vodka Snowfox sur glace, complétée de soda, avec un quartier de lime.',
      },
      {
        name: 'Moscow Mule',
        body: '1½ oz de vodka, ½ oz de jus de lime, complétée de bière au gingembre, quartier de lime.',
      },
      {
        name: 'Apple Sparkler',
        body: '1 oz de vodka, 2 oz de cidre sans alcool, 1 oz de vin mousseux.',
      },
    ],
  },
  sizesNote: {
    en: 'See “Where to Buy” for sizes by store.',
    fr: 'Voir « Où acheter » pour les formats selon le magasin.',
  },
  imageAlt: {
    en: 'Snowfox Vodka, a frosted white bottle with a blue cap and a white fox.',
    fr: 'Vodka Snowfox, une bouteille givrée avec un capuchon bleu et un renard blanc.',
  },
} as const

export const dill = {
  title: { en: 'Snowfox Dill', fr: 'Snowfox Dill' },
  spec: {
    en: '30% alc./vol. · 750 mL',
    fr: '30 % alc./vol. · 750 mL',
  },
  intro: {
    en: 'A frosted white bottle with a white fox and a green cap. Blended and bottled in Moncton, NB.',
    fr: 'Une bouteille givrée blanche avec un renard blanc et un capuchon vert. Assemblé et embouteillé à Moncton, N.-B.',
  },
  tasting: {
    en: 'Dill notes with a clean finish.',
    fr: "Notes d'aneth, avec une finale nette.",
  },
  serveName: { en: 'Dill Caesar', fr: "Caesar à l'aneth" },
  serve: {
    en: 'Serves one; 1½ oz / 43 mL Snowfox Dill is about ¾ of a standard drink at 30%: 1½ oz Snowfox Dill, tomato-clam juice, a dash each of hot sauce and Worcestershire, over ice in a celery-salt-rimmed glass, with a celery stalk.',
    fr: "Pour une personne; 1½ oz / 43 mL de Snowfox Dill équivaut à environ ¾ de consommation standard à 30 % : 1½ oz de Snowfox Dill, jus de tomate et de palourde, un trait de sauce piquante et de sauce Worcestershire, sur glace dans un verre au rebord de sel de céleri, avec une branche de céleri.",
  },
  where: {
    en: 'Find Snowfox Dill at ANBL (item 39792). Stock varies by store, so check with the store before you go.',
    fr: "Trouvez Snowfox Dill à l'ANBL (article 39792). Les stocks varient selon le magasin; vérifiez auprès du magasin avant de vous déplacer.",
  },
  support: {
    en: 'Support a Moncton business.',
    fr: 'Encouragez une entreprise de Moncton.',
  },
  imageAlt: {
    en: 'Snowfox Dill, a frosted white bottle with a white fox and a green cap.',
    fr: 'Snowfox Dill, une bouteille givrée blanche avec un renard blanc et un capuchon vert.',
  },
} as const

export const rum = {
  title: { en: 'Snowfox Premium Rum', fr: 'Snowfox Premium Rum' },
  line: { en: 'Coming soon.', fr: 'Bientôt disponible.' },
  origin: {
    en: 'Jamaican rum, blended and bottled in Moncton, NB.',
    fr: 'Rhum jamaïcain, assemblé et embouteillé à Moncton, N.-B.',
  },
  spec: {
    en: '40% alc./vol. · 750 mL',
    fr: '40 % alc./vol. · 750 mL',
  },
  imageAlt: {
    en: '[PHOTO TBC] Snowfox Premium Rum bottle — label and crop pending Trevor confirmation.',
    fr: '[PHOTO TBC] Bouteille de Snowfox Premium Rum — étiquette et cadrage à confirmer par Trevor.',
  },
} as const

export const whereToBuy = {
  title: { en: 'Find it close to home.', fr: 'Trouvez-la près de chez vous.' },
  body: {
    en: 'Find Snowfox Vodka at ANBL and PEI Liquor in 375 mL, 750 mL and 1.14 L, and at NSLC in 750 mL. Ask for it by name. Not available at the LCBO. All bottles are glass.',
    fr: "Trouvez la vodka Snowfox à l'ANBL et chez PEI Liquor, en formats de 375 mL, 750 mL et 1,14 L, ainsi qu'à la NSLC, en format de 750 mL. Demandez-la par son nom. Non disponible à la LCBO. Toutes les bouteilles sont en verre.",
  },
  support: {
    en: 'Support a Moncton business.',
    fr: 'Encouragez une entreprise de Moncton.',
  },
  cta: {
    en: 'Support local business. Pick up Snowfox at ANBL.',
    fr: "Encouragez les entreprises locales. Procurez-vous Snowfox à l'ANBL.",
  },
  listIntro: {
    en: "Find your nearest ANBL, NSLC or PEI Liquor store. Stock varies by store, so check with the store or the board's website before you go. Only stores confirmed to stock Snowfox are listed below.",
    fr: "Trouvez l'ANBL, la NSLC ou la PEI Liquor la plus proche. Les stocks varient selon le magasin; vérifiez auprès du magasin ou sur le site de la régie avant de vous déplacer. Seuls les magasins confirmés pour Snowfox figurent ci-dessous.",
  },
  items: {
    en: 'ANBL items 22733 (375 mL), 22732 (750 mL), 36966 (1.14 L). PEI Liquor BIN 02001A (375 mL), 02001Z (750 mL), 02021B (1.14 L). NSLC article 1019573 (750 mL). Dill: ANBL item 39792.',
    fr: 'ANBL : articles 22733 (375 mL), 22732 (750 mL), 36966 (1,14 L). PEI Liquor : BIN 02001A (375 mL), 02001Z (750 mL), 02021B (1,14 L). NSLC : article 1019573 (750 mL). Dill : ANBL article 39792.',
  },
  boards: {
    en: [
      { name: 'ANBL', sizes: '375 mL · 750 mL · 1.14 L · Dill 750 mL' },
      { name: 'PEI Liquor', sizes: '375 mL · 750 mL · 1.14 L' },
      { name: 'NSLC', sizes: '750 mL only' },
    ],
    fr: [
      { name: 'ANBL', sizes: '375 mL · 750 mL · 1,14 L · Dill 750 mL' },
      { name: 'PEI Liquor', sizes: '375 mL · 750 mL · 1,14 L' },
      { name: 'NSLC', sizes: '750 mL seulement' },
    ],
  },
  tabAnbl: { en: 'New Brunswick — ANBL', fr: 'Nouveau-Brunswick — ANBL' },
  tabNslc: { en: 'Nova Scotia — NSLC', fr: 'Nouvelle-Écosse — NSLC' },
  tabPei: { en: 'Prince Edward Island — PEI Liquor', fr: 'Île-du-Prince-Édouard — PEI Liquor' },
  responsible: {
    en: 'Please enjoy responsibly. 19+.',
    fr: 'Savourez de façon responsable. 19 ans et plus.',
  },
} as const

export const story = {
  title: {
    en: 'A Moncton company. A Maritime fox.',
    fr: 'Une entreprise de Moncton. Un renard des Maritimes.',
  },
  p1: {
    en: 'Snowfox is a Moncton company. We make Snowfox and we blend and bottle it here in Moncton, NB. [TBC Trevor]',
    fr: 'Snowfox est une entreprise de Moncton. Nous fabriquons Snowfox et nous l’assemblons et l’embouteillons ici, à Moncton, N.-B. [TBC Trevor]',
  },
  p2: {
    en: 'We blend our vodka from neutral grain spirit and track every batch carefully. We make it for the people of the East Coast: the neighbours, the hosts, the ones who stay through the winter.',
    fr: 'Nous assemblons notre vodka à partir d’alcool neutre de grain et nous assurons le suivi de chaque lot avec soin. Nous la faisons pour les gens de la côte Est : les voisins, les hôtes, ceux qui restent malgré l’hiver.',
  },
  p3: {
    en: 'Snowfox is blended and bottled by a Moncton team at Port Royal Distillers. Choosing Snowfox supports a local Moncton business. We’re proud to be part of this community.',
    fr: 'La vodka Snowfox est assemblée et embouteillée par une équipe de Moncton chez Port Royal Distillers. Choisir Snowfox, c’est soutenir une entreprise locale de Moncton. Nous sommes fiers de faire partie de cette communauté.',
  },
  p4: {
    en: 'Shop the stores on your street, say hello to the people behind the counter, and keep it close to home.',
    fr: 'Magasinez dans votre communauté, saluez les gens derrière le comptoir et gardez-la près de chez vous.',
  },
  pull: {
    en: 'The fox never left. It was just waiting for the right season.',
    fr: 'Le renard n’est jamais parti. Il attendait simplement la bonne saison.',
  },
  blocks: {
    en: [
      {
        title: 'Blended here.',
        body: 'Our vodka is blended and bottled in Moncton, NB.',
      },
      {
        title: 'A fox for the Maritimes.',
        body: 'A white fox, a frosted bottle and a lighthouse on the water. That’s home.',
      },
      {
        title: 'Closer to you.',
        body: 'Find us at ANBL, PEI Liquor and NSLC. Stock varies by store.',
      },
    ],
    fr: [
      {
        title: 'Assemblée ici.',
        body: 'Notre vodka est assemblée et embouteillée à Moncton, N.-B.',
      },
      {
        title: 'Un renard pour les Maritimes.',
        body: 'Un renard blanc, une bouteille givrée et un phare sur l’eau. C’est chez nous.',
      },
      {
        title: 'Plus près de vous.',
        body: 'Trouvez-nous à l’ANBL, chez PEI Liquor et à la NSLC. Les stocks varient selon le magasin.',
      },
    ],
  },
  responsible: {
    en: 'Please enjoy responsibly. 19+.',
    fr: 'Savourez de façon responsable. 19 ans et plus.',
  },
} as const

export const contact = {
  title: { en: 'Contact us', fr: 'Nous joindre' },
  intro: {
    en: 'Questions, feedback, or just a hello to your neighbours in Moncton? Send us a note and we’ll write back.',
    fr: 'Des questions, des commentaires, ou simplement envie de saluer vos voisins de Moncton? Écrivez-nous et nous vous répondrons.',
  },
  emailLabel: { en: 'Email', fr: 'Courriel' },
  company: { en: 'Port Royal Distillers Inc.', fr: 'Port Royal Distillers Inc.' },
  address: {
    en: '[ADDRESS, TBC Trevor]',
    fr: '[ADRESSE, TBC Trevor]',
  },
  phone: {
    en: '[PHONE, TBC Trevor]',
    fr: '[TÉLÉPHONE, TBC Trevor]',
  },
  email: 'trevor@snowfoxvodka.com',
  privacy: {
    en: 'We only use your details to reply to you. See our privacy policy. [Privacy policy page TBC Trevor]',
    fr: 'Nous utilisons vos coordonnées uniquement pour vous répondre. Consultez notre politique de confidentialité. [Page de confidentialité TBC Trevor]',
  },
} as const

export const footer = {
  line: {
    en: '© 2026 Port Royal Distillers Inc. All rights reserved. · A Moncton, NB company · snowfoxvodka.com · Please enjoy responsibly. 19+.',
    fr: '© 2026 Port Royal Distillers Inc. Tous droits réservés. · Une entreprise de Moncton, N.-B. · snowfoxvodka.com · Savourez de façon responsable. 19 ans et plus.',
  },
} as const

export function t(dict: Dict, lang: Lang): string {
  return dict[lang]
}

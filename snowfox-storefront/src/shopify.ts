/** Snowfox Shopify store — cart permalinks for buyable products only. */
export const SHOP_DOMAIN = 'https://uyw5ju-s0.myshopify.com'

export type ProductVariant = {
  id: string
  label: string
}

export type BuyableProduct = {
  kind: 'buyable'
  handle: 'vodka' | 'dill'
  variants: ProductVariant[]
  image: string
  accent: string
}

export type TeaserProduct = {
  kind: 'teaser'
  handle: 'rum'
  image: string
  accent: string
}

export type CatalogProduct = BuyableProduct | TeaserProduct

export const catalog: CatalogProduct[] = [
  {
    kind: 'buyable',
    handle: 'vodka',
    image: '/products/vodka.jpg',
    accent: '#9FD4C8',
    variants: [
      { id: '48399879602230', label: '375 mL' },
      { id: '48399879634998', label: '750 mL' },
      { id: '48399879667766', label: '1.14 L' },
    ],
  },
  {
    kind: 'buyable',
    handle: 'dill',
    image: '/products/dill.jpg',
    accent: '#7CB38A',
    variants: [{ id: '48342379855926', label: '750 mL' }],
  },
  {
    kind: 'teaser',
    handle: 'rum',
    image: '/products/rum.jpg',
    accent: '#C4A574',
  },
]

/** Opens Shopify cart → checkout. No prices shown on-site (Law). */
export function cartCheckoutUrl(variantId: string, quantity = 1): string {
  const qty = Math.max(1, Math.floor(quantity))
  return `${SHOP_DOMAIN}/cart/${variantId}:${qty}`
}

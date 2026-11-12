/** Snowfox Shopify store — cart permalinks open native Shopify checkout with DTC shipping. */
export const SHOP_DOMAIN = 'https://uyw5ju-s0.myshopify.com'
export const CURRENCY = 'CAD'

export type ProductVariant = {
  id: string
  label: string
  price: string
}

export type Product = {
  handle: string
  title: string
  tagline: string
  image: string
  imageAlt: string
  variants: ProductVariant[]
  accent: string
}

export const products: Product[] = [
  {
    handle: 'snowfox-vodka',
    title: 'Snowfox Vodka',
    tagline: 'Clean. Frosted. Built for the cold.',
    image:
      'https://cdn.shopify.com/s/files/1/0788/9849/5542/files/2026-10-30_vodka_cutout.png?v=1793378930',
    imageAlt: 'Snowfox Vodka frosted bottle',
    accent: '#9FD4C8',
    variants: [
      { id: '48399879602230', label: '375 mL', price: '16.52' },
      { id: '48399879634998', label: '750 mL', price: '29.56' },
      { id: '48399879667766', label: '1.14 L', price: '43.00' },
    ],
  },
  {
    handle: 'snowfox-dill-vodka',
    title: 'Snowfox Dill',
    tagline: 'Bright dill. Canadian flag on frost.',
    image:
      'https://cdn.shopify.com/s/files/1/0788/9849/5542/files/2026-10-30_dill_original_flag_cutout.png?v=1793496576',
    imageAlt: 'Snowfox Dill Vodka bottle with Canadian flag',
    accent: '#7CB38A',
    variants: [{ id: '48342379855926', label: '750 mL', price: '33.92' }],
  },
  {
    handle: 'snowfox-cinnamon-fire',
    title: 'Cinnamon Fire',
    tagline: 'Warm spice. Sweet heat. Red cap.',
    image:
      'https://cdn.shopify.com/s/files/1/0788/9849/5542/files/2026-10-30_cinnamon_fire_cutout.png?v=1793378761',
    imageAlt: 'Snowfox Cinnamon Fire bottle',
    accent: '#E07A5F',
    variants: [{ id: '48342379986998', label: '750 mL', price: '34.56' }],
  },
]

/** Opens Shopify cart → checkout. Shipping rates apply at checkout; order ships DTC after payment. */
export function cartCheckoutUrl(variantId: string, quantity = 1): string {
  const qty = Math.max(1, Math.floor(quantity))
  return `${SHOP_DOMAIN}/cart/${variantId}:${qty}`
}

export function formatPrice(amount: string): string {
  const value = Number.parseFloat(amount)
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: CURRENCY,
  }).format(value)
}

# Snowfox Vodka — DTC storefront

Branded landing page for **Snowfox Vodka** that sells through the connected Shopify store (`uyw5ju-s0.myshopify.com`).

## How ordering & shipping works

1. Shoppers pick a bottle on this page.
2. **Ship to my door** opens a Shopify [cart permalink](https://shopify.dev/docs/apps/build/checkout/create-cart-permalinks) with that variant.
3. Shopify Checkout collects payment and shipping address.
4. Domestic rates already on the store (**Standard $12 CAD**, **Express $20 CAD**) apply at checkout.
5. Paid orders fulfill from the shop location for direct-to-consumer delivery.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

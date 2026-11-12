import { useEffect, useMemo, useState } from 'react'
import {
  cartCheckoutUrl,
  formatPrice,
  products,
  type Product,
} from './shopify'
import './App.css'

const AGE_KEY = 'snowfox-age-ok'

function AgeGate({ onConfirm }: { onConfirm: () => void }) {
  const [denied, setDenied] = useState(false)

  return (
    <div className="age-gate" role="dialog" aria-modal="true" aria-labelledby="age-title">
      <div className="age-gate__panel">
        <p className="age-gate__brand" id="age-title">
          SNOWFOX
        </p>
        <p className="age-gate__copy">
          You must be of legal drinking age in your province to enter and order.
          19+ in most of Canada.
        </p>
        <div className="age-gate__actions">
          <button type="button" className="btn btn--primary" onClick={onConfirm}>
            I am of age
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => setDenied(true)}>
            I am not
          </button>
        </div>
        {denied ? (
          <p className="age-gate__denied" role="status">
            Come back when you are of legal age.
          </p>
        ) : null}
      </div>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  const [variantId, setVariantId] = useState(product.variants[0].id)
  const [qty, setQty] = useState(1)

  const selected = useMemo(
    () => product.variants.find((v) => v.id === variantId) ?? product.variants[0],
    [product.variants, variantId],
  )

  const checkoutHref = cartCheckoutUrl(selected.id, qty)

  return (
    <article
      className="product"
      style={{ ['--product-glow' as string]: `${product.accent}33` }}
    >
      <div className="product__visual">
        <img className="product__img" src={product.image} alt={product.imageAlt} />
      </div>
      <div className="product__meta">
        <div>
          <h3 className="product__title">{product.title}</h3>
          <p className="product__tagline">{product.tagline}</p>
        </div>
        <div className="product__controls">
          <div className="product__row">
            {product.variants.length > 1 ? (
              <select
                className="product__select"
                aria-label={`${product.title} size`}
                value={variantId}
                onChange={(e) => setVariantId(e.target.value)}
              >
                {product.variants.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.label}
                  </option>
                ))}
              </select>
            ) : (
              <span className="product__select" aria-hidden="true">
                {selected.label}
              </span>
            )}
            <select
              className="product__qty"
              aria-label={`${product.title} quantity`}
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  Qty {n}
                </option>
              ))}
            </select>
            <span className="product__price">{formatPrice(selected.price)}</span>
          </div>
          <a className="btn btn--accent" href={checkoutHref} rel="noopener noreferrer">
            Ship to my door
          </a>
        </div>
      </div>
    </article>
  )
}

export default function App() {
  const [ageOk, setAgeOk] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem(AGE_KEY) === '1') setAgeOk(true)
    } catch {
      /* ignore */
    }
  }, [])

  const confirmAge = () => {
    try {
      sessionStorage.setItem(AGE_KEY, '1')
    } catch {
      /* ignore */
    }
    setAgeOk(true)
  }

  return (
    <>
      {!ageOk ? <AgeGate onConfirm={confirmAge} /> : null}
      <div className="page" aria-hidden={!ageOk}>
        <header className="nav">
          <a className="nav__brand" href="#top">
            SNOWFOX
          </a>
          <a className="nav__link" href="#shop">
            Shop &amp; ship
          </a>
        </header>

        <main id="top">
          <section className="hero" aria-label="Snowfox Vodka">
            <div className="hero__grain" aria-hidden="true" />
            <div className="hero__media">
              <img
                className="hero__bottle"
                src={products[0].image}
                alt=""
                fetchPriority="high"
              />
            </div>
            <div className="hero__content">
              <h1 className="hero__brand">SNOWFOX</h1>
              <p className="hero__headline">Vodka that arrives at your door.</p>
              <p className="hero__support">
                Order now. Shopify checkout handles payment and shipping — we
                send it direct to you.
              </p>
              <div className="hero__cta">
                <a className="btn btn--primary" href="#shop">
                  Shop bottles
                </a>
                <a className="btn btn--ghost" href="#ship">
                  How shipping works
                </a>
              </div>
            </div>
          </section>

          <section className="section section--shop" id="shop">
            <div className="section__header">
              <span className="section__eyebrow">Direct to consumer</span>
              <h2 className="section__title">Pick a bottle. We ship it.</h2>
              <p className="section__copy">
                Checkout runs on Shopify. After you pay, the order routes for
                fulfillment and ships to your address — no store pickup required.
              </p>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard key={product.handle} product={product} />
              ))}
            </div>
          </section>

          <section className="section section--ship" id="ship">
            <div className="section__header">
              <span className="section__eyebrow">Doorstep delivery</span>
              <h2 className="section__title">Order once. Ships to you.</h2>
              <p className="section__copy">
                Every “Ship to my door” button opens Snowfox checkout with your
                bottle already in the cart. Shipping is calculated there, then
                we fulfill from our shop location.
              </p>
            </div>
            <div className="ship-grid">
              <div className="ship-step">
                <span className="ship-step__num">01</span>
                <div>
                  <h3>Choose your bottle</h3>
                  <p>Classic, Dill, or Cinnamon Fire — pick size and quantity.</p>
                </div>
              </div>
              <div className="ship-step">
                <span className="ship-step__num">02</span>
                <div>
                  <h3>Pay in Shopify checkout</h3>
                  <p>
                    Secure payment, tax, and delivery address — powered by your
                    Snowfox Shopify store.
                  </p>
                </div>
              </div>
              <div className="ship-step">
                <span className="ship-step__num">03</span>
                <div>
                  <h3>We ship direct</h3>
                  <p>
                    Paid orders fulfill from our Canadian shop location and head
                    straight to your door.
                  </p>
                </div>
              </div>
            </div>
            <div className="rates">
              <span>
                Domestic <strong>Standard $12</strong>
              </span>
              <span>
                Domestic <strong>Express $20</strong>
              </span>
              <span>CAD · rates shown at checkout</span>
            </div>
          </section>
        </main>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Snowfox Vodka. Please drink responsibly. 19+.</span>
          <a href="https://uyw5ju-s0.myshopify.com" rel="noopener noreferrer">
            Shopify store
          </a>
        </footer>
      </div>
    </>
  )
}

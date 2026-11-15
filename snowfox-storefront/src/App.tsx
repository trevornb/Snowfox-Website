import { useEffect, useMemo, useState } from 'react'
import {
  ageGate,
  contact,
  dill,
  footer,
  hero,
  nav,
  rum,
  spirits,
  story,
  t,
  vodka,
  whereToBuy,
  type Lang,
} from './copy'
import { cartCheckoutUrl, catalog, type BuyableProduct } from './shopify'
import { storeData } from './stores'
import './App.css'

const AGE_KEY = 'snowfox-age-ok'
const LANG_KEY = 'snowfox-lang'

type BoardKey = 'anbl' | 'nslc' | 'pei'

function AgeGate({
  lang,
  onConfirm,
  onLang,
}: {
  lang: Lang
  onConfirm: () => void
  onLang: (lang: Lang) => void
}) {
  const [denied, setDenied] = useState(false)

  return (
    <div className="age-gate" role="dialog" aria-modal="true" aria-labelledby="age-title">
      <div className="age-gate__lang" role="group" aria-label="Language">
        <button
          type="button"
          className={lang === 'en' ? 'lang-btn is-active' : 'lang-btn'}
          onClick={() => onLang('en')}
        >
          EN
        </button>
        <button
          type="button"
          className={lang === 'fr' ? 'lang-btn is-active' : 'lang-btn'}
          onClick={() => onLang('fr')}
        >
          FR
        </button>
      </div>
      <div className="age-gate__panel">
        <p className="age-gate__brand">SNOWFOX</p>
        <h1 className="age-gate__title" id="age-title">
          {t(ageGate.title, lang)}
        </h1>
        <p className="age-gate__copy">{t(ageGate.note, lang)}</p>
        <div className="age-gate__actions">
          <button type="button" className="btn btn--primary" onClick={onConfirm}>
            {t(ageGate.yes, lang)}
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => setDenied(true)}>
            {t(ageGate.no, lang)}
          </button>
        </div>
        {denied ? (
          <p className="age-gate__denied" role="status">
            {t(ageGate.denied, lang)}
          </p>
        ) : null}
      </div>
    </div>
  )
}

function LangToggle({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        type="button"
        className={lang === 'en' ? 'lang-btn is-active' : 'lang-btn'}
        onClick={() => onChange('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <span aria-hidden="true">|</span>
      <button
        type="button"
        className={lang === 'fr' ? 'lang-btn is-active' : 'lang-btn'}
        onClick={() => onChange('fr')}
        aria-pressed={lang === 'fr'}
      >
        FR
      </button>
    </div>
  )
}

function BuyControls({ product, lang }: { product: BuyableProduct; lang: Lang }) {
  const [variantId, setVariantId] = useState(product.variants[0].id)
  const [qty, setQty] = useState(1)
  const selected =
    product.variants.find((v) => v.id === variantId) ?? product.variants[0]
  const href = cartCheckoutUrl(selected.id, qty)

  return (
    <div className="product__controls">
      <div className="product__row">
        {product.variants.length > 1 ? (
          <select
            className="product__select"
            aria-label="Size"
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
          <span className="product__select">{selected.label}</span>
        )}
        <select
          className="product__qty"
          aria-label="Quantity"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <a className="btn btn--accent" href={href} rel="noopener noreferrer">
        {t(spirits.buy, lang)}
      </a>
    </div>
  )
}

function SpiritsSection({ lang }: { lang: Lang }) {
  return (
    <section className="section section--spirits" id="spirits">
      <div className="section__header">
        <span className="section__eyebrow">{t(spirits.eyebrow, lang)}</span>
        <h2 className="section__title">{t(spirits.title, lang)}</h2>
        <p className="section__copy">{t(spirits.intro, lang)}</p>
        <p className="section__note">{t(spirits.glass, lang)}</p>
      </div>

      <div className="spirits-stack">
        {catalog.map((item) => {
          if (item.handle === 'vodka') {
            return (
              <article
                key="vodka"
                className="spirit"
                style={{ ['--product-glow' as string]: `${item.accent}33` }}
                id="vodka"
              >
                <div className="spirit__visual">
                  <img
                    className="spirit__img"
                    src={item.image}
                    alt={t(vodka.imageAlt, lang)}
                  />
                </div>
                <div className="spirit__body">
                  <h3 className="spirit__title">{t(vodka.title, lang)}</h3>
                  <p className="spirit__spec">{t(vodka.spec, lang)}</p>
                  <p>{t(vodka.intro, lang)}</p>
                  <h4>{t(vodka.tastingTitle, lang)}</h4>
                  <ul>
                    {vodka.tasting[lang].map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <h4>{t(vodka.serveTitle, lang)}</h4>
                  <ul>
                    {vodka.serves[lang].map((serve) => (
                      <li key={serve.name}>
                        <strong>{serve.name}</strong> — {serve.body}
                      </li>
                    ))}
                  </ul>
                  <p className="spirit__note">{t(vodka.sizesNote, lang)}</p>
                  {item.kind === 'buyable' ? <BuyControls product={item} lang={lang} /> : null}
                  <p className="spirit__responsible">{t(spirits.responsible, lang)}</p>
                </div>
              </article>
            )
          }

          if (item.handle === 'dill') {
            return (
              <article
                key="dill"
                className="spirit"
                style={{ ['--product-glow' as string]: `${item.accent}33` }}
                id="dill"
              >
                <div className="spirit__visual">
                  <img
                    className="spirit__img"
                    src={item.image}
                    alt={t(dill.imageAlt, lang)}
                  />
                </div>
                <div className="spirit__body">
                  <h3 className="spirit__title">{t(dill.title, lang)}</h3>
                  <p className="spirit__spec">{t(dill.spec, lang)}</p>
                  <p>{t(dill.intro, lang)}</p>
                  <p>{t(dill.tasting, lang)}</p>
                  <p>
                    <strong>{t(dill.serveName, lang)}</strong> — {t(dill.serve, lang)}
                  </p>
                  <p>{t(dill.where, lang)}</p>
                  <p>{t(dill.support, lang)}</p>
                  {item.kind === 'buyable' ? <BuyControls product={item} lang={lang} /> : null}
                  <p className="spirit__responsible">{t(spirits.responsible, lang)}</p>
                </div>
              </article>
            )
          }

          return (
            <article
              key="rum"
              className="spirit spirit--teaser"
              style={{ ['--product-glow' as string]: `${item.accent}33` }}
              id="rum"
            >
              <div className="spirit__visual">
                <img className="spirit__img" src={item.image} alt={t(rum.imageAlt, lang)} />
              </div>
              <div className="spirit__body">
                <p className="spirit__badge">{t(spirits.comingSoon, lang)}</p>
                <h3 className="spirit__title">{t(rum.title, lang)}</h3>
                <p className="spirit__spec">{t(rum.spec, lang)}</p>
                <p>{t(rum.line, lang)}</p>
                <p>{t(rum.origin, lang)}</p>
                <p className="spirit__responsible">{t(spirits.responsible, lang)}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function WhereToBuySection({ lang }: { lang: Lang }) {
  const [board, setBoard] = useState<BoardKey>('anbl')

  const rows = useMemo(() => {
    if (board === 'anbl') return storeData.anbl
    if (board === 'nslc') return storeData.nslc
    return storeData.pei
  }, [board])

  return (
    <section className="section section--where" id="where">
      <div className="section__header">
        <span className="section__eyebrow">{t(nav.where, lang)}</span>
        <h2 className="section__title">{t(whereToBuy.title, lang)}</h2>
        <p className="section__copy">{t(whereToBuy.body, lang)}</p>
        <p className="section__support">{t(whereToBuy.support, lang)}</p>
        <p className="section__cta-line">{t(whereToBuy.cta, lang)}</p>
      </div>

      <div className="board-grid">
        {whereToBuy.boards[lang].map((b) => (
          <div className="board-card" key={b.name}>
            <h3>{b.name}</h3>
            <p>{b.sizes}</p>
          </div>
        ))}
      </div>

      <p className="items-line">{t(whereToBuy.items, lang)}</p>
      <p className="section__copy">{t(whereToBuy.listIntro, lang)}</p>

      <div className="store-tabs" role="tablist" aria-label={t(nav.where, lang)}>
        {(
          [
            ['anbl', whereToBuy.tabAnbl],
            ['nslc', whereToBuy.tabNslc],
            ['pei', whereToBuy.tabPei],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={board === key}
            className={board === key ? 'store-tab is-active' : 'store-tab'}
            onClick={() => setBoard(key)}
          >
            {t(label, lang)}
          </button>
        ))}
      </div>

      <div className="store-table-wrap">
        <table className="store-table">
          <thead>
            <tr>
              <th>{lang === 'en' ? 'Store' : 'Magasin'}</th>
              <th>{lang === 'en' ? 'Town' : 'Ville'}</th>
              <th>{lang === 'en' ? 'Address' : 'Adresse'}</th>
              <th>{lang === 'en' ? 'Products' : 'Produits'}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const key = `${row.town}-${row.store}-${'address' in row ? row.address : ''}`
              return (
                <tr key={key}>
                  <td>{row.store}</td>
                  <td>{row.town}</td>
                  <td>{'address' in row ? row.address : ''}</td>
                  <td>{row.products}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="spirit__responsible">{t(whereToBuy.responsible, lang)}</p>
    </section>
  )
}

export default function App() {
  const [ageOk, setAgeOk] = useState(false)
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    try {
      if (sessionStorage.getItem(AGE_KEY) === '1') setAgeOk(true)
      const saved = sessionStorage.getItem(LANG_KEY)
      if (saved === 'en' || saved === 'fr') setLang(saved)
    } catch {
      /* ignore */
    }
  }, [])

  const setLanguage = (next: Lang) => {
    setLang(next)
    try {
      sessionStorage.setItem(LANG_KEY, next)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = next === 'fr' ? 'fr-CA' : 'en-CA'
  }

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
      {!ageOk ? (
        <AgeGate lang={lang} onConfirm={confirmAge} onLang={setLanguage} />
      ) : null}
      <div className="page" aria-hidden={!ageOk} lang={lang === 'fr' ? 'fr-CA' : 'en-CA'}>
        <header className="nav">
          <a className="nav__brand" href="#top">
            SNOWFOX
          </a>
          <nav className="nav__links" aria-label="Primary">
            <a className="nav__link" href="#top">
              {t(nav.home, lang)}
            </a>
            <a className="nav__link" href="#spirits">
              {t(nav.spirits, lang)}
            </a>
            <a className="nav__link" href="#where">
              {t(nav.where, lang)}
            </a>
            <a className="nav__link" href="#story">
              {t(nav.story, lang)}
            </a>
            <a className="nav__link" href="#contact">
              {t(nav.contact, lang)}
            </a>
            <LangToggle lang={lang} onChange={setLanguage} />
          </nav>
        </header>

        <main id="top">
          <section className="hero" aria-label="Snowfox">
            <div className="hero__grain" aria-hidden="true" />
            <div className="hero__media">
              <img
                className="hero__bottle"
                src="/products/vodka.jpg"
                alt={t(vodka.imageAlt, lang)}
                fetchPriority="high"
              />
            </div>
            <div className="hero__content">
              <h1 className="hero__brand">{t(hero.brand, lang)}</h1>
              <p className="hero__headline">{t(hero.pull, lang)}</p>
              <div className="hero__cta">
                <a className="btn btn--primary" href="#where">
                  {t(hero.ctaStore, lang)}
                </a>
                <a className="btn btn--ghost" href="#spirits">
                  {t(hero.ctaSpirits, lang)}
                </a>
              </div>
            </div>
          </section>

          <section className="section section--pull" id="about-teaser">
            <h2 className="pull-title">{t(story.title, lang)}</h2>
            <p className="pull-quote">{t(story.pull, lang)}</p>
          </section>

          <SpiritsSection lang={lang} />
          <WhereToBuySection lang={lang} />

          <section className="section section--story" id="story">
            <div className="section__header">
              <span className="section__eyebrow">{t(nav.story, lang)}</span>
              <h2 className="section__title">{t(story.title, lang)}</h2>
            </div>
            <div className="story-copy">
              <p>{t(story.p1, lang)}</p>
              <p>{t(story.p2, lang)}</p>
              <p>{t(story.p3, lang)}</p>
              <p>{t(story.p4, lang)}</p>
              <p className="pull-quote">{t(story.pull, lang)}</p>
            </div>
            <div className="story-blocks">
              {story.blocks[lang].map((block) => (
                <div className="story-block" key={block.title}>
                  <h3>{block.title}</h3>
                  <p>{block.body}</p>
                </div>
              ))}
            </div>
            <p className="spirit__responsible">{t(story.responsible, lang)}</p>
          </section>

          <section className="section section--contact" id="contact">
            <div className="section__header">
              <span className="section__eyebrow">{t(nav.contact, lang)}</span>
              <h2 className="section__title">{t(contact.title, lang)}</h2>
              <p className="section__copy">{t(contact.intro, lang)}</p>
            </div>
            <div className="contact-card">
              <p>
                <strong>{t(contact.company, lang)}</strong>
              </p>
              <p>{t(contact.address, lang)}</p>
              <p>{t(contact.phone, lang)}</p>
              <p>
                {t(contact.emailLabel, lang)}:{' '}
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
              <p className="section__note">{t(contact.privacy, lang)}</p>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>{t(footer.line, lang)}</p>
          <nav className="footer__nav" aria-label="Footer">
            <a href="#top">{t(nav.home, lang)}</a>
            <a href="#spirits">{t(nav.spirits, lang)}</a>
            <a href="#where">{t(nav.where, lang)}</a>
            <a href="#story">{t(nav.story, lang)}</a>
            <a href="#contact">{t(nav.contact, lang)}</a>
          </nav>
        </footer>
      </div>
    </>
  )
}

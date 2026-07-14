import { Icon } from './Icon'

interface PageHeroProps {
  eyebrow: string
  title: string
  highlight?: string
  description: string
  image: string
  imageAlt: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  variant?: 'photo' | 'object'
  glassLabels?: string[]
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  imageAlt,
  primaryLabel = 'Agende seu diagnóstico',
  primaryHref = '/contato?assunto=diagnostico',
  secondaryLabel = 'Fale no WhatsApp',
  secondaryHref = 'https://wa.me/5554981112788',
  variant = 'photo',
  glassLabels = [],
}: PageHeroProps) {
  const titleParts = highlight ? title.split(highlight) : [title]

  return (
    <section className={`page-hero page-hero--${variant}`}>
      <div className="container page-hero__grid">
        <div className="page-hero__copy reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h1>
            {highlight ? <>{titleParts[0]}<span>{highlight}</span>{titleParts[1]}</> : title}
          </h1>
          <p>{description}</p>
          <div className="hero-actions">
            <a className="button button--primary" href={primaryHref}>{primaryLabel} <Icon name="arrow" size={18} /></a>
            <a className="button button--secondary" href={secondaryHref} target={secondaryHref.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {secondaryHref.includes('wa.me') && <Icon name="whatsapp" size={19} />}{secondaryLabel}
            </a>
          </div>
        </div>
        <div className="page-hero__visual reveal reveal--delay">
          <div className="page-hero__image-shell">
            <img src={image} alt={imageAlt} />
          </div>
          {glassLabels.length > 0 && (
            <div className="page-hero__glass glass-panel">
              {glassLabels.map((label, index) => (
                <div key={label}><span>0{index + 1}</span><strong>{label}</strong></div>
              ))}
            </div>
          )}
          <div className="page-hero__glow" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

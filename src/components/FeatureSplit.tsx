import { Icon } from './Icon'

interface FeatureSplitProps {
  id?: string
  eyebrow: string
  title: string
  items: string[]
  image: string
  imageAlt: string
  reverse?: boolean
}

export function FeatureSplit({ id, eyebrow, title, items, image, imageAlt, reverse = false }: FeatureSplitProps) {
  return (
    <section className="section section--feature" id={id}>
      <div className={`container feature-panel glass-panel ${reverse ? 'feature-panel--reverse' : ''}`}>
        <div className="feature-image">
          <img src={image} alt={imageAlt} loading="lazy" />
          <div className="feature-image__overlay" />
        </div>
        <div className="feature-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <ul className="feature-list">
            {items.map((item) => (
              <li key={item}><span><Icon name="check" size={17} /></span>{item}</li>
            ))}
          </ul>
          <a className="button button--outline" href="#contato">Saiba mais <Icon name="arrow" size={17} /></a>
        </div>
      </div>
    </section>
  )
}

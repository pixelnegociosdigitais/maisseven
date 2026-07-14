import { Icon } from './Icon'

type IconName = Parameters<typeof Icon>[0]['name']

interface Card {
  id?: string
  icon: IconName
  title: string
  text: string
  href?: string
  bullets?: string[]
}

interface PageCardsProps {
  eyebrow?: string
  title: string
  description?: string
  cards: Card[]
}

export function PageCards({ eyebrow, title, description, cards }: PageCardsProps) {
  return (
    <section className="section page-cards-section">
      <div className="container">
        <div className="section-heading">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className={`page-cards page-cards--${Math.min(cards.length, 4)}`}>
          {cards.map((card) => (
            <article id={card.id} className="page-card glass-panel" key={card.title}>
              <div className="icon-box"><Icon name={card.icon} size={27} /></div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              {card.bullets && (
                <ul className="compact-list">
                  {card.bullets.map((bullet) => <li key={bullet}><Icon name="check" size={15} />{bullet}</li>)}
                </ul>
              )}
              {card.href && <a className="text-link" href={card.href}>Ver detalhes <Icon name="arrow" size={16} /></a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

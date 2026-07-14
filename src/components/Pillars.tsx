import { Icon } from './Icon'

type IconName = Parameters<typeof Icon>[0]['name']

interface Pillar {
  icon: IconName
  title: string
  text?: string
}

export function Pillars({ items }: { items: Pillar[] }) {
  return (
    <section className="section section--compact">
      <div className="container">
        <div className="section-heading section-heading--left">
          <span className="eyebrow">NOSSOS PILARES</span>
          <h2>Princípios que orientam cada projeto.</h2>
        </div>
        <div className="pillars glass-panel">
          {items.map((item) => (
            <div className="pillar" key={item.title}>
              <Icon name={item.icon} size={30} />
              <strong>{item.title}</strong>
              {item.text && <p>{item.text}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

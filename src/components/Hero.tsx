import content from '../content/site-content.json'
import { Icon } from './Icon'

export function Hero() {
  const whatsapp = `https://wa.me/${content.brand.whatsapp}?text=${encodeURIComponent('Olá, conheci a +Seven pelo site e gostaria de saber mais sobre as soluções.')}`

  return (
    <section className="hero section" id="inicio">
      <div className="hero-orb hero-orb--one" />
      <div className="hero-orb hero-orb--two" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow">{content.hero.eyebrow}</span>
          <h1>
            {content.hero.titleStart}{' '}
            <span>{content.hero.titleHighlight}</span>
          </h1>
          <p>{content.hero.description}</p>
          <div className="hero-actions">
            <a className="button button--primary" href="/contato?assunto=diagnostico">
              {content.hero.primaryCta} <Icon name="arrow" size={19} />
            </a>
            <a className="button button--secondary" href={whatsapp} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={20} /> {content.hero.secondaryCta}
            </a>
          </div>
          <ul className="hero-tags" aria-label="Áreas de atuação">
            {content.pillars.map((pillar) => (
              <li key={pillar}><span className="tag-dot" />{pillar}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual reveal reveal--delay">
          <div className="chart-card glass-panel" aria-label="Painel visual de evolução estratégica">
            <span className="chart-card__label">Evolução estratégica</span>
            <strong>Clareza em cada etapa</strong>
            <svg viewBox="0 0 340 150" role="img" aria-label="Gráfico decorativo crescente, sem dados estatísticos">
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#16BDF0" stopOpacity="0.48" />
                  <stop offset="1" stopColor="#16BDF0" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path className="chart-grid" d="M0 30h340M0 70h340M0 110h340" />
              <path className="chart-area" d="M8 132 58 108 102 114 148 76 194 91 244 50 286 63 332 18V145H8Z" />
              <path className="chart-line" d="M8 132 58 108 102 114 148 76 194 91 244 50 286 63 332 18" />
              {[8,58,102,148,194,244,286,332].map((x, i) => {
                const ys = [132,108,114,76,91,50,63,18]
                return <circle key={x} cx={x} cy={ys[i]} r="4" />
              })}
            </svg>
          </div>
          <div className="hero-image-shell">
            <img src="/assets/images/hero-team-laptop.jpg" alt="Equipe diversa reunida em torno de um notebook durante uma conversa estratégica" />
          </div>
          <div className="hero-visual__glow" />
        </div>
      </div>
    </section>
  )
}

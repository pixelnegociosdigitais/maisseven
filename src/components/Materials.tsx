import content from '../content/site-content.json'
import { Icon } from './Icon'

const icons = ['book', 'document', 'presentation', 'document', 'template', 'puzzle'] as const

export function Materials() {
  return (
    <section className="section section--compact" id="conteudos">
      <div className="container">
        <div className="section-heading section-heading--left">
          <span className="eyebrow">MATERIAIS E SOLUÇÕES</span>
          <h2>Recursos prontos para apoiar a transformação.</h2>
        </div>
        <div className="materials-grid">
          {content.materials.map((material, index) => (
            <article className="material-card glass-panel" key={material}>
              <Icon name={icons[index]} size={28} />
              <strong>{material}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

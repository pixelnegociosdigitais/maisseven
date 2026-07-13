import content from '../content/site-content.json'
import { Icon } from './Icon'

export function SolutionGrid() {
  return (
    <section className="section section--compact" id="solucoes">
      <div className="container">
        <div className="solution-grid">
          {content.solutions.map((solution) => (
            <article className="solution-card glass-panel" key={solution.title}>
              <span className="icon-box"><Icon name={solution.icon as 'education' | 'business' | 'training' | 'method'} /></span>
              <div>
                <h2>{solution.title}</h2>
                <p>{solution.description}</p>
              </div>
              <a href="#contato" aria-label={`Saiba mais sobre ${solution.title}`}><Icon name="arrow" size={20} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

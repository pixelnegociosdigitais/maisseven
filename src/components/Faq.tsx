import { useState } from 'react'
import content from '../content/site-content.json'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section section--compact" id="sobre">
      <div className="container faq-layout">
        <div className="section-heading section-heading--left faq-heading">
          <span className="eyebrow">PERGUNTAS FREQUENTES</span>
          <h2>Informação clara para decisões mais seguras.</h2>
          <p>Detalhes objetivos sobre a atuação da +Seven.</p>
        </div>
        <div className="faq-list">
          {content.faq.map((item, index) => {
            const isOpen = open === index
            return (
              <article className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} key={item.question}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : index)}>
                  <span>{item.question}</span><span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq-answer"><p>{item.answer}</p></div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

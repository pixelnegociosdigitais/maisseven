import content from '../content/site-content.json'
import { Icon } from './Icon'

export function ContactCta() {
  const whatsapp = `https://wa.me/${content.brand.whatsapp}?text=${encodeURIComponent('Olá, gostaria de agendar um diagnóstico com a +Seven.')}`
  return (
    <section className="section section--compact" id="contato">
      <div className="container contact-cta glass-panel">
        <div>
          <span className="eyebrow">PRÓXIMO PASSO</span>
          <h2>Vamos conversar sobre o futuro da sua instituição ou empresa?</h2>
          <p>Um diagnóstico inicial ajuda a transformar necessidades em caminhos claros.</p>
        </div>
        <div className="contact-cta__actions">
          <a className="button button--primary" href={`mailto:${content.brand.email}?subject=Diagnóstico +Seven`}>Agende seu diagnóstico <Icon name="arrow" size={18} /></a>
          <a className="button button--secondary" href={whatsapp} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={20} /> Fale no WhatsApp</a>
        </div>
      </div>
    </section>
  )
}

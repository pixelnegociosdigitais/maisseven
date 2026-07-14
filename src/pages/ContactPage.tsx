import content from '../content/site-content.json'
import { ContactForm } from '../components/ContactForm'
import { Faq } from '../components/Faq'
import { Icon } from '../components/Icon'
import { PageHero } from '../components/PageHero'

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTATO"
        title="Vamos conversar sobre o próximo passo?"
        highlight="próximo passo"
        description="Conte brevemente o que sua escola, instituição ou empresa precisa. A +Seven entra em contato para entender sua realidade."
        image="/assets/images/contact-consultant.jpg"
        imageAlt="Profissional da +Seven em atendimento"
        primaryLabel="Falar no WhatsApp"
        primaryHref={`https://wa.me/${content.brand.whatsapp}`}
        secondaryLabel="Outros canais"
        secondaryHref="#canais"
      />
      <section className="section contact-main" id="canais">
        <div className="container contact-main__grid">
          <div className="contact-channels">
            <article className="contact-channel glass-panel"><Icon name="whatsapp" size={28} /><div><h3>WhatsApp</h3><p>Para dúvidas, informações e agendamentos.</p><a href={`https://wa.me/${content.brand.whatsapp}`} target="_blank" rel="noreferrer">{content.brand.whatsappDisplay}</a></div></article>
            <article className="contact-channel glass-panel"><Icon name="mail" size={28} /><div><h3>E-mail</h3><p>Para propostas, projetos e materiais.</p><a href={`mailto:${content.brand.email}`}>{content.brand.email}</a></div></article>
            <article className="contact-channel glass-panel"><Icon name="instagram" size={28} /><div><h3>Instagram</h3><p>Para acompanhar conteúdos e novidades.</p><a href="https://instagram.com/maisseven" target="_blank" rel="noreferrer">{content.brand.instagram}</a></div></article>
          </div>
          <ContactForm />
        </div>
      </section>
      <Faq />
      <section className="section section--compact"><div className="container contact-closing glass-panel"><Icon name="training" size={34} /><div><h2>Toda transformação começa com uma boa conversa.</h2><p>Estamos prontos para ouvir você.</p></div></div></section>
    </>
  )
}

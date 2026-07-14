import { ContactCta } from '../components/ContactCta'
import { PageCards } from '../components/PageCards'
import { PageHero } from '../components/PageHero'
import { Pillars } from '../components/Pillars'

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="SOBRE A +SEVEN"
        title="Conhecimento que aproxima. Estratégia que transforma."
        highlight="transforma"
        description="A +Seven conecta educação, gestão e desenvolvimento para gerar mudanças possíveis e duradouras."
        image="/assets/images/hero-team-laptop.jpg"
        imageAlt="Profissionais construindo uma estratégia em equipe"
        primaryLabel="Conheça nossa atuação"
        primaryHref="#essencia"
      />
      <section className="section section--compact" id="essencia">
        <div className="container about-intro glass-panel">
          <div>
            <span className="eyebrow">NOSSA ESSÊNCIA</span>
            <h2>Direção para transformar desafios em caminhos claros.</h2>
          </div>
          <p>A +Seven nasceu para ajudar pessoas, escolas e negócios a encontrarem direção. Unimos escuta, conhecimento e soluções práticas em projetos construídos para cada realidade.</p>
        </div>
      </section>
      <Pillars items={[
        { icon: 'education', title: 'Educação antirracista e inclusiva', text: 'Respeito, equidade e pertencimento.' },
        { icon: 'training', title: 'Desenvolvimento humano', text: 'Pessoas preparadas para novos desafios.' },
        { icon: 'method', title: 'Estratégia com propósito', text: 'Decisões claras e aplicáveis.' },
        { icon: 'check', title: 'Ética e responsabilidade', text: 'Relações transparentes e duradouras.' },
      ]} />
      <PageCards
        eyebrow="NOSSA FORMA DE ATUAR"
        title="Mais do que orientar, construímos junto."
        cards={[
          { icon: 'training', title: 'Escutamos', text: 'Entendemos a realidade antes de apresentar soluções.' },
          { icon: 'template', title: 'Construímos', text: 'Cada projeto é desenvolvido conforme o contexto do cliente.' },
          { icon: 'presentation', title: 'Acompanhamos', text: 'A transformação continua depois da entrega.' },
        ]}
      />
      <ContactCta />
    </>
  )
}

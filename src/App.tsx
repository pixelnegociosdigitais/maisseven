import content from './content/site-content.json'
import { ContactCta } from './components/ContactCta'
import { Faq } from './components/Faq'
import { FeatureSplit } from './components/FeatureSplit'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Materials } from './components/Materials'
import { SolutionGrid } from './components/SolutionGrid'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SolutionGrid />
        <FeatureSplit
          id="educacao"
          eyebrow={content.education.eyebrow}
          title={content.education.title}
          items={content.education.items}
          image="./assets/images/education-classroom.jpg"
          imageAlt="Professora em sala de aula com estudantes"
        />
        <FeatureSplit
          id="empresas"
          eyebrow={content.business.eyebrow}
          title={content.business.title}
          items={content.business.items}
          image="./assets/images/business-strategy.jpg"
          imageAlt="Equipe analisando um planejamento estratégico"
          reverse
        />
        <Materials />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

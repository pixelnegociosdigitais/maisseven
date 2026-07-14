import { ContactCta } from '../components/ContactCta'
import { PageCards } from '../components/PageCards'
import { PageHero } from '../components/PageHero'
import { ProcessSteps } from '../components/ProcessSteps'

const solutionCards = [
  {
    id: 'educacao',
    icon: 'education' as const,
    title: 'Educação',
    text: 'Formações, projetos e materiais para escolas que desejam ensinar com inclusão, propósito e qualidade.',
    bullets: ['Formação docente', 'Educação antirracista', 'Cultura afro-brasileira e indígena', 'Leis 10.639/03 e 11.645/08'],
  },
  {
    id: 'empresas',
    icon: 'business' as const,
    title: 'Empresas',
    text: 'Organização, planejamento e orientação para MEIs e MPEs crescerem com mais segurança.',
    bullets: ['Organização de processos', 'Planejamento estratégico', 'Planejamento comercial', 'Acompanhamento'],
  },
  {
    id: 'formacoes',
    icon: 'training' as const,
    title: 'Formações',
    text: 'Treinamentos práticos para educadores, gestores, lideranças e equipes.',
    bullets: ['Presencial ou online', 'Oficinas práticas', 'Conteúdo personalizado', 'Materiais de apoio'],
  },
]

export function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="NOSSAS SOLUÇÕES"
        title="Soluções para transformar desafios em resultados."
        highlight="transformar desafios"
        description="Educação, gestão e formação desenvolvidas para a realidade de cada instituição ou empresa."
        image="/assets/images/hero-team-laptop.jpg"
        imageAlt="Equipe diversa em conversa estratégica"
        primaryLabel="Conheça nossas soluções"
        primaryHref="#areas"
        glassLabels={['Diagnóstico', 'Estratégia', 'Acompanhamento']}
      />
      <div id="areas">
        <PageCards
          eyebrow="ÁREAS DE ATUAÇÃO"
          title="Uma solução clara para cada realidade."
          description="Escolha a área que mais combina com o seu desafio atual."
          cards={solutionCards}
        />
      </div>
      <section className="section section--feature" id="educacao-antirracista">
        <div className="container feature-panel glass-panel">
          <div className="feature-image"><img src="/assets/images/education-antiracism.jpg" alt="Professora trabalhando diversidade cultural em sala de aula" /><div className="feature-image__overlay" /></div>
          <div className="feature-copy">
            <span className="eyebrow">EDUCAÇÃO ANTIRRACISTA</span>
            <h2>Conhecimento, identidade e pertencimento.</h2>
            <p className="feature-paragraph">Apoiamos escolas na aplicação das Leis 10.639/03 e 11.645/08 com formações, materiais e projetos que valorizam histórias e identidades.</p>
            <a className="button button--outline" href="/contato?assunto=educacao-antirracista">Conversar sobre este projeto</a>
          </div>
        </div>
      </section>
      <ProcessSteps steps={[
        { title: 'Entender', text: 'Escutamos sua realidade e identificamos prioridades.' },
        { title: 'Planejar', text: 'Criamos uma estratégia personalizada.' },
        { title: 'Aplicar', text: 'Transformamos o plano em ações possíveis.' },
        { title: 'Acompanhar', text: 'Avaliamos e ajustamos o caminho.' },
      ]} />
      <ContactCta />
    </>
  )
}

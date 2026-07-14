import { ContentLibrary } from '../components/ContentLibrary'
import { PageCards } from '../components/PageCards'
import { PageHero } from '../components/PageHero'

const cards = [
  { category: 'Educação', title: 'Educação antirracista: da legislação à prática', readingTime: '8 min', image: '/assets/images/education-antiracism.jpg' },
  { category: 'Empresas', title: 'Planejamento estratégico para pequenos negócios', readingTime: '6 min', image: '/assets/images/business-strategy.jpg' },
  { category: 'Formações', title: 'Formação docente com propósito', readingTime: '6 min', image: '/assets/images/education-classroom.jpg' },
  { category: 'Empresas', title: 'Organização que gera resultados', readingTime: '7 min', image: '/assets/images/business-professional.jpg' },
  { category: 'Educação', title: 'Cultura afro-brasileira e indígena na escola', readingTime: '7 min', image: '/assets/images/education-antiracism.jpg' },
  { category: 'Materiais', title: 'Recursos práticos que economizam tempo', readingTime: '5 min', image: '/assets/images/content-materials-icon.png' },
]

export function ContentPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTEÚDOS"
        title="Conteúdos para aprender, aplicar e transformar."
        highlight="transformar"
        description="Ideias, materiais e orientações sobre educação, gestão e desenvolvimento."
        image="/assets/images/content-materials-icon.png"
        imageAlt="Símbolo de materiais e conteúdos digitais"
        primaryLabel="Explorar conteúdos"
        primaryHref="#biblioteca"
        secondaryLabel="Conheça os materiais"
        secondaryHref="#materiais"
        variant="object"
      />
      <div id="biblioteca"><ContentLibrary cards={cards} /></div>
      <div id="materiais">
        <PageCards
          eyebrow="MATERIAIS"
          title="Recursos para aplicar no dia a dia."
          cards={[
            { icon: 'book', title: 'Guias e e-books', text: 'Conteúdos práticos para estudar e aplicar.' },
            { icon: 'puzzle', title: 'Materiais pedagógicos', text: 'Recursos prontos para educadores e escolas.' },
            { icon: 'template', title: 'Modelos para empresas', text: 'Ferramentas que facilitam a gestão do negócio.' },
          ]}
        />
      </div>
      <section className="section section--compact">
        <div className="container newsletter glass-panel">
          <div><span className="eyebrow">NOVIDADES</span><h2>Receba conteúdos úteis, sem excesso de mensagens.</h2><p>Materiais, artigos e novidades direto no seu e-mail.</p></div>
          <form onSubmit={(e) => e.preventDefault()}><input type="email" placeholder="Seu melhor e-mail" required /><button className="button button--primary">Quero receber</button></form>
        </div>
      </section>
    </>
  )
}

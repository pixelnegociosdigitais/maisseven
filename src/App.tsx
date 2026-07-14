import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { WhatsAppButton } from './components/WhatsAppButton'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { ContentPage } from './pages/ContentPage'
import { HomePage } from './pages/HomePage'
import { SolutionsPage } from './pages/SolutionsPage'

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1)
  return pathname
}

export default function App() {
  const pathname = normalizePath(window.location.pathname)
  let page

  switch (pathname) {
    case '/':
      page = <HomePage />
      break
    case '/solucoes':
      page = <SolutionsPage />
      break
    case '/sobre':
      page = <AboutPage />
      break
    case '/conteudos':
      page = <ContentPage />
      break
    case '/contato':
      page = <ContactPage />
      break
    default:
      page = (
        <section className="not-found section">
          <div className="container glass-panel">
            <span className="eyebrow">PÁGINA NÃO ENCONTRADA</span>
            <h1>O caminho que você procurou não está disponível.</h1>
            <p>Volte à página inicial ou fale com a +Seven.</p>
            <a className="button button--primary" href="/">Voltar ao início</a>
          </div>
        </section>
      )
  }

  return (
    <>
      <Header pathname={pathname} />
      <main>{page}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

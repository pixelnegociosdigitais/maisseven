import content from '../content/site-content.json'
import { BrandLogo } from './BrandLogo'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <BrandLogo compact />
          <p>Educação, gestão e estratégia para transformar pessoas, escolas e negócios.</p>
          <div className="social-links">
            <a href={`https://instagram.com/${content.brand.instagram.replace('@', '')}`} aria-label="Instagram" target="_blank" rel="noreferrer"><Icon name="instagram" /></a>
            <a href={`mailto:${content.brand.email}`} aria-label="E-mail"><Icon name="mail" /></a>
          </div>
        </div>
        <div>
          <h3>Navegação</h3>
          <a href="/">Início</a>
          <a href="/solucoes">Soluções</a>
          <a href="/sobre">Sobre</a>
          <a href="/conteudos">Conteúdos</a>
          <a href="/contato">Contato</a>
        </div>
        <div>
          <h3>Soluções</h3>
          <a href="/solucoes#educacao">Educação</a>
          <a href="/solucoes#empresas">Empresas</a>
          <a href="/solucoes#formacoes">Formações</a>
          <a href="/solucoes#metodo">Método +Seven</a>
          <a href="/conteudos">Materiais</a>
        </div>
        <div>
          <h3>Contato</h3>
          <a href={`https://wa.me/${content.brand.whatsapp}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={17} /> {content.brand.whatsappDisplay}</a>
          <a href={`mailto:${content.brand.email}`}><Icon name="mail" size={17} /> {content.brand.email}</a>
          <a href={`https://instagram.com/${content.brand.instagram.replace('@', '')}`} target="_blank" rel="noreferrer"><Icon name="instagram" size={17} /> {content.brand.instagram}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 +Seven Orientações Educacionais e Empresariais.</span>
        <span>Política de Privacidade · Termos de Uso</span>
      </div>
    </footer>
  )
}

import { useEffect, useState } from 'react'
import { BrandLogo } from './BrandLogo'
import { Icon } from './Icon'

const navItems = [
  ['Início', '#inicio'],
  ['Soluções', '#solucoes'],
  ['Sobre', '#sobre'],
  ['Conteúdos', '#conteudos'],
  ['Contato', '#contato'],
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <BrandLogo />
        <button className="menu-button" type="button" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
        <nav className={`main-nav ${open ? 'main-nav--open' : ''}`} aria-label="Navegação principal">
          {navItems.map(([label, href], index) => (
            <a key={href} className={index === 0 ? 'is-active' : ''} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="button button--primary header-cta" href="#contato" onClick={() => setOpen(false)}>
            Agende seu diagnóstico <Icon name="arrow" size={18} />
          </a>
        </nav>
      </div>
    </header>
  )
}

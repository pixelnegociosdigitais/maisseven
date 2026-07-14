import { useMemo, useState } from 'react'
import { Icon } from './Icon'

interface ContentCard {
  category: string
  title: string
  readingTime: string
  image: string
}

interface ContentLibraryProps {
  cards: ContentCard[]
}

const filters = ['Todos', 'Educação', 'Empresas', 'Formações', 'Materiais']

export function ContentLibrary({ cards }: ContentLibraryProps) {
  const [filter, setFilter] = useState('Todos')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => cards.filter((card) => {
    const matchesFilter = filter === 'Todos' || card.category === filter
    const matchesQuery = card.title.toLowerCase().includes(query.toLowerCase())
    return matchesFilter && matchesQuery
  }), [cards, filter, query])

  return (
    <section className="section content-library">
      <div className="container">
        <label className="content-search glass-panel">
          <span className="sr-only">Buscar conteúdos</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="O que você procura?" />
          <span aria-hidden="true">⌕</span>
        </label>
        <div className="content-filters" aria-label="Filtros de conteúdo">
          {filters.map((item) => <button className={filter === item ? 'is-active' : ''} key={item} type="button" onClick={() => setFilter(item)}>{item}</button>)}
        </div>
        <div className="content-grid">
          {filtered.map((card) => (
            <article className="content-card glass-panel" key={card.title}>
              <img src={card.image} alt="" />
              <div>
                <span>{card.category}</span>
                <h3>{card.title}</h3>
                <p>{card.readingTime} de leitura</p>
                <a className="text-link" href="#">Ler conteúdo <Icon name="arrow" size={16} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

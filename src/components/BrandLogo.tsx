interface BrandLogoProps {
  compact?: boolean
}

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <a className={`brand-logo ${compact ? 'brand-logo--compact' : ''}`} href="#inicio" aria-label="+Seven — início">
      <img className="brand-logo__symbol" src="./assets/brand/simbolo-7-plusseven.png" alt="" />
      <span className="brand-logo__text">
        <img src="./assets/brand/wordmark-plusseven.png" alt="+Seven" />
        {!compact && <small>Orientações Educacionais e Empresariais</small>}
      </span>
    </a>
  )
}

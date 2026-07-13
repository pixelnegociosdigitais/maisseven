import type { SVGProps } from 'react'

type IconName =
  | 'education'
  | 'business'
  | 'training'
  | 'method'
  | 'check'
  | 'book'
  | 'presentation'
  | 'document'
  | 'template'
  | 'puzzle'
  | 'whatsapp'
  | 'mail'
  | 'instagram'
  | 'arrow'
  | 'menu'
  | 'close'

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}

export function Icon({ name, size = 24, ...props }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    ...props,
  }

  switch (name) {
    case 'education':
      return <svg {...common}><path d="m3 10 9-5 9 5-9 5-9-5Z"/><path d="M7 12v5c3 2 7 2 10 0v-5"/><path d="M21 10v6"/></svg>
    case 'business':
      return <svg {...common}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/><path d="M10 12v2h4v-2"/></svg>
    case 'training':
      return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    case 'method':
      return <svg {...common}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/><path d="m16.5 7.5 4-4"/><path d="m17.5 3.5 3 0 0 3"/></svg>
    case 'check':
      return <svg {...common}><path d="m5 12 4 4L19 6"/></svg>
    case 'book':
      return <svg {...common}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4v15.5"/><path d="M20 4v13H6.5A2.5 2.5 0 0 0 4 19.5"/><path d="M4 4h16"/></svg>
    case 'presentation':
      return <svg {...common}><path d="M3 4h18v12H3z"/><path d="M8 20h8M12 16v4"/><path d="m8 11 2-2 2 2 4-4"/></svg>
    case 'document':
      return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16h16V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h6"/></svg>
    case 'template':
      return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 9v12"/></svg>
    case 'puzzle':
      return <svg {...common}><path d="M8.5 3a2.5 2.5 0 1 1 5 0H18v4.5a2.5 2.5 0 1 1 0 5V21h-5.5a2.5 2.5 0 1 0-5 0H3v-5.5a2.5 2.5 0 1 1 0-5V3z"/></svg>
    case 'whatsapp':
      return <svg {...common}><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.45L3 20l1.1-4.7A8.5 8.5 0 1 1 20.5 11.5Z"/><path d="M8.5 8.2c.3 2.4 2.4 4.5 4.8 4.8"/><path d="M13.4 13c.8.3 1.7-.3 2-1"/></svg>
    case 'mail':
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
    case 'instagram':
      return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
    case 'arrow':
      return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    case 'menu':
      return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16"/></svg>
    case 'close':
      return <svg {...common}><path d="m6 6 12 12M18 6 6 18"/></svg>
  }
}

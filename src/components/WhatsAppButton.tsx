import content from '../content/site-content.json'
import { Icon } from './Icon'

export function WhatsAppButton() {
  const href = `https://wa.me/${content.brand.whatsapp}?text=${encodeURIComponent('Olá, conheci a +Seven pelo site e gostaria de saber mais.')}`
  return <a className="whatsapp-floating" href={href} target="_blank" rel="noreferrer" aria-label="Falar com a +Seven no WhatsApp"><Icon name="whatsapp" size={29} /></a>
}

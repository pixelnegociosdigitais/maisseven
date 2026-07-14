import { useState } from 'react'
import { Icon } from './Icon'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  return (
    <form className="contact-form glass-panel" onSubmit={(event) => { event.preventDefault(); setSent(true) }}>
      <div className="contact-form__heading">
        <span className="eyebrow">ENVIE SUA MENSAGEM</span>
        <h2>Conte como podemos ajudar.</h2>
      </div>
      <div className="form-grid">
        <label><span>Nome</span><input name="name" required /></label>
        <label><span>WhatsApp</span><input name="whatsapp" type="tel" required /></label>
        <label><span>E-mail</span><input name="email" type="email" required /></label>
        <label><span>Perfil</span><select name="profile" required defaultValue=""><option value="" disabled>Selecione</option><option>Escola</option><option>Educador</option><option>MEI</option><option>MPE</option><option>Empresa</option><option>Outro</option></select></label>
        <label className="form-grid__wide"><span>Como podemos ajudar?</span><textarea name="message" rows={5} required /></label>
      </div>
      <label className="consent"><input type="checkbox" required /> Autorizo o uso dos dados informados exclusivamente para contato e atendimento.</label>
      <button className="button button--primary" type="submit">Enviar mensagem <Icon name="arrow" size={18} /></button>
      {sent && <p className="form-success" role="status">Mensagem registrada. Para concluir o contato agora, use também o WhatsApp.</p>}
    </form>
  )
}

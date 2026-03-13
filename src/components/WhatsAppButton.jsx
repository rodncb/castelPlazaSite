import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5524981050217?text=Olá! Gostaria de informações sobre o Castel Plaza Hotel."
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}

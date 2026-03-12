import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  return (
    <section className="contact section" id="contato">
      <div className="container">
        <div className="section-title">
          <h2>Contato</h2>
          <div className="underline"></div>
          <p>Entre em contato conosco</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Fale Conosco</h3>
            <div className="contact-item">
              <FiMapPin className="icon" />
              <div>
                <h4>Endereço</h4>
                <p>Rua Tenente Coronel Adalberto Mendes, 43<br />Centro - Resende/RJ<br />CEP 27511-100</p>
              </div>
            </div>
            <div className="contact-item">
              <FiPhone className="icon" />
              <div>
                <h4>Telefone</h4>
                <a href="tel:+552433546500">(24) 3354-6500</a>
              </div>
            </div>
            <div className="contact-item">
              <FiMail className="icon" />
              <div>
                <h4>E-mail</h4>
                <a href="mailto:reservas@castelplaza.com.br">reservas@castelplaza.com.br</a>
              </div>
            </div>
            <div className="contact-item">
              <FiClock className="icon" />
              <div>
                <h4>Recepção</h4>
                <p>24 horas</p>
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.instagram.com/castelplaza/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/castelplazahotel" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.5!2d-44.4469!3d-22.4685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI4JzA2LjYiUyA0NMKwMjYnNDguOCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000"
              title="Localização do Castel Plaza Hotel"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

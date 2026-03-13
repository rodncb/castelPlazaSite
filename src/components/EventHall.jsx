import { useState, useEffect } from 'react'
import { FiCheck } from 'react-icons/fi'

import img1 from '../media/salaodefestas/1 (1).png'
import img2 from '../media/salaodefestas/2.png'
import img3 from '../media/salaodefestas/3 (1).png'
import img4 from '../media/salaodefestas/4.png'
import img5 from '../media/salaodefestas/5 (1).png'
import img6 from '../media/salaodefestas/6.png'
import img7 from '../media/salaodefestas/7 (1).png'
import img7b from '../media/salaodefestas/7.png'
import img8 from '../media/salaodefestas/8 (1).png'
import img9 from '../media/salaodefestas/9-1.png'
import img10 from '../media/salaodefestas/10 (1).png'

const images = [img1, img2, img3, img4, img5, img6, img7, img7b, img8, img9, img10]

const features = [
  'Capacidade para até 250 pessoas',
  'Sistema de som profissional',
  'Iluminação decorativa',
  'Espaço para DJ e banda',
  'Cozinha de apoio',
  'Estacionamento amplo',
  'Equipe de apoio dedicada',
  'Decoração personalizada',
]

export default function EventHall() {
  const [current, setCurrent] = useState(0)
  const [popup, setPopup] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = (e) => {
    e.stopPropagation()
    setCurrent((c) => (c - 1 + images.length) % images.length)
  }
  const next = (e) => {
    e.stopPropagation()
    setCurrent((c) => (c + 1) % images.length)
  }

  return (
    <section className="event-hall section" id="salao">
      <div className="container">
        <div className="section-title">
          <h2>Salão de Festas</h2>
          <div className="underline"></div>
          <p>O espaço perfeito para seus eventos e celebrações</p>
        </div>
        <div className="event-hall-content">
          <div className="event-hall-text">
            <p>
              Nosso salão de festas é o cenário ideal para casamentos, formaturas,
              confraternizações e eventos corporativos. Com um espaço amplo e
              elegante, oferecemos toda a infraestrutura necessária para tornar
              seu evento inesquecível.
            </p>
            <p>
              Contamos com uma equipe especializada para auxiliar no planejamento
              e execução do seu evento, garantindo que cada detalhe seja perfeito.
            </p>
            <ul className="event-hall-features">
              {features.map(f => (
                <li key={f}>
                  <FiCheck className="icon" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="mailto:reservas@castelplaza.com.br?subject=Orçamento - Salão de Festas" className="btn btn-primary">Solicitar Orçamento</a>
          </div>
          <div className="event-hall-image">
            <div className="event-carousel" onClick={() => setPopup(true)}>
              <img src={images[current]} alt="Salão de Festas do Castel Plaza Hotel" />
              <button className="room-carousel-btn left" onClick={prev} aria-label="Anterior">&#8249;</button>
              <button className="room-carousel-btn right" onClick={next} aria-label="Próximo">&#8250;</button>
              <div className="room-carousel-dots">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`room-carousel-dot ${i === current ? 'active' : ''}`}
                    onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {popup && (
        <div className="room-popup-overlay" onClick={() => setPopup(false)}>
          <div className="room-popup" onClick={(e) => e.stopPropagation()}>
            <button className="room-popup-close" onClick={() => setPopup(false)}>&times;</button>
            <img src={images[current]} alt="Salão de Festas" />
            <button className="room-popup-btn left" onClick={prev} aria-label="Anterior">&#8249;</button>
            <button className="room-popup-btn right" onClick={next} aria-label="Próximo">&#8250;</button>
            <div className="room-popup-counter">{current + 1} / {images.length}</div>
          </div>
        </div>
      )}
    </section>
  )
}

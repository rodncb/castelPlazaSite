import { useState, useEffect } from 'react'

import conv1 from '../media/centroConvencoes/fotocentro-c1.jpg'
import conv2 from '../media/centroConvencoes/fotocentro-c2.jpg'
import conv3 from '../media/centroConvencoes/fotocentro-c3.jpg'
import conv4 from '../media/centroConvencoes/fotocentro-c4.jpg'
import conv5 from '../media/centroConvencoes/fotocentro-c5.jpg'

import reuniao1 from '../media/salaRenioes/9-Sala-de-Reuniao-1-1-scaled.jpg'
import reuniao2 from '../media/salaRenioes/9-Sala-de-Reuniao-2-scaled.jpg'
import reuniao3 from '../media/salaRenioes/9-Sala-de-Reuniao-3-scaled.jpg'

const convImages = [conv1, conv2, conv3, conv4, conv5]
const reuniaoImages = [reuniao1, reuniao2, reuniao3]

function SpaceCarousel({ images, title }) {
  const [current, setCurrent] = useState(0)
  const [popup, setPopup] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  const prev = (e) => {
    e.stopPropagation()
    setCurrent((c) => (c - 1 + images.length) % images.length)
  }
  const next = (e) => {
    e.stopPropagation()
    setCurrent((c) => (c + 1) % images.length)
  }

  return (
    <>
      <div className="space-carousel" onClick={() => setPopup(true)}>
        <img src={images[current]} alt={title} />
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

      {popup && (
        <div className="room-popup-overlay" onClick={() => setPopup(false)}>
          <div className="room-popup" onClick={(e) => e.stopPropagation()}>
            <button className="room-popup-close" onClick={() => setPopup(false)}>&times;</button>
            <img src={images[current]} alt={title} />
            <button className="room-popup-btn left" onClick={prev} aria-label="Anterior">&#8249;</button>
            <button className="room-popup-btn right" onClick={next} aria-label="Próximo">&#8250;</button>
            <div className="room-popup-counter">{current + 1} / {images.length}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default function MeetingSpaces() {
  return (
    <section className="meeting-spaces section" id="espacos">
      <div className="container">
        <div className="section-title">
          <h2>Espaços para Eventos</h2>
          <div className="underline"></div>
          <p>Infraestrutura completa para convenções e reuniões</p>
        </div>
        <div className="meeting-spaces-grid">
          <div className="meeting-space-card">
            <SpaceCarousel images={convImages} title="Centro de Convenções" />
            <div className="meeting-space-info">
              <h3>Centro de Convenções</h3>
              <p>
                Seu evento terá à disposição um andar exclusivo, estacionamento, sala de apoio
                e área espaçosa para coffee-break. No auditório, com capacidade para até 100 pessoas,
                o ambiente é climatizado e a infraestrutura é composta de data show, telão 3×3,
                flip-chart, computador, copiadora, microfones (com e sem fio), púlpito, palco,
                poltronas confortáveis com apoio para escrita e som ambiente.
              </p>
              <a href="mailto:reservas@castelplaza.com.br?subject=Orçamento - Centro de Convenções" className="btn btn-primary" style={{ marginTop: 'auto', display: 'inline-block', alignSelf: 'flex-start', paddingTop: '15px' }}>
                Solicitar Orçamento
              </a>
            </div>
          </div>
          <div className="meeting-space-card">
            <SpaceCarousel images={reuniaoImages} title="Sala de Reuniões" />
            <div className="meeting-space-info">
              <h3>Sala de Reuniões</h3>
              <p>
                Em ambiente climatizado, oferecemos todas as facilidades necessárias para a
                realização de reuniões. Capacidade para 40 pessoas.
              </p>
              <a href="mailto:reservas@castelplaza.com.br?subject=Orçamento - Sala de Reuniões" className="btn btn-primary" style={{ marginTop: 'auto', display: 'inline-block', alignSelf: 'flex-start', paddingTop: '15px' }}>
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import { FiMapPin } from 'react-icons/fi'

import imgAman from '../media/regiao/Aman.jpeg'
import imgCafe from '../media/regiao/Cafe.jpeg'
import imgMaua from '../media/regiao/Maua.jpeg'
import imgPenedo from '../media/regiao/Penedo.jpeg'
import imgItatiaia from '../media/regiao/paque-itatiaia.jpeg'

const images = [imgItatiaia, imgMaua, imgPenedo, imgAman, imgCafe]

const attractions = [
  'Parque Nacional de Itatiaia',
  'Visconde de Mauá',
  'Penedo',
  'Serrinha do Alambari',
  'Academia Militar das Agulhas Negras (AMAN)',
  'Cachoeiras da região',
]

export default function Region() {
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
    <section className="region section" id="regiao">
      <div className="container">
        <div className="section-title">
          <h2>Conheça a Região</h2>
          <div className="underline"></div>
          <p>Resende e seus arredores têm muito a oferecer</p>
        </div>
        <div className="region-grid">
          <div className="region-text">
            <h3>Resende - Rio de Janeiro</h3>
            <p>
              Localizada no sul do estado do Rio de Janeiro, Resende é uma cidade
              cercada pela Serra da Mantiqueira, com paisagens deslumbrantes e
              uma rica oferta de turismo ecológico e cultural.
            </p>
            <p>
              A cidade é ponto de partida para destinos famosos como o Parque
              Nacional de Itatiaia, Visconde de Mauá e Penedo, além de abrigar
              a tradicional Academia Militar das Agulhas Negras.
            </p>
            <div className="region-attractions">
              <h4>Principais Atrações</h4>
              <ul>
                {attractions.map(a => (
                  <li key={a}>
                    <FiMapPin className="icon" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="region-image">
            <div className="region-carousel" onClick={() => setPopup(true)}>
              <img src={images[current]} alt="Paisagem da região de Resende" />
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
            <img src={images[current]} alt="Região de Resende" />
            <button className="room-popup-btn left" onClick={prev} aria-label="Anterior">&#8249;</button>
            <button className="room-popup-btn right" onClick={next} aria-label="Próximo">&#8250;</button>
            <div className="room-popup-counter">{current + 1} / {images.length}</div>
          </div>
        </div>
      )}
    </section>
  )
}

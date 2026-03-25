import { useState } from 'react'
import sauna1 from '../media/Sauna/Sauna1.jpeg'
import sauna2 from '../media/Sauna/Sauna2.jpeg'
import sauna3 from '../media/Sauna/Sauna3.jpeg'

const images = [sauna1, sauna2, sauna3]
const captions = ['Entrada da Sauna', 'Interior', 'Bancos em Madeira Nobre']

export default function Sauna() {
  const [popup, setPopup] = useState(null)

  const prev = (e) => {
    e.stopPropagation()
    setPopup((c) => (c - 1 + images.length) % images.length)
  }
  const next = (e) => {
    e.stopPropagation()
    setPopup((c) => (c + 1) % images.length)
  }

  return (
    <section className="sauna section" id="sauna">
      <div className="container">
        <div className="section-title">
          <h2>Sauna</h2>
          <div className="underline"></div>
          <p>Conheça nossa sauna e renove suas energias durante sua estadia.</p>
        </div>
        <div className="sauna-gallery">
          {images.map((img, i) => (
            <div className="sauna-gallery-item" key={i} onClick={() => setPopup(i)}>
              <img src={img} alt={captions[i]} />
            </div>
          ))}
        </div>
      </div>

      {popup !== null && (
        <div className="room-popup-overlay" onClick={() => setPopup(null)}>
          <div className="room-popup" onClick={(e) => e.stopPropagation()}>
            <button className="room-popup-close" onClick={() => setPopup(null)}>&times;</button>
            <img src={images[popup]} alt={captions[popup]} />
            <button className="room-popup-btn left" onClick={prev} aria-label="Anterior">&#8249;</button>
            <button className="room-popup-btn right" onClick={next} aria-label="Próximo">&#8250;</button>
            <div className="room-popup-counter">{popup + 1} / {images.length}</div>
          </div>
        </div>
      )}
    </section>
  )
}

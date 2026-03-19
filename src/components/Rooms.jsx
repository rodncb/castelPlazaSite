import { useState, useEffect } from 'react'

import deluxe1 from '../media/Quartos/Apartamento Deluxe/267342245-2.jpg'
import deluxe2 from '../media/Quartos/Apartamento Deluxe/267342250-2.jpg'
import deluxe3 from '../media/Quartos/Apartamento Deluxe/267342251-2.jpg'
import deluxe4 from '../media/Quartos/Apartamento Deluxe/267399218-3-1.jpg'
import deluxe5 from '../media/Quartos/Apartamento Deluxe/267399268-2.jpg'

import conj1 from '../media/Quartos/Apartamento Conjugado/267328037.jpg'
import conj2 from '../media/Quartos/Apartamento Conjugado/267684797.jpg'
import conj3 from '../media/Quartos/Apartamento Conjugado/267684816.jpg'
import conj4 from '../media/Quartos/Apartamento Conjugado/267685712.jpg'
import conj5 from '../media/Quartos/Apartamento Conjugado/267687406.jpg'

import sepCama1 from '../media/Quartos/Apartamento Standard Single ou Duplo – Camas Separadas/267810577-3.jpg'
import sepCama2 from '../media/Quartos/Apartamento Standard Single ou Duplo – Camas Separadas/267811159-3.jpg'
import sepCama3 from '../media/Quartos/Apartamento Standard Single ou Duplo – Camas Separadas/267811219-3.jpg'
import sepCama4 from '../media/Quartos/Apartamento Standard Single ou Duplo – Camas Separadas/267811252-3 (1).jpg'
import sepCama5 from '../media/Quartos/Apartamento Standard Single ou Duplo – Camas Separadas/267811252-3.jpg'

import casal1 from '../media/Quartos/Apartamento Standard Single ou Duplo – Cama Casal/267327020-2.jpg'
import casal2 from '../media/Quartos/Apartamento Standard Single ou Duplo – Cama Casal/267327684-2.jpg'
import casal3 from '../media/Quartos/Apartamento Standard Single ou Duplo – Cama Casal/267684482-2.jpg'
import casal4 from '../media/Quartos/Apartamento Standard Single ou Duplo – Cama Casal/267684485-2.jpg'
import casal5 from '../media/Quartos/Apartamento Standard Single ou Duplo – Cama Casal/267684486-2.jpg'

const rooms = [
  {
    name: 'Single',
    images: [casal1, casal3, casal4, casal5],
    price: 'Consulte',
  },
  {
    name: 'Duplo',
    images: [sepCama1, sepCama2, sepCama3, sepCama4, sepCama5],
    price: 'Consulte',
  },
  {
    name: 'Triplo',
    images: [conj1, conj2, conj3, conj4, conj5],
    price: 'Consulte',
  },
  {
    name: 'Quádruplo',
    images: [deluxe1, deluxe2, deluxe3, deluxe4, deluxe5],
    price: 'Consulte',
  },
]

function RoomCarousel({ images, name }) {
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
      <div className="room-carousel" onClick={() => setPopup(true)}>
        <img src={images[current]} alt={name} />
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
            <img src={images[current]} alt={name} />
            <button className="room-popup-btn left" onClick={prev} aria-label="Anterior">&#8249;</button>
            <button className="room-popup-btn right" onClick={next} aria-label="Próximo">&#8250;</button>
            <div className="room-popup-counter">{current + 1} / {images.length}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default function Rooms() {
  return (
    <section className="rooms section" id="acomodacoes">
      <div className="container">
        <div className="section-title">
          <h2>Acomodações</h2>
          <div className="underline"></div>
          <p>Escolha o quarto ideal para a sua estadia</p>
        </div>
        <div className="rooms-grid">
          {rooms.map((room) => (
            <div className="room-card" key={room.name}>
              <RoomCarousel images={room.images} name={room.name} />
              <div className="room-info">
                <h3>{room.name}</h3>
                <div className="room-price">
                  <span className="price">
                    {room.price} <small>/ diária</small>
                  </span>
                  <a
                    href="#reserva"
                    className="btn btn-primary"
                    style={{ padding: '10px 20px', fontSize: '0.85rem' }}
                  >
                    Reservar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

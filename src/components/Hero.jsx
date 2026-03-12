import { useState, useEffect } from 'react'
import CastelHome from '../media/CastelHome.jpg'
import CastelHomeHorizontal from '../media/CastelHomeHorizontal.png'

const images = [CastelHome, CastelHomeHorizontal]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero" id="inicio">
      {images.map((img, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Castel <span>Plaza</span> Hotel</h1>
        <p className="tagline">Conforto e elegância no coração de Resende</p>
        <p className="location">Resende - Rio de Janeiro</p>
        <div className="hero-buttons">
          <a href="#reserva" className="btn btn-primary">Reserve Agora</a>
          <a href="#acomodacoes" className="btn btn-outline">Conheça Nossos Quartos</a>
        </div>
      </div>
      <div className="hero-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

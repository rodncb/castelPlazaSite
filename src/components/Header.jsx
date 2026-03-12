import { useState, useEffect } from 'react'
import logo from '../media/logoCastelPlaza.png'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#acomodacoes', label: 'Acomodações' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#salao', label: 'Eventos' },
    { href: '#reserva', label: 'Reservar' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#inicio" className="logo">
          <img src={logo} alt="Castel Plaza Hotel" className="logo-img" />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={menuOpen ? 'open' : ''}>
          <ul>
            {links.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

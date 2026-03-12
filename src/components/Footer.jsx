import logo from '../media/logoCastelPlaza.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo">
            <img src={logo} alt="Castel Plaza Hotel" className="footer-logo-img" />
          </div>
          <div className="footer-links">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#acomodacoes">Acomodações</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Castel Plaza Hotel. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

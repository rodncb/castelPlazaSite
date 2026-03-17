import { FiCheck } from 'react-icons/fi'

export default function About() {
  const features = [
    'Localização privilegiada',
    'Café da manhã incluso',
    'Wi-Fi de alta velocidade',
    'Estacionamento gratuito',
    'Sauna',
    'Sala de ginástica',
  ]

  return (
    <section className="about section" id="sobre">
      <div className="container">
        <div className="section-title">
          <h2>Sobre o Hotel</h2>
          <div className="underline"></div>
          <p>Tradição e conforto há mais de duas décadas.</p>
        </div>
        <div className="about-grid">
          <div className="about-image">
            <img
              src={new URL('../media/castelHomeVertical.png', import.meta.url).href}
              alt="Fachada do Castel Plaza Hotel"
            />
          </div>
          <div className="about-text">
            <h3>Por que escolher o Castel Plaza?</h3>
            <p>
              O Castel Plaza Hotel é referência em hospedagem na região de Resende.
              Com uma infraestrutura completa e atendimento personalizado, oferecemos
              a experiência ideal tanto para viajantes a negócios quanto para turistas
              que desejam explorar as belezas da região.
            </p>
            <p>
              Nosso compromisso é proporcionar uma estadia confortável, com quartos
              bem equipados, café da manhã variado e uma equipe sempre pronta para
              atender suas necessidades.
            </p>
            <div className="about-features">
              {features.map(f => (
                <div className="about-feature" key={f}>
                  <FiCheck className="icon" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

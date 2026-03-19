export default function About() {
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
            <h3>Bem-vindo ao seu lugar ideal para negócios e lazer</h3>
            <p>
              O Castel Plaza Hotel é referência em hospedagem. Seja para uma viagem a trabalho ou momentos
              especiais em família, nosso hotel foi pensado para oferecer conforto, praticidade e bem-estar
              em cada detalhe. Com uma estrutura moderna e acolhedora, proporcionamos a combinação perfeita
              entre funcionalidade e tranquilidade.
            </p>
            <p>
              Nossos apartamentos são equipados com ar-condicionado, TV a cabo, Wi-Fi de alta velocidade,
              frigobar e banheiro privativo, garantindo uma estadia confortável e completa. Tudo foi
              cuidadosamente planejado para atender às necessidades de quem busca produtividade e também
              de quem deseja relaxar.
            </p>
            <p>
              Para seus momentos de descanso, aproveite nossa sauna e academia de ginástica, ideais para
              recarregar as energias após um dia intenso de compromissos ou passeios.
            </p>
            <p>
              Comece o dia da melhor forma com um delicioso café da manhã, já incluso na diária, oferecendo
              praticidade e sabor para sua rotina.
            </p>
            <p>
              Além disso, oferecemos estacionamento privativo para maior comodidade e segurança durante
              toda a sua estadia.
            </p>
            <p>
              Aqui, você encontra o equilíbrio perfeito entre trabalho e lazer, com a qualidade e o
              conforto que você merece.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

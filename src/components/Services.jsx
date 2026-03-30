import { FiCoffee, FiMonitor, FiUsers, FiActivity, FiStar, FiDroplet } from 'react-icons/fi'

const services = [
  {
    icon: <FiCoffee />,
    title: 'Café da Manhã',
    description: 'Café da manhã completo com opções variadas de pães, frutas, sucos, frios e pratos quentes.',
  },
  {
    icon: <FiActivity />,
    title: 'Academia',
    description: 'Sala de ginástica equipada para que você mantenha sua rotina de exercícios durante a estadia.',
  },
  {
    icon: <FiDroplet />,
    title: 'Sauna',
    description: 'Sauna relaxante para renovar suas energias e garantir bem-estar durante sua estadia.',
  },
  {
    icon: <FiMonitor />,
    title: 'Centro de Convenções',
    description: 'Espaço moderno para eventos corporativos, congressos e convenções com infraestrutura completa.',
  },
  {
    icon: <FiUsers />,
    title: 'Sala de Reuniões',
    description: 'Salas privativas equipadas com projetor, tela e internet de alta velocidade para suas reuniões.',
  },
  {
    icon: <FiStar />,
    title: 'Salão de Festas',
    description: 'Viva os Maiores Sonhos da sua Vida! Espaço para Casamentos, Aniversários e Eventos Corporativos.',
  },
]

export default function Services() {
  return (
    <section className="services section" id="servicos">
      <div className="container">
        <div className="section-title">
          <h2>Nossos Serviços</h2>
          <div className="underline"></div>
          <p>Tudo pensado para o seu conforto e comodidade</p>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

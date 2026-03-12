import { useState } from 'react'
import { FiCheckCircle } from 'react-icons/fi'

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    nome: '', email: '', telefone: '',
    checkin: '', checkout: '',
    acomodacao: '', hospedes: '1', observacoes: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Apenas simula envio para o layout
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="reservation section" id="reserva">
        <div className="container">
          <div className="reservation-wrapper">
            <div className="form-success">
              <FiCheckCircle className="icon" />
              <h3>Pré-reserva enviada com sucesso!</h3>
              <p>Entraremos em contato em breve para confirmar sua reserva.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="reservation section" id="reserva">
      <div className="container">
        <div className="section-title">
          <h2>Faça sua Pré-Reserva</h2>
          <div className="underline"></div>
          <p>Preencha o formulário e entraremos em contato para confirmar</p>
        </div>
        <div className="reservation-wrapper">
          <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome Completo</label>
              <input type="text" id="nome" name="nome" value={form.nome} onChange={handleChange} required placeholder="Seu nome completo" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="seu@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input type="tel" id="telefone" name="telefone" value={form.telefone} onChange={handleChange} required placeholder="(00) 00000-0000" />
            </div>
            <div className="form-group">
              <label htmlFor="hospedes">Nº de Hóspedes</label>
              <select id="hospedes" name="hospedes" value={form.hospedes} onChange={handleChange}>
                {[1, 2, 3, 4, 5, 6].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'hóspede' : 'hóspedes'}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="checkin">Check-in</label>
              <input type="date" id="checkin" name="checkin" value={form.checkin} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="checkout">Check-out</label>
              <input type="date" id="checkout" name="checkout" value={form.checkout} onChange={handleChange} required />
            </div>
            <div className="form-group full-width">
              <label htmlFor="acomodacao">Tipo de Acomodação</label>
              <select id="acomodacao" name="acomodacao" value={form.acomodacao} onChange={handleChange} required>
                <option value="">Selecione...</option>
                <option value="standard">Standard</option>
                <option value="superior">Superior</option>
                <option value="luxo">Luxo</option>
              </select>
            </div>
            <div className="form-group full-width">
              <label htmlFor="observacoes">Observações</label>
              <textarea id="observacoes" name="observacoes" value={form.observacoes} onChange={handleChange} placeholder="Alguma informação adicional? (opcional)" />
            </div>
            <div className="form-submit">
              <button type="submit" className="btn btn-primary">Enviar Pré-Reserva</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

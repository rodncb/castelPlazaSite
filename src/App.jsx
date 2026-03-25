import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Rooms from './components/Rooms'
import Services from './components/Services'
import Sauna from './components/Sauna'
import EventHall from './components/EventHall'
import MeetingSpaces from './components/MeetingSpaces'
import Region from './components/Region'
import ReservationForm from './components/ReservationForm'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Rooms />
      <Services />
      <EventHall />
      <Sauna />
      <MeetingSpaces />
      <Region />
      <ReservationForm />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

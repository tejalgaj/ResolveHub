import './App.css'
import TicketList from './components/TicketList'
import { mockTickets } from './data/tickets'

function App() {

  const totalTickets = mockTickets.length;

  const openTickets = mockTickets.filter(
    (ticket) => ticket.status === 'OPEN'
  ).length;

  const inProgressTickets = mockTickets.filter(
    (ticket) => ticket.status === 'IN_PROGRESS'
  ).length;

  const resolvedTickets = mockTickets.filter(
    (ticket) => ticket.status === 'RESOLVED'
  ).length;

  return (
    <main>
      <h1>ResolveHub</h1>
      <p>Total Tickets: {totalTickets}</p>
      <p>Open Tickets: {openTickets}</p>
      <p>InProgress Tickets: {inProgressTickets}</p>
      <p>Resolved Tickets: {resolvedTickets}</p>
      <section id="center">
        <TicketList tickets={mockTickets} />
      </section>
    </main>
  )
}

export default App

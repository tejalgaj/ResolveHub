import './App.css'
import { useState } from 'react';
import TicketList from './components/TicketList'
import { mockTickets } from './data/tickets'
import type { TicketStatus } from './types/ticket'

type StatusFilter = "ALL" | TicketStatus;

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


  const [selectedStatus, setSelectedStatus] = useState<StatusFilter>("ALL");

  const filteredTickets = (selectedStatus === "ALL") ? mockTickets :
    mockTickets.filter((ticket) => ticket.status === selectedStatus);

  return (
    <main>
      <h1>ResolveHub</h1>
      <p>Total Tickets: {totalTickets}</p>
      <p>Open Tickets: {openTickets}</p>
      <p>InProgress Tickets: {inProgressTickets}</p>
      <p>Resolved Tickets: {resolvedTickets}</p>
      <section id="center">
        <h2>Filter Tickets</h2>
        <button onClick={() => { setSelectedStatus("ALL") }}>All </button>
        <button onClick={() => { setSelectedStatus("OPEN") }}>Open </button>
        <button onClick={() => { setSelectedStatus("IN_PROGRESS") }}>In Progress </button>
        <button onClick={() => { setSelectedStatus("RESOLVED") }}>Resolved </button>
        <p>Selected Status- {selectedStatus}</p>
      </section>
      <TicketList tickets={filteredTickets} />
    </main>
  )
}

export default App

import type { Ticket } from "../types/ticket";


interface TicketListProps {
    tickets: Ticket[];
}

export default function TicketList({ tickets }: TicketListProps) {
    return (
        <section>
            <h2>Support Tickets</h2>
            {tickets.length === 0 ? (
                <p>No support tickets available.</p>
            ) : (
                <table>
                    <caption>Support ticket list</caption>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Status</th>
                            <th scope="col">Priority</th>
                            <th scope="col">Assigned To</th>
                            <th scope="col">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket) => (
                            <tr key={ticket.id}>
                                <td>{ticket.id}</td>
                                <td>{ticket.title}</td>
                                <td>{ticket.status}</td>
                                <td>{ticket.priority}</td>
                                <td>{ticket.assignedTo ?? "Unassigned"}</td>
                                <td>{ticket.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </section>
    );
}

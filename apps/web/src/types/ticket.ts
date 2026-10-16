export type TicketStatus = "OPEN" | "IN_PROGRESS" | "RESOLVED";

export type TicketPriority = "LOW" | "MEDIUM" | "HIGH";

export interface Ticket{
    id: string;
    title: string;
    status: TicketStatus;
    priority: TicketPriority;
    assignedTo: string | null;
    createdAt: string;
}
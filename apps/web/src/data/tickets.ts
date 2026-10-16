import type { Ticket } from "../types/ticket";

export const mockTickets: Ticket[] = [
    {
        "id": "T-001",
        "title": "Login issue",
        "status": "OPEN",
        "priority": "HIGH",
        "assignedTo": "Priya Nair",
        "createdAt": "2026-10-12T08:42:17Z"
    },
    {
        "id": "T-002",
        "title": "Payment failed",
        "status": "OPEN",
        "priority": "HIGH",
        "assignedTo": null,
        "createdAt": "2026-10-14T16:05:53Z"
    },
    {
        "id": "T-003",
        "title": "Dashboard slow",
        "status": "IN_PROGRESS",
        "priority": "MEDIUM",
        "assignedTo": "Marcus Chen",
        "createdAt": "2026-10-08T13:27:09Z"
    },
    {
        "id": "T-004",
        "title": "Email notification issue",
        "status": "RESOLVED",
        "priority": "LOW",
        "assignedTo": "Elena Rossi",
        "createdAt": "2026-10-02T10:14:36Z"
    }
];
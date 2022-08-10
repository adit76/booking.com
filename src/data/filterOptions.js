import { v4 as uuidv4 } from 'uuid';

const filterOptions =  {
    // Reservation Page
    reservationType: [
        {
            id: 0,
            value: "--",
            name: "--"
        },
        {
            id: uuidv4(),
            value: "reservation",
            name: "Reservation"
        },
        {
            id: uuidv4(),
            value: "checkIn",
            name: "Check-In"
        },
        {
            id: uuidv4(),
            value: "checkOut",
            name: "Check-Out"
        },
        {
            id: uuidv4(),
            value: "invoice",
            name: "Invoice"
        },
        {
            id: uuidv4(),
            value: "stay",
            name: "Stay"
        },
    ],
    dateFrom: new Date(),
    dateTo: new Date(),
    moreFilter: {
        reservationStatus: [
                {
                    id: uuidv4(),
                    value: "ok",
                    name: "Ok",
                },
                {
                    id: uuidv4(),
                    value: "cancelled",
                    name: "Cancelled",
                }, 
                {
                    id: uuidv4(),
                    value: "noShow",
                    name: "No show",
                },
                {
                    id: uuidv4(),
                    value: "corporateCard",
                    name: "Corporate Card",
                }
        ],
        guestCommunication:  [
                {
                    id: uuidv4(),
                    value: "pendingRequest",
                    name: "Pending guest request",
                },
                {
                    id: uuidv4(),
                    value: "invoiceRequired",
                    name: "Invoice required",
                }
        ],
        invalidCreditCard: [
                {
                    id: uuidv4(),
                    value: "updated",
                    name: "Updated",
                },
                {
                    id: uuidv4(),
                    value: "pending",
                    name: "Pending",
                }
        ] 
    },

    // Calendar Page
    roomType: [
        {
            id: 0,
            value: "All Rooms",
            name: "All Rooms"
        },
        {
            id: uuidv4(),
            value: "db02",
            name: "Big deluxe Double Bed"
        },
        {
            id: uuidv4(),
            value: "sb01",
            name: "Super Luxury Single Bed"
        }
    ],
    view: [
        {
            id: 1,
            value: "list",
            name: "List View"
        },
        {
            id: 2,
            value: "grid",
            name: "Grid View"
        },
        {
            id: 3,
            value: "table",
            name: "Table View"
        }
    ],
    calendarOptions: [
        {
            id: 1,
            value: "pricing",
            name: "Pricing Per Guests"
        },
        {
            id: 2,
            value: "restrictions",
            name: "Restrictions"
        }
    ]

}

export default filterOptions;
import { v4 as uuidv4 } from 'uuid';

const filterOptions =  {
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
    }
}

export default filterOptions;
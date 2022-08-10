import { v4 as uuidv4 } from 'uuid';

const guestsList = [
    {
        guestName: "S Kraswo",
        noOfGuests: 2,
        checkIn: "Mon Aug 01 2022 03:21:20 GMT+0545 (Nepal Time)",
        checkout: "Thu Aug 11 2022 03:21:20 GMT+0545 (Nepal Time)",
        room: "Single Room",
        bookedOn: "Thu Aug 11 2022 03:21:20 GMT+0545 (Nepal Time)",
        status: "Ok",
        price: 135,
        commission: 16.20,
        bookingNumber: uuidv4()
    },
    {
        guestName: "Chester B.",
        noOfGuests: 2,
        checkIn: "Fri Aug 05 2022 03:21:20 GMT+0545 (Nepal Time)",
        checkout: "Sun Aug 07 2022 03:21:20 GMT+0545 (Nepal Time)",
        room: "Single Room",
        bookedOn: "Sun Aug 07 2022 03:21:20 GMT+0545 (Nepal Time)",
        status: "Ok",
        price: 135,
        commission: 16.20,
        bookingNumber: uuidv4()
    },
    {
        guestName: "Chris C.",
        noOfGuests: 2,
        checkIn: "Wed Jul 13 2022 01:57:31 GMT+0545 (Nepal Time)",
        checkout: "Sat Jul 16 2022 01:57:31 GMT+0545 (Nepal Time)",
        room: "Single Room",
        bookedOn: "Wed Jul 13 2022 01:57:31 GMT+0545 (Nepal Time)",
        status: "Ok",
        price: 135,
        commission: 16.20,
        bookingNumber: uuidv4()
    },
    {
        guestName: "Kurt C.",
        noOfGuests: 2,
        checkIn: "Wed Jul 13 2022 01:57:31 GMT+0545 (Nepal Time)",
        checkout: "Sat Aug 20 2022 03:21:20 GMT+0545 (Nepal Time)",
        room: "Single Room",
        bookedOn: "Sat Aug 20 2022 03:21:20 GMT+0545 (Nepal Time)",
        status: "Ok",
        price: 135,
        commission: 16.20,
        bookingNumber: uuidv4()
    },
]

export default guestsList;
import React from 'react';


const Table = ({ guestsList }) => {
    const formatDate = (string) => {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

    return (
            <table>
                <thead>
                    <tr>
                        <th>Guest Name</th>
                        <th>Check-In</th>
                        <th>Check-Out</th>
                        <th>Rooms</th>
                        <th>Booked On</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Commission</th>
                        <th>Booking Number</th>
                    </tr>
                </thead>
                <tbody>
                    {guestsList.map((guest) => (
                        <tr key={guest.bookingNumber}>
                            <td><a href="#">{guest.guestName}</a> <br /> <small>{guest.noOfGuests} guests</small></td>
                            <td>{formatDate(guest.checkIn)}</td>
                            <td>{formatDate(guest.checkout)}</td>
                            <td>{guest.room}</td>
                            <td>{formatDate(guest.bookedOn)}</td>
                            <td>{guest.status}</td>
                            <td>US${guest.price}</td>
                            <td>US${guest.commission}</td>
                            <td><a href="#">{guest.bookingNumber}</a></td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={7}></td>
                        <td>Commission: US$16.20</td>
                        <th>Total price: US$135</th>
                    </tr>
                </tbody>
            </table>
    );
}

export default Table;

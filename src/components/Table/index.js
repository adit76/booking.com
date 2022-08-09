import React from 'react';
// import './index.scss';


const Table = ({ guestsList }) => {
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
                            <td>{guest.checkIn}</td>
                            <td>{guest.checkout}</td>
                            <td>{guest.room}</td>
                            <td>{guest.bookedOn}</td>
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

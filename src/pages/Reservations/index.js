import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './index.scss';

import { FiChevronDown } from "react-icons/fi";

import PageHeader from '../../components/PageHeader';
import InputSelect from '../../components/InputSelect';
import InputCheckBox from '../../components/InputCheckBox';
import InputSearch from '../../components/InputSearch';
import Table from '../../components/Table';

const Reservations = () => {
    const [filter, setFilter] = useState({
        reservationType: [
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
                value: "checkOut",
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
    })

    const [guestsList] = useState([
        {
            guestName: "S Kraswo",
            noOfGuests: 2,
            checkIn: "13 Jul 2022",
            checkout: "16 Jul 2022",
            room: "Single Room",
            bookedOn: "10 Jul 2022",
            status: "Ok",
            price: 135,
            commission: 16.20,
            bookingNumber: uuidv4()
        },
        {
            guestName: "S Kraswo",
            noOfGuests: 2,
            checkIn: "13 Jul 2022",
            checkout: "16 Jul 2022",
            room: "Single Room",
            bookedOn: "10 Jul 2022",
            status: "Ok",
            price: 135,
            commission: 16.20,
            bookingNumber: uuidv4()
        },
    ])

    console.log(filter.dateFrom)

  return (
    <div className='Reservations CustomContainer'>
        {/* Header Section */}
        <PageHeader title="Reservations" headerAttributttes={true} />

        {/* Filter Section */}
        <section className='Filter'>
            <div className="FormGroup">
                <InputSelect id="dateOf" label="Date of" options={filter.reservationType} />
            </div>
            <div className="FormGroup">
                <label htmlFor="dateFrom">From</label>
                <DatePicker id="dateFrom" selected={filter.dateFrom} onChange={(date) => setFilter({...filter, dateFrom: date})} />
            </div>
            <div className="FormGroup">
                <label htmlFor="dateTo">Until</label>
                <DatePicker id="dateTo" selected={filter.dateTo} onChange={(date) => setFilter({...filter, dateTo: date})} />
            </div>

            <div className="FormGroup">
                <button className='Btn'>More Filters <FiChevronDown /></button>
            </div>
            <div className="FormGroup">
                <button className='Btn BtnBlue'>Show</button>
            </div>
        </section>

        {/* More Filter Section */}
        <section className="MoreFilters">
            <div className="FormGroup">
                <InputCheckBox name="reservationStatus" title="Reservation Status" options={filter.moreFilter.reservationStatus} />
            </div>
            <div className="FormGroup">
                <InputCheckBox name="guestCommunication" title="Guest Communication" options={filter.moreFilter.guestCommunication} />
            </div>
            <div className="FormGroup">
                <InputCheckBox name="invalidCreditCard" title="Invalid Credit Card" options={filter.moreFilter.invalidCreditCard} />
            </div>

            <div className="FormGroup">
                <p>Search</p>
                <InputSearch placeholder="Keywords (Optional)" />
            </div>
        </section>

        {/* Reservation User List Section */}
        <section className="UserList">
            <Table guestsList={guestsList} />
        </section>
        

    </div>
  );
}

export default Reservations;

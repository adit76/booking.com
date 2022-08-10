import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import filterOptions from '../../data/filterOptions';
import guestsList from '../../data/guestsLists';

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
        dateOf: '--',
        dateFrom: new Date(),
        dateTo: new Date(),
    })

    const [moreFilterStatus, setMoreFilterStatus] = useState(false);

    const moreFilterDropdown = () => {
        setMoreFilterStatus(!moreFilterStatus)
    }

    const handleChange = (e) => {
        setFilter({...filter, dateOf: e.target.value })
    }

  return (
    <div className='Reservations CustomContainer'>
        {/* Header Section */}
        <PageHeader title="Reservations" headerAttributttes={true} />

        {/* Filter Section */}
        <section className='Filter'>
            <div className="FormGroup">
                <InputSelect id="dateOf" label="Date of" options={filterOptions.reservationType} value={filter.dateOf} handleChange={handleChange} />
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
                <button className="Btn" onClick={moreFilterDropdown}>More Filters <FiChevronDown style={{transform: moreFilterStatus ? 'rotate(180deg)' : 'none', transition: "0.3s ease"}} /></button>
            </div>
            <div className="FormGroup">
                <button className='Btn BtnBlue'>Show</button>
            </div>
        </section>
        
        {/* More Filters Section */}
        <section className="MoreFilters" style={{maxHeight: moreFilterStatus ? '500px' : '0'}}>
            <div className='FilterWrapper'>
                <div className="FormGroup">
                    <InputCheckBox name="reservationStatus" title="Reservation Status" options={filterOptions.moreFilter.reservationStatus} />
                </div>
                <div className="FormGroup">
                    <InputCheckBox name="guestCommunication" title="Guest Communication" options={filterOptions.moreFilter.guestCommunication} />
                </div>
                <div className="FormGroup">
                    <InputCheckBox name="invalidCreditCard" title="Invalid Credit Card" options={filterOptions.moreFilter.invalidCreditCard} />
                </div>

                <div className="FormGroup">
                    <p>Search</p>
                    <InputSearch placeholder="Keywords (Optional)" />
                </div>
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

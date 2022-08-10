import React, { useState } from 'react';
import filterOptions from '../../data/filterOptions';
import "./index.scss";

// Components
import PageHeader from '../../components/PageHeader';
import InputSelect from '../../components/InputSelect';
import InputCheckBox from '../../components/InputCheckBox';


const Rates = () => {
    const [filter, setFilter] = useState({
        rooms: 'All rooms',
        view: 'List View',
        dateRange: ''
    })

    // Handle Change Function for Input Fields
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFilter((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <div className='RatesAvailablity CustomContainer'>
            {/* Header Section */}
            <PageHeader title="Calendar" headerAttributttes={false} />

            {/* Filter Section */}
            <section className='Filter'>
                <div className='FilterTop'>
                    <div className="FormGroup">
                        <InputSelect id="rooms"  options={filterOptions.roomType} value={filter.rooms} handleChange={handleChange} />
                    </div>
                    <div className="FormGroup">
                        <InputSelect id="view"  options={filterOptions.view} value={filter.view} handleChange={handleChange} />
                    </div>
                </div>
                <div className="FilterBottom">
                    <div className="FormGroup">
                        <InputCheckBox name="calendarOptions" options={filterOptions.calendarOptions} />
                    </div>
                </div>
            </section>
        </div> 
    );
}

export default Rates;

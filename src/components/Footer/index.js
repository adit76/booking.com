import React, {useState} from 'react';
import './index.scss';

import InputSelect from '../InputSelect'


const Footer = () => {
    const [langOptions] = useState([
        {
            id: "eng",
            value: "eng",
            name: "English"
        },
        {
            id: "nep",
            value: "nep",
            name: "Nepali"
        },
    ])

  return (
    <footer className='Header Footer'>
        <div className='CustomContainer'>
            <div className='SubHeader SubHeaderTop'>
                <div>
                    <div className='NavItem'>
                        <small>About Us</small>
                    </div>
                    <div className='NavItem'>
                        <small>Privacy & Cookies</small>
                    </div>
                    <div className='NavItem'>
                        <small>FAQs</small>
                    </div>
                </div>
                <button className='Btn BtnBlue'>Share your feedback</button>
            </div>
            <div className='SubHeader SubHeaderTop'>
                <small>@Copyright Booking.com 2022</small>
                
                <div className="FormGroup">
                    <InputSelect id="language" options={langOptions} />
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;

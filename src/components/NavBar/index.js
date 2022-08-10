import React from 'react';
import './index.scss';
import { NavLink  } from "react-router-dom";


import InputSearch from '../InputSearch';

import { IoHomeOutline, IoRocketOutline, IoDocumentOutline } from "react-icons/io5";
import { BsPen, BsBarChartLine } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineUnorderedList, AiOutlineTag, AiOutlineMail, AiOutlineHeart, AiOutlineQuestionCircle } from "react-icons/ai";


const NavBar = () => {

  return (
    <header className='Header'>
        <div className='CustomContainer'>
            <div className='SubHeader SubHeaderTop'>
                <div>
                    <h2 className='Logo'>Booking.com</h2>
                    <hr />
                    <h4 className=''>Argakhanchi Hotel - 8706497</h4>
                </div>
                <div>
                    <InputSearch variantBlue={true} showIcon={true} placeholder="Search for reservations" />
                    <div className='User'>
                        <img className='UserIcon UserImage' src="https://picsum.photos/200/300?grayscale" alt="" />
                        <small>Argakha...</small>
                    </div>
                    <div className='User'>
                        <AiOutlineQuestionCircle className='UserIcon' />
                        <small>Help</small>
                    </div>
                    <div className='User'>
                        <BiUserCircle className='UserIcon' />
                        <small>Account</small>
                    </div>
                    </div>
            </div>
            <div className='SubHeader SubHeaderBottom'>
                <div className='NavItem'>
                    <IoHomeOutline className='NavIcon' />
                    <small>Home</small>
                </div>
                <NavLink  
                    to="/rates" 
                    className={({ isActive }) =>
                    isActive ? 'Active' : undefined }
                >
                    <div className='NavItem'>
                        <AiOutlineCalendar className='NavIcon' />
                        <small>Rate & Availability</small>
                    </div>
                </NavLink >
                <div className='NavItem'>
                    <AiOutlineTag className='NavIcon' />
                    <small>Promotions</small>
                </div>
                <NavLink  
                    to="/"
                    className={({ isActive }) =>
                    isActive ? 'Active' : undefined }
                >
                    <div className='NavItem'>
                        <AiOutlineUnorderedList className='NavIcon' />
                        <small>Reservations</small>
                    </div>
                </NavLink >
                <div className='NavItem'>
                    <BsPen className='NavIcon' />
                    <small>Property</small>
                </div>
                <div className='NavItem'>
                    <IoRocketOutline className='NavIcon' />
                    <small>Opportunities</small>
                </div>
                <div className='NavItem'>
                    <AiOutlineMail className='NavIcon' />
                    <small>Inbox</small>
                </div>
                <div className='NavItem'>
                    <AiOutlineHeart className='NavIcon' />
                    <small>Guest Reviews</small>
                </div>
                <div className='NavItem'>
                    <IoDocumentOutline className='NavIcon' />
                    <small>Finance</small>
                </div>
                <div className='NavItem'>
                    <BsBarChartLine className='NavIcon' />
                    <small>Analytics</small>
                </div>
                

            </div>
        </div>
    </header>
  );
}

export default NavBar;

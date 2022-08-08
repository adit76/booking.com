import React from 'react';
import './index.scss';

import { AiOutlineSearch } from 'react-icons/ai';



const SeachInput = (props) => {
  return (
    <div className='InputContainer'>
        <input type="text" placeholder={props.placeholder} />
        <AiOutlineSearch className='Icon' />
    </div>
  );
}

export default SeachInput;

import React from 'react';
import './index.scss';

import { AiOutlineSearch } from 'react-icons/ai';

const InputSearch = ({ placeholder, variantBlue, showIcon }) => {
  return (
    <div className={`InputContainer ${variantBlue ? 'InputBlue' : ''}`} >
        <input type="text" placeholder={placeholder} />
        {showIcon ? (
          <AiOutlineSearch className='Icon' />
        ) : (
          null
        )}
        
    </div>
  );
}

export default InputSearch;

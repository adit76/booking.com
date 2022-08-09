import React from 'react';
import './index.scss';

const InputCheckBox = ({ title, options, name }) => {

  return (
    <div className='CheckBox'>  
        <p>{title}</p>
        {options.map((option) => (
            <div className='CheckItem' key={option.id}>
                <input type="checkBox" value={option.value} id={option.value} name={name} /> 
                <label htmlFor={option.value}>{option.name}</label>  
            </div>
        ))}
    </div>
  );
}

export default InputCheckBox;

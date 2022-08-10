import React from 'react';
import './index.scss';

const InputSelect = ({ id, options, label, value, handleChange }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select value={value} name={id} id={id} onChange={handleChange} >
        {options.map((option) => (
          <option key={option.id} value={option.value}>{option.name}</option>
        ))}
      </select>
    </>
  );
}

export default InputSelect;

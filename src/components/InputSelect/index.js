import React from 'react';
import './index.scss';

const InputSelect = ({ id, options, label }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id}>
        {options.map((option) => (
          <option key={option.id} value={option.value}>{option.name}</option>
        ))}
      </select>
    </>
  );
}

export default InputSelect;

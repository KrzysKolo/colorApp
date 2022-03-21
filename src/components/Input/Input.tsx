import React from 'react';
import { InputProps } from '../../models/apiModels';
import './input.scss';

const Input:React.FC<InputProps> = ({labelTitle, placeholder, onChange, value, name, errorInfo, errorMessage}) => {
  return (
    <div className="container-input">
      <div className='container-input__wrapper'>
        <label>{labelTitle} </label>
        <input type="text" placeholder={placeholder} value={value} name={name} onChange={onChange} />
      </div>
      {errorInfo && <div className='error'>{errorMessage}</div>}
    </div>
  )
}
export default Input;
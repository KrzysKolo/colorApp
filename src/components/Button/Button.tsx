import React from 'react';
import { ButtonProps } from '../../models/apiModels';
import './button.scss';

const Button: React.FC<ButtonProps> = ({title, onClick, btnClass, type}) => {
  return (
    <button type={type} className={`btn ${btnClass}`} onClick={onClick}>{title}</button>
  )
}

export default Button;
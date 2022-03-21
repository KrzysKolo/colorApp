import React from 'react';
import { InputRadioProps } from '../../models/apiModels';
import './inputRadio.scss';

const InputRadio: React.FC<InputRadioProps> = ({id, nameInput, label, onChange}) => {
  return (
    <div className='radio'>
      {label}<input type="radio" name={nameInput} id={id} onChange={onChange} />
    </div>
  )
}

export default InputRadio
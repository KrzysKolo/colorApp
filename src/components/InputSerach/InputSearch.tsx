import React from 'react';
import { InputSearchProps } from '../../models/apiModels';
import './inputSearch.scss';

const InputSearch: React.FC<InputSearchProps> = ({value, onChange}) => {

  return (
    <div className='searchInput-wrapper'>
      <input value={value} onChange={onChange} placeholder="Search color..." />
    </div>
  )
}

export default InputSearch;
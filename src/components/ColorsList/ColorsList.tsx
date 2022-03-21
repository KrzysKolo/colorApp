import React, { useEffect, useState } from 'react';

import { useLocalStorage } from '../../utilits/customHooks/useLocalStorage';
import { ColorElement, InputSearch } from '../../components';
import './colorsList.scss';
import { ColorsListProps } from '../../models/apiModels';

const ColorsList: React.FC<ColorsListProps> = () => {

  const [searchColor, setSearchColor] = useState<string>("");
  const [ filteredColor, setFilteredColor] = useState([])
  const [state] = useLocalStorage("colors",[] ) ;

//DATA FILTERING BY COLOR NAME
  useEffect(() => {
     if (searchColor.trim() === "") {
       setFilteredColor(state);
       return;
    } else {
      if (searchColor.trim() !== "") {
          setFilteredColor(
          state.filter((color: { colorName: string; }) => {
            const colors = `${color.colorName}`;
            return colors
              .toLowerCase()
              .includes(searchColor);
          })
        );
      }
    }
  }, [searchColor, state]);

//CHANGING THE CONTENT OF SEARCH INPUT
  const handleChange = (e: React.ChangeEvent<Event & EventTarget & HTMLInputElement>) => {
  setSearchColor(e.target.value.toLocaleLowerCase());
  }

  return (
    <div className='colorsList-wrapper'>
      <InputSearch value={searchColor} onChange={handleChange }/>
      {filteredColor.map((color: { id: number, colorName: string }) => {
        return (<ColorElement key={color.id} color={color} />);
      })}
    </div>
  )
}

export default ColorsList;



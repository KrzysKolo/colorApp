import React, {useEffect, useState} from 'react';
import { ColorSimpleElementProps } from '../../models/apiModels';
import './colorSimpleElement.scss';

const ColorSimpleElement: React.FC<ColorSimpleElementProps> = ({colorMode, colorModeArray, colorName, rgb}) => {

  const [hueR, setHueR] = useState<number | any>([]);
  const [hueG, setHueG] = useState<number | any>([]);
  const [hueB, setHueB] = useState<number | any>([]);

  useEffect(() => {
    createColor(colorModeArray)
  },[])

  function createColor(color: number[] | any) {
    setHueR(color.splice(0, 1));
    setHueG(color.splice(1, 1));
    setHueB(color.splice(-1));
  }
  const r = parseInt(hueR);
  const g = parseInt(hueG);
  const b = parseInt(hueB);

  return (
    <>
      <div className='box-square' data-background="red" style={{backgroundColor: `rgb(${r},${g},${b})`}}></div>
      <div className='color-wrapper__nameColor'>
        {rgb ? <h3>rgb({colorMode})</h3> : <h3>{colorMode}</h3>}
      </div>
      <h2>{colorName}</h2>
    </>
  )
}

export default ColorSimpleElement
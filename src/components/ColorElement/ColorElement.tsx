import React from 'react';
import { ColorElementProps } from '../../models/apiModels';
import { ColorSimpleElement } from './../../components';
import './colorElement.scss';

const ColorElement: React.FC<ColorElementProps> = ({ color }) => {
  return (
    <section>
      <div className='color-wrapper'>
        {color.colorHEX && <ColorSimpleElement colorMode={color.colorHEX} colorName={color.colorName} colorModeArray={color.colorHexToArrayRgb} rgb={false} />}
        {color.colorRGB && <ColorSimpleElement colorMode={color.colorRGB} colorName={color.colorName} colorModeArray={color.colorRgbToArray} rgb={true} />}
      </div>
    </section>
  )
}

export default ColorElement;
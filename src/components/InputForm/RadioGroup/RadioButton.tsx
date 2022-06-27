import './style.scss';
import React from 'react';
import { RadioProps } from '../../../types/radio-group';

function Radio(props: RadioProps) {
  const { item, name } = props;

  return (
    <div className="form-check my-2">
      <input className="form-check-input form-check-input_secondary"
             type="radio"
             id={ item.id.toString() }
             name={ name }
             value={ item.value }
             defaultChecked={ item.checked }
      />

      <label className="form-check-label" htmlFor={ item.id.toString() }>
        { item.label }
      </label>
    </div>
  )
}

export default Radio;

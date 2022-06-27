import './style.scss';
import React from 'react';
import { InputProps } from '../../../types/input';

function Input(props: InputProps) {
  const rightTextId = `${props.id}-right`;

  return (
    <div className="my-2 row">
      <label className="col-form-label col-4" htmlFor={ props.id }>
        { props.label }
      </label>

      <div className="input-group input-group_with-label col-8">
        <input className="form-control form-control_secondary"
               id={ props.id }
               readOnly={ props.readonly ?? false }
               type={ props.type ?? 'text' }
               aria-describedby={ rightTextId }
        />

        <span className="input-group-text" id={ rightTextId }>руб.</span>
      </div>
    </div>
  );
}

export default Input;

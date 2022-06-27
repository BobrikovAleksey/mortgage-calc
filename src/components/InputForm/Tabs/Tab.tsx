import React from 'react';
import { RadioProps } from '../../../types/radio-group';

function Tab(props: RadioProps): React.ReactElement {
  const { item } = props;
  const elId = `${props.name}-${item.id}`;

  return (
    <div>
      <input className="btn-check"
             type="radio"
             id={ elId }
             name={ props.name }
             defaultChecked={ item.checked }
             autoComplete="off"
      />

      <label className="btn btn-outline-secondary" htmlFor={ elId }>
        { item.label }
      </label>
    </div>
  );
}

export default Tab;

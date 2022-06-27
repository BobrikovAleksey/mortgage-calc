import React from 'react';
import { RadioGroupProps } from '../../../types/radio-group';
import Radio from './RadioButton';

function RadioGroup(props: RadioGroupProps) {
  const { label, list, name } = props;

  return (
    <div className="my-2 row">
      <label className="col-sm-4 col-form-label">
        { label }
      </label>

      <div className="col-sm-8">
        {
          list.map((item) => (
            <Radio key={ item.id } name={ name } item={ item } />
          ))
        }
      </div>
    </div>
  );
}

export default RadioGroup;

import './style.scss';
import React from 'react';
import { RadioGroupProps } from '../../../types/radio-group';
import Tab from './Tab';

function Tabs(props: RadioGroupProps): React.ReactElement {
  return (
    <div className="btn-group btn-group_tabs" role="group">
      {
        props.list.map((item) => (
          <Tab key={ item.id } name={ props.name } item={ item } />
        ))
      }
    </div>
  );
}

export default Tabs;

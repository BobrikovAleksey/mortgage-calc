import React from 'react';
import { RadioGroupItem } from '../../types/radio-group';
import Input from './Input';
import RadioGroup from './RadioGroup';
import Tabs from './Tabs';

function InputForm() {
  const calcTypes: Array<RadioGroupItem> = [
    { id: 1, label: 'По стоимости недвижимости', value: 'by-property-value', checked: true },
    { id: 2, label: 'По сумме кредита', value: 'by-loan-amount', checked: false },
  ];

  const paymentTypes: Array<RadioGroupItem> = [
    { id: 1, label: 'Аннуитетные', value: 'annuited', checked: true },
    { id: 2, label: 'Дифференцированные', value: 'differentiated', checked: false },
  ];

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-center">
        <Tabs name="calc-type" list={ calcTypes } />
      </div>

      <div className="card-body px-4">
        <Input id="price" label="Стоимость недвижимости" />

        <Input id="initial-fee" label="Первоначальный взнос" />

        <Input id="credit-amount" label="Сумма кредита" readonly={ true }/>

        <Input id="credit-term" label="Срок кредита"/>

        <Input id="rate" label="Процентная ставка"/>

        <RadioGroup label="Тип ежемесячных платежей" name="payment-types" list={ paymentTypes }/>
      </div>

      <div className="card-footer d-flex justify-content-center">
        <button type="button" className="btn btn-outline-success">Рассчитать</button>
      </div>
    </div>
  );
}

export default InputForm;

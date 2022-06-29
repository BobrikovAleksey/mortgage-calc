import { FC } from 'react';
import InputForm from './InputForm';

const MortgageCalc: FC = () => {
  return (
    <>
      <h1 className="my-4">Ипотечный калькулятор</h1>

      <InputForm />
    </>
  );
}

export default MortgageCalc;

import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { TypeEnum } from '../../../../store/types/mortgageCalc/enums';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import CreditAmount from './CreditAmount';
import CreditTerm from './CreditTerm';
import InitialFee from './InitialFee';
import PaymentType from './PaymentType';
import Price from './Price';
import Rate from './Rate';

const Body: FC = () => {
  const { type } = useTypedSelector((state) => state.mortgageCalc.inputForm);

  return (
    <Card.Body bsPrefix="card-body mx-2">
      { (type === TypeEnum.BY_PROPERTY_VALUE) && <Price /> }

      { (type === TypeEnum.BY_PROPERTY_VALUE) && <InitialFee /> }

      <CreditAmount readOnly={ type === TypeEnum.BY_PROPERTY_VALUE } />

      <CreditTerm />

      <Rate />

      <PaymentType />
    </Card.Body>
  );
};

export default Body;

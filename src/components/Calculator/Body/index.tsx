import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { CalcTypeEnum } from '../../../store/reducers/calculator/types/enums';
import CreditAmount from './CreditAmount';
import CreditTerm from './CreditTerm';
import InitialFee from './InitialFee';
import PaymentType from './PaymentType';
import Price from './Price';
import Rate from './Rate';

const Body: FC = () => {
  const { type } = useTypedSelector((state) => state.calc);

  return (
    <Card.Body bsPrefix="card-body mx-2">
      { (type === CalcTypeEnum.BY_PROPERTY_VALUE) && <Price /> }

      { (type === CalcTypeEnum.BY_PROPERTY_VALUE) && <InitialFee /> }

      <CreditAmount readOnly={ type === CalcTypeEnum.BY_PROPERTY_VALUE } />

      <CreditTerm />

      <Rate />

      <PaymentType />
    </Card.Body>
  );
};

export default Body;

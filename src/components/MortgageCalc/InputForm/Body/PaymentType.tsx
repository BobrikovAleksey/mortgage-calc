import { Col, Form, Row } from 'react-bootstrap';
import { PaymentTypeEnum } from '../../../../store/types/calc/enums';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';

const PaymentType = () => {
  const { paymentType } = useTypedSelector((state) => state.mortgageCalc.inputForm);

  return (
    <Form.Group as={Row} className="my-4" controlId="payment-type">
      <Form.Label column sm="4">
        Тип ежемесячных платежей
      </Form.Label>

      <Col sm="8">
        <Form.Check
          className="my-2"
          type="radio"
          id={ PaymentTypeEnum.ANNUITED }
          name="payment-type"
          label="Аннуитетные"
          defaultChecked={ paymentType === PaymentTypeEnum.ANNUITED}
        />

        <Form.Check
          className="my-2"
          type="radio"
          id={ PaymentTypeEnum.DIFFERENTIATED }
          name="payment-type"
          label="Дифференцированные"
          defaultChecked={ paymentType === PaymentTypeEnum.DIFFERENTIATED}
        />
      </Col>
    </Form.Group>
  );
};

export default PaymentType;

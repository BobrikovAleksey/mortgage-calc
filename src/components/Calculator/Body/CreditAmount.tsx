import { Col, Form, Row } from 'react-bootstrap';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

interface ICreditAmountProps {
  readOnly?: boolean;
}

const initialCreditAmount: ICreditAmountProps = {
  readOnly: true,
};

const CreditAmount = (props = initialCreditAmount) => {
  const { creditAmount } = useTypedSelector((state) => state.calc);

  return (
    <Form.Group as={Row} className="my-3" controlId="credit-amount">
      <Form.Label column sm="4">
        Сумма кредита
      </Form.Label>

      <Col sm="8">
        {
          props.readOnly
            ? <Form.Control plaintext readOnly defaultValue={ creditAmount?.toString() } />
            : <Form.Control defaultValue={ creditAmount?.toString() } />
        }
      </Col>
    </Form.Group>
  );
};

export default CreditAmount;

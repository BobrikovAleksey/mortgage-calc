import { FC } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';

const CreditTerm: FC = () => {
  const { creditTerm } = useTypedSelector((state) => state.mortgageCalc.inputForm);

  return (
    <Form.Group as={Row} className="my-3" controlId="credit-term">
      <Form.Label column sm="4">
        Срок кредита
      </Form.Label>

      <Col sm="8">
        <Form.Control defaultValue={ creditTerm?.toString() } />
      </Col>
    </Form.Group>
  );
};

export default CreditTerm;

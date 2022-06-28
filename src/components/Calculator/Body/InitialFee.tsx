import { FC } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const InitialFee: FC = () => {
  const { initialFee } = useTypedSelector((state) => state.calc);

  return (
    <Form.Group as={Row} className="my-3" controlId="initial-fee">
      <Form.Label column sm="4">
        Первоначальный взнос
      </Form.Label>

      <Col sm="8">
        <Form.Control defaultValue={ initialFee?.toString() } />
      </Col>
    </Form.Group>
  );
}

export default InitialFee;

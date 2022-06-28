import { FC } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Rate: FC = () => {
  const { rate } = useTypedSelector((state) => state.calc);

  return (
    <Form.Group as={Row} className="my-3" controlId="rate">
      <Form.Label column sm="4">
        Процентная ставка
      </Form.Label>

      <Col sm="8">
        <Form.Control defaultValue={ rate?.toString() } />
      </Col>
    </Form.Group>
  );
}

export default Rate;

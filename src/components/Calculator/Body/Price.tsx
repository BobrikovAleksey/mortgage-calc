import { FC } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Price: FC = () => {
  const { price } = useTypedSelector((state) => state.calc);

  return (
    <Form.Group as={Row} className="my-3" controlId="price">
      <Form.Label column sm="4">
        Стоимость недвижимости
      </Form.Label>

      <Col sm="8">
        <Form.Control defaultValue={ price?.toString() } />
      </Col>
    </Form.Group>
  );
}

export default Price;

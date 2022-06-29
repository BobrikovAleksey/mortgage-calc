import { ChangeEvent, FC } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { numericKeyValidator, numericValueValidator } from '../../../../libs/validator';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';

const Price: FC = () => {
  const { price } = useTypedSelector((state) => state.mortgageCalc.inputForm);
  const { setPrice } = useActions();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    numericValueValidator(event, price);
    const value = Number(event?.target?.value?.replace(/\s/g, ''));
    const newValue = !Number.isNaN(value) ? value : 0;
    if (newValue !== price) setPrice(newValue);
  }

  return (
    <Form.Group as={ Row } className="my-3" controlId="price">
      <Form.Label column sm="4">
        Стоимость недвижимости
      </Form.Label>

      <Col sm="8">
        <Form.Control
          inputMode="numeric"
          autoComplete="off"
          defaultValue={ price ? price.toString() : '' }
          onKeyDown={ numericKeyValidator }
          onInput={ handleInput }
          maxLength={ 19 }
        />
      </Col>
    </Form.Group>
  );
};

export default Price;

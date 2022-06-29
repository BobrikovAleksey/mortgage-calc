import { FC, ChangeEvent } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useActions } from '../../../../hooks/useActions';
import { numericKeyValidator, numericValueValidator } from '../../../../libs/validator';

const InitialFee: FC = () => {
  const { initialFee } = useTypedSelector((state) => state.mortgageCalc.inputForm);
  const { setInitialFee } = useActions();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    numericValueValidator(event, initialFee);
    const value = Number(event?.target?.value?.replace(/\s/g, ''));
    const newValue = !Number.isNaN(value) ? value : 0;
    if (newValue !== initialFee) setInitialFee(newValue);
  }

  return (
    <Form.Group as={ Row } className="my-3" controlId="initial-fee">
      <Form.Label column sm="4">
        Первоначальный взнос
      </Form.Label>

      <Col sm="8">
        <Form.Control
          inputMode="numeric"
          autoComplete="off"
          defaultValue={ initialFee ? initialFee.toString() : '' }
          maxLength={ 19 }
          onKeyDown={ numericKeyValidator }
          onInput={ handleInput }
        />
      </Col>
    </Form.Group>
  );
};

export default InitialFee;

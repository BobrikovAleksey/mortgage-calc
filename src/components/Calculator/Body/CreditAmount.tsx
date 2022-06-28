import { ChangeEvent } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';
import { numericKeyValidator, numericValueValidator } from '../../../libs/validator';

interface CreditAmountProps {
  readOnly?: boolean;
}

const initialCreditAmount: CreditAmountProps = {
  readOnly: true,
};

const CreditAmount = (props = initialCreditAmount) => {
  const { creditAmount } = useTypedSelector((state) => state.calc);
  const { setCreditAmount } = useActions();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    numericValueValidator(event, creditAmount);
    const value = Number(event?.target?.value?.replace(/\s/g, ''));
    const newValue = !Number.isNaN(value) ? value : 0;
    if (newValue !== creditAmount) setCreditAmount(newValue);
  }

  return (
    <Form.Group as={ Row } className="my-3" controlId="credit-amount">
      <Form.Label column sm="4">
        Сумма кредита
      </Form.Label>

      <Col sm="8">
        {
          props.readOnly
            ?
            <Form.Control
              inputMode="numeric"
              autoComplete="off"
              defaultValue={ creditAmount ? creditAmount.toString() : '' }
              maxLength={ 19 }
              plaintext readOnly
              onKeyDown={ numericKeyValidator }
              onInput={ handleInput }
            />
            :
            <Form.Control
              inputMode="numeric"
              autoComplete="off"
              defaultValue={ creditAmount ? creditAmount.toString() : '' }
              maxLength={ 19 }
              onKeyDown={ numericKeyValidator }
              onInput={ handleInput }
            />
        }
      </Col>
    </Form.Group>
  );
};

export default CreditAmount;

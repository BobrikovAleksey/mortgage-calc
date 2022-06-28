import { FC } from 'react';
import { Card, Form } from 'react-bootstrap';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Calculator: FC = () => {
  return (
    <Card>
      <Header />

      <Form>
        <Body />

        <Footer />
      </Form>
    </Card>
  );
}

export default Calculator;

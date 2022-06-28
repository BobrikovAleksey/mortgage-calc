import { FC } from 'react';
import { Button, Card } from 'react-bootstrap';

const Footer: FC = () => {
  return (
    <Card.Footer bsPrefix="card-footer d-flex justify-content-center">
      <Button type="submit" variant="outline-success">Рассчитать</Button>
    </Card.Footer>
  );
}

export default Footer;

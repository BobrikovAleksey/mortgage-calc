import { FC } from 'react';
import { Card, Nav } from 'react-bootstrap';
import { TypeEnum } from '../../../store/types/mortgageCalc/enums';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

const Header: FC = () => {
  const { type } = useTypedSelector((state) => state.mortgageCalc.inputForm);
  const { setType } = useActions();

  return (
    <Card.Header>
      <Nav variant="tabs" defaultActiveKey={ type }>
        <Nav.Item>
          <Nav.Link as="button"
                    eventKey={ TypeEnum.BY_PROPERTY_VALUE }
                    onClick={ () => setType(TypeEnum.BY_PROPERTY_VALUE) }
          >
            По стоимости недвижимости
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as="button"
                    eventKey={ TypeEnum.BY_LOAN_AMOUNT }
                    onClick={ () => setType(TypeEnum.BY_LOAN_AMOUNT) }
          >
            По сумме кредита
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
  );
}

export default Header;

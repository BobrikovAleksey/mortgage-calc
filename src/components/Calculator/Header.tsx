import { FC } from 'react';
import { Card, Nav } from 'react-bootstrap';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { CalcTypeEnum } from '../../store/reducers/calculator/types/enums';

const Header: FC = () => {
  const { type } = useTypedSelector((state) => state.calc);
  const { setType } = useActions();

  return (
    <Card.Header>
      <Nav variant="tabs" defaultActiveKey={ type }>
        <Nav.Item>
          <Nav.Link as="button"
                    eventKey={ CalcTypeEnum.BY_PROPERTY_VALUE }
                    onClick={ () => setType(CalcTypeEnum.BY_PROPERTY_VALUE) }
          >
            По стоимости недвижимости
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as="button"
                    eventKey={ CalcTypeEnum.BY_LOAN_AMOUNT }
                    onClick={ () => setType(CalcTypeEnum.BY_LOAN_AMOUNT) }
          >
            По сумме кредита
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
  );
}

export default Header;

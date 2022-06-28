import { FC } from 'react';
import Calculator from './components/Calculator';

const App: FC = () => {
  return (
    <div className="container">
      <h1 className="my-4">Ипотечный калькулятор</h1>

      <Calculator />
    </div>
  );
}

export default App;

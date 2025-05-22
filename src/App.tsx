import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Dialogs from './components/features/Dialogs';
import ErrorBoundaryComponent from './hoc/ErrorBoundary';
import AppRoutes from './routes';
import store from './store';
import './styles/index.scss';

const App: FC = () => {
  return (
    <ErrorBoundaryComponent>
      <Provider store={store}>
        <BrowserRouter>
          <Dialogs />
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </ErrorBoundaryComponent>
  );
};

export default App;

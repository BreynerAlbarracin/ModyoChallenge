import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../../pages/login.page';

const LoginRouter = createBrowserRouter([
  {
    path: '/',
    element: LoginPage,
  },
]);

export default LoginRouter;

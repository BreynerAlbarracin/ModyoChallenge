import React from 'react';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import AppRoutes from './app.route';
import LoginRouter from './login-routing/login-routing';

const routes = createBrowserRouter(AppRoutes);

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <LoginRouter />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;

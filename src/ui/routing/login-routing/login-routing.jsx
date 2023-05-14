import React from 'react';
import { Route } from 'react-router-dom';
import AuthPageLayout from '../../components/layouts/auth-page.layout';
import LoginPage from '../../pages/login.page';
import NotFoundPage from '../../pages/not-found.page';

function LoginRouter() {
  return (
    <>
      <Route path="/" component={LoginPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="*" component={NotFoundPage} />

      <Route path="/" component={AuthPageLayout}>
        <Route path="/login" componnet={LoginPage} />
      </Route>
    </>
  );
}

export default LoginRouter;

import '../../styles/sizing.style.css';

import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../shared/header.component';
import FooterComponent from '../shared/footer.component';

function AuthPageLayout() {
  return (
    <div className="page">
      <HeaderComponent />
      <div className="body-app">
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
}

export default AuthPageLayout;

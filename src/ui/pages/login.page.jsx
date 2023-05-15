import '../styles/sizing.style.css';

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/forms/login.form';
import AppStore from '../../stores/stores/app.store';
import UsersStore from '../../stores/stores/users.store';

function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const usersStore = UsersStore.getState();

    if (usersStore.userId) {
      navigate('/board');
    }

    return AppStore.subscribe(() => {
      const appStore = AppStore.getState();

      if (appStore.isLogin) {
        navigate('/board');
      }
    });
  }, [navigate]);

  return (
    <div className="row full-h full-w justify-content-center align-items-center">
      <div className="col-12">
        <h1 className="mb-5">Memory Game - by Breyner Albarracin</h1>
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-3">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

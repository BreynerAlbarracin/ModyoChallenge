import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../application/app.application';
import SecondaryButton from '../../elements/buttons/secondary.button';
import AppStore from '../../../stores/stores/app.store';
import UsersStore from '../../../stores/stores/users.store';
import { finishGame, resetGame } from '../../../application/board-game.application';
import PrimaryButton from '../../elements/buttons/primary.button';

function HeaderComponent() {
  const [userName, setUserName] = useState('');
  const [bestSucess, setBestSuccess] = useState(0);
  const [bestFail, setBestFail] = useState(0);
  const [isGame, setIsGame] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const onPositionTable = () => {
    navigate('score');
  };

  const onBoard = () => {
    navigate('/board');
  };

  const onLogOut = useCallback(() => {
    finishGame();
    resetGame();
    logoutUser();
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    const userStore = UsersStore.getState();

    if (userStore.userId) {
      setUserName(userStore.userId);

      const { success = 0, fails = 0 } = userStore.users
        ?.filter((f) => f.userId === userStore.userId)
        ?.sort((f) => f.sucessCount - f.failCount)
        ?.at(-1) || {};

      setBestSuccess(success);
      setBestFail(fails);
    }
  }, [setUserName, onLogOut]);

  useEffect(() => {
    setIsGame(!location.pathname.includes('score'));
  }, [setIsGame, location.pathname]);

  return (
    <header>
      <div className="row mx-4 border-bottom">
        <div className="d-flex col-xl-4 align-items-center">
          <h5>
            Memory Game - by Breyner Albarracin
          </h5>
        </div>
        <div className="col-xl-8">
          <div className="row">
            <div className="d-flex col-xl-3 align-items-center">
              Usuario:
              {' '}
              {userName}
            </div>
            <div className="d-flex col-xl-3 align-items-center">
              <p className="m-0">
                Mejor Score:
                <br />
                Aciertos:
                {bestSucess}
                {' '}
                - Errores:
                {bestFail}
              </p>
            </div>
            <div className="d-flex col-xl-5 align-items-center">
              <div className="me-2">
                <PrimaryButton disabled={false} text={isGame ? 'Tabla de posiciones' : 'Jugar!'} onClick={isGame ? onPositionTable : onBoard} />
              </div>
              <div>
                <SecondaryButton disabled={false} text="Salir" onClick={onLogOut} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;

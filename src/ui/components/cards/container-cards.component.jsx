import '../../styles/fonts.style.css';

import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import CardImageElement from '../../elements/cards/card-image.element';
import BoardGameStore from '../../../stores/stores/board-game.store';
import { finishGame, loadImagesGame, resetGame } from '../../../application/board-game.application';
import { registerFail, registerSuccess } from '../../../stores/actions/board-game.actions';

function ContainerCardsComponent() {
  const [disabled, setDisabled] = useState(true);
  const [successCount, setSuccessCount] = useState(0);
  const [failsCount, setFailsCount] = useState(0);
  const [firstImageShow, setFirstImageShow] = useState('');
  const [secondImageShow, setSecondImageShow] = useState('');
  const [imagesInfo, setImagesInfo] = useState([]);

  const cardsSuccess = useRef([]);
  const countPairs = useRef(0);
  const delayStart = useRef(4000);

  useEffect(() => {
    loadImagesGame();

    return BoardGameStore.subscribe(() => {
      if (!imagesInfo.length) {
        const state = BoardGameStore.getState();
        countPairs.current = state.images.length / 2;

        setImagesInfo([...state.images]);

        cardsSuccess.current = [...state.images.map((img) => img.id.split('|').at(0))];

        setTimeout(() => {
          cardsSuccess.current = [];
          setDisabled(false);
        }, delayStart.current);
      }
    });
  }, [imagesInfo]);

  useEffect(() => BoardGameStore.subscribe(() => {
    const { success, fails } = BoardGameStore.getState();

    setSuccessCount(success);
    setFailsCount(fails);
  }));

  useEffect(() => {
    if (
      !!cardsSuccess.current.length
      && !!countPairs.current
      && cardsSuccess.current.length === countPairs.current) {
      finishGame();

      Swal.fire({
        title: 'Juego Completado!',
        text: `Haz completado el tablero (Aciertos:${successCount} - Fallos:${failsCount})`,
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Volver a jugar!',
        cancelButtonText: 'Cerrar',
      }).then((confirm) => {
        if (confirm.isConfirmed) {
          resetGame();
          cardsSuccess.current = [];

          setSuccessCount(0);
          setFailsCount(0);
          setFirstImageShow('');
          setSecondImageShow('');
        }
      });
    }
  }, [successCount, failsCount]);

  const showImage = (idImage) => {
    let [firstImage] = firstImageShow.split('|');
    let [secondImage] = secondImageShow.split('|');

    if (!firstImageShow) {
      firstImage = idImage.split('|').at(0);
      setFirstImageShow(idImage);
    } else if (!secondImageShow) {
      secondImage = idImage.split('|').at(0);
      setSecondImageShow(idImage);
    }

    if (firstImage && secondImage) {
      if (firstImage === secondImage) {
        cardsSuccess.current = [...cardsSuccess.current, idImage.split('|').at(0)];

        setFirstImageShow('');
        setSecondImageShow('');
        onSuccess();
      } else {
        setDisabled(true);
        onFail();

        setTimeout(() => {
          setFirstImageShow('');
          setSecondImageShow('');
          setDisabled(false);
        }, 1500);
      }
    }
  };

  const onSuccess = () => {
    BoardGameStore.dispatch(registerSuccess());
  };

  const onFail = () => {
    BoardGameStore.dispatch(registerFail());
  };

  const renderCardImage = (info, index) => (
    <CardImageElement
      key={index}
      idImage={info.id}
      urlImage={info.url}
      cardName={info.name}
      imageShow={
        info.id === firstImageShow
        || info.id === secondImageShow
        || cardsSuccess.current.includes(info.id.split('|').at(0))
      }
      disabled={disabled}
      setImageShow={showImage}
    />
  );

  return (
    <div className="d-flex flex-wrap">
      {imagesInfo.map(renderCardImage)}
      <div className="button-float p-2">
        <span className="sucess-font">Aciertos:</span>
        {successCount}
        {' '}
        <span className="fail-font">Fallos:</span>
        {failsCount}
      </div>
    </div>
  );
}

export default ContainerCardsComponent;

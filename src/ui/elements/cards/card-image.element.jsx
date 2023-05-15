import '../../styles/sizing.style.css';
import '../../styles/images.style.css';
import '../../styles/components.style.css';

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import UrlLibrary from '../../../libraries/urls.library';

function CardImageElement({
  idImage, urlImage, cardName, imageShow, setImageShow, disabled,
}) {
  const backCard = UrlLibrary.backCardUrl;

  const setShowCard = () => {
    setImageShow(idImage);
  };

  return (
    <div className="card card-image overflow-hidden m-2">
      {imageShow
        ? (
          <button disabled={disabled} type="button" className="card-button w-100 h-100">
            <img className="w-100 h-70 object-cover" alt={cardName} src={urlImage} />
            <div className="d-flex h-30 justify-content-center align-items-center p-2">
              {cardName}
            </div>
          </button>
        )
        : (
          <button disabled={disabled} type="button" className="card-button h-100" onClick={setShowCard}>
            <img className="h-100 w-100 object-cover" alt="back card" src={backCard} />
          </button>
        )}
    </div>
  );
}

CardImageElement.propTypes = {
  idImage: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  imageShow: PropTypes.bool.isRequired,
  setImageShow: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default CardImageElement;

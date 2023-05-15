import '../../styles/sizing.style.css';
import '../../styles/images.style.css';
import '../../styles/components.style.css';

import React from 'react';
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
      <button disabled={disabled} type="button" className="card-button h-100 transition-1" onClick={imageShow ? null : setShowCard}>
        <img className={`w-100 ${imageShow ? 'h-70' : 'h-100'} object-cover transition-1`} alt={cardName} src={imageShow ? urlImage : backCard} />
        <div className={`d-flex ${imageShow ? 'h-30' : 'h-0'} justify-content-center align-items-center p-2 transition-1`}>
          {cardName}
        </div>
      </button>
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

import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function SecondaryButton({ disabled, text, onClick }) {
  return (
    <Button disabled={!!disabled} onClick={onClick} variant="danger">
      {text}
    </Button>
  );
}

SecondaryButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SecondaryButton;

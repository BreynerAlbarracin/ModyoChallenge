import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function PrimaryButton({ disabled, text, onClick }) {
  return (
    <Button disabled={!!disabled} onClick={onClick}>
      {text}
    </Button>
  );
}

PrimaryButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PrimaryButton;

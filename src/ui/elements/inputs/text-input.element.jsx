import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputGroup } from 'react-bootstrap';

function TextInput({
  required, placeholder, ariaLabel, value, setValue,
}) {
  return (
    <Form.Group className="mb-3" controlId="username">
      <Form.Label>Nombre de usuario</Form.Label>
      <InputGroup hasValidation>
        <InputGroup.Text>@</InputGroup.Text>
        <Form.Control
          type="text"
          required={required}
          placeholder={placeholder}
          aria-label={ariaLabel}
          value={value}
          onChange={setValue}
        />
        <Form.Control.Feedback type="invalid">
          El nombre de usuario es requerido
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
}

TextInput.propTypes = {
  required: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default TextInput;

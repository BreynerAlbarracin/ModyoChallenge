import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import TextInput from '../../elements/inputs/text-input.element';
import PrimaryButton from '../../elements/buttons/primary.button';
import { loginUser } from '../../../application/app.application';

function LoginForm() {
  const [validated, setValidated] = useState(false);
  const [userName, setUserName] = useState('');

  const startPlay = (event) => {
    const valid = !event.form?.checkValidity();

    if (!valid) {
      setValidated(false);
    } else {
      setValidated(true);
      loginUser(userName);
    }
  };

  return (
    <Form noValidate className="card p-4" validated={validated}>
      <TextInput
        required
        placeholder="Ingrese su usuario"
        ariaLabel="UserName"
        value={userName}
        setValue={(val) => setUserName(val.target.value)}
      />
      <PrimaryButton disabled={false} text="A Jugar!" onClick={startPlay} />
    </Form>
  );
}

export default LoginForm;

import React from "react";
import { Form, InputGroup } from "react-bootstrap";

function Textinput() {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
      <Form.Control
        placeholder="Insert your username to start"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  );
}

export default Textinput;

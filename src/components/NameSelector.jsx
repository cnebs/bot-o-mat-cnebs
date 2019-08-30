import React from 'react';
import Form  from 'react-bootstrap/Form';

const NameSelector = props => {
  return (
    <Form.Group controlId="roboForm.nameInput">
      <Form.Label>Robot Name</Form.Label>
      <Form.Control type="text" placeholder="Roy Batty" />
    </Form.Group>
  )
}

export default NameSelector;
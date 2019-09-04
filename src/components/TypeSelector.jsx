import React from 'react';
import Form  from 'react-bootstrap/Form';

const TypeSelector = props => {
  const types = props.data.types // Object of types given in data passed down from App.js
  const typesArr = Object.keys(types); // Array of keys from types object above
  
  return (
    <Form.Group controlId="roboForm.typeInput">
      <Form.Label>Robot Type</Form.Label>
      <Form.Control 
        as="select"
        onChange={props.handleTypeChoice}
      >
       {
          // Map over array of keys from object; 
          // For each object key, search types object for its value string then build an option tag with the string...
          typesArr.map( (type, i) => <option key={i}>{types[typesArr[i]]}</option>)
        }
      </Form.Control>
    </Form.Group>
  )
}

export default TypeSelector;
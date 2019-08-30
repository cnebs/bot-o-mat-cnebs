import React        from 'react';
import NameSelector from './NameSelector.jsx';
import TypeSelector from './TypeSelector.jsx';
import Form         from 'react-bootstrap/Form';
import Button       from 'react-bootstrap/Button';

const RobotBuilder = props => {
  return (
    <Form>

      <NameSelector 
        handleNameUpdate={props.handleNameUpdate}
      />
      <TypeSelector 
        data={props.data}
      />

    <Button variant="primary" type="submit">
    Build a Bot!
    </Button>

    </Form>
  )
}

export default RobotBuilder;
import React        from 'react';
import NameSelector from './NameSelector.jsx';
import TypeSelector from './TypeSelector.jsx';
import Form         from 'react-bootstrap/Form';

const RobotBuilder = props => {
  return (
    <Form>
      <NameSelector />
      <TypeSelector />
    </Form>
  )
}

export default RobotBuilder;
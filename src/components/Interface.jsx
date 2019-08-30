import React from 'react';
import Tasks from './Tasks.jsx';
import Col   from 'react-bootstrap/Col';
import Row   from 'react-bootstrap/Row';

const Interface = props => {
  return (
    <Col>
      <Row>
        {props.roboName} the {props.roboType}'s Tasks:
      </Row>
      <Row>
        <Tasks tasks={props.tasks} roboName={props.roboName}/>
      </Row>
    </Col>
  )
}

export default Interface;
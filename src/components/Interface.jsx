import React from 'react';
import Tasks from './Tasks.jsx';
import Col   from 'react-bootstrap/Col';
import Row   from 'react-bootstrap/Row';

const Interface = props => {

  const { robots } = props; // deconstruct props for ease of access/use

  return (
    <Col>
      {robots.map( robot => (
        <Col>
          <Row>
            {robot.roboName} the {robot.roboType}'s Tasks:
          </Row>
          <Row>
            <Tasks tasks={robot.tasks} roboName={robot.roboName} />
          </Row>
        </Col>
      ))}
    </Col>
  )
}

export default Interface;
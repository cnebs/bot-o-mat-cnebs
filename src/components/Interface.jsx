import React from 'react';
import Tasks from './Tasks.jsx';
import Col   from 'react-bootstrap/Col';
import Row   from 'react-bootstrap/Row';

const Interface = props => {

  const { robots } = props; // deconstruct props for ease of visibility/use

  return (
    <>
      { // For each robot in the robots state, we will generate a header + tasklist via the Tasks component
        robots.map( robot => (
          <Col>
            <Row>
              {robot.roboName} the {robot.roboType}'s Tasks:
            </Row>
            <Row>
              <Tasks tasks={robot.tasks} roboName={robot.roboName} />
            </Row>
          </Col>
        ))
      }
    </>
  )
}

export default Interface;
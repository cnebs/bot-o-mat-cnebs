import React from 'react';
import Tasks from './Tasks.jsx';
import Col   from 'react-bootstrap/Col';
import Row   from 'react-bootstrap/Row';
import Card  from 'react-bootstrap/Card'

const Interface = props => {

  const { robots, handleDoTask } = props; // deconstruct props for ease of visibility/use

  return (
    <>
      { // For each robot in the robots state, we will generate a header + tasklist via the Tasks component
        robots.map( (robot, i) => ( // Todo: Convert to using a card interface
          <Card className="card" key={i}> {/*A key will allow us to uniquely identify each card by its mapping index*/}
            <Card.Body>
              <Card.Title>
                {robot.roboName} the {robot.roboType}'s Tasks:
              </Card.Title>
            </Card.Body>
              <Col>
                <Row>
                  <Tasks 
                    tasks={robot.tasks} 
                    roboName={robot.roboName} 
                    handleDoTask={handleDoTask}
                  />
                </Row>
              </Col>
          </Card>
        ))
      }
    </>
  )
}

export default Interface;
import React from 'react';
import Tasks from './Tasks.jsx';
import Col   from 'react-bootstrap/Col';
import Row   from 'react-bootstrap/Row';
import Card  from 'react-bootstrap/Card';


const Interface = props => {

  const { robots, handleDoTask } = props; // deconstruct props for ease of visibility/use

  return (
    <>
      { // For each robot in the robots state, we will build a card with a title & tasklist via Tasks component
        robots.map( (robot, i) => (
          <Card className="card" key={i}> {/* A key will allow us to uniquely identify each card by its mapping index */}
              <Card.Header as="h5">
                {robot.roboName} the {robot.roboType}'s Tasks:
              </Card.Header>
            <Card.Body>
              <Card.Text>
                  {robot.isWorking ? `${robot.roboName} is working...` : null}
              </Card.Text>
            </Card.Body>
              <Col>
                <Row>
                  <Tasks 
                    robot={robot}
                    currentRobot={i}
                    tasks={robot.tasks} 
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
import React   from 'react';
import Tasks   from './Tasks.jsx';
import Col     from 'react-bootstrap/Col';
import Row     from 'react-bootstrap/Row';
import Card    from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

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
                  {
                    robot.isWorking ?  // If the robot is working, add a spinner to the card, otherwise don't
                      <Row as="span"> {/* divs can't be children of <p />s, so make these children spans */}
                        <Col md="auto" as="span">
                          <Card.Subtitle className="mb-2 text-muted" as="span">{`${robot.roboName} is working...HARD`}</Card.Subtitle>
                        </Col>
                        <Col md="auto" as="span">
                          <Spinner animation="border" variant="primary" as="span"/>
                        </Col>
                      </Row>: 
                    null
                  }
              </Card.Text>
            </Card.Body>
              <Col>
                <Row>
                  <Tasks  // Generate a tasklist for each robot's card
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
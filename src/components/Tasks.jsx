import React     from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Tasks = props => {

  const { robot, currentRobot, tasks, handleDoTask } = props;

  return (
    <ListGroup variant="flush">
      { // For each task in the datafile passed from App, we will generate a react-bootstrap actionable list
        // Each list item should have an interactive task, & dynamically rendering time to complete
        tasks.map( (task, taskIndex ) => {
          return (
            <ListGroup.Item
              key={taskIndex}
              action onClick={() => {
                  robot.isWorking === false ?
                  handleDoTask(task, currentRobot, taskIndex) :
                  alert(`${robot.roboName} is still working!`)
                }}
            >
              {
                !task.completing ?
                  `${task.description} (${task.eta/1000} sec)` :
                  `${task.description} (${task.eta/1000} sec) Completing...`
              }
            </ListGroup.Item>
          )
        })
      }
    </ListGroup>
  )
}

export default Tasks;
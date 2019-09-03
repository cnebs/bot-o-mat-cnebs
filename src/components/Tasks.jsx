import React     from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Tasks = props => {

  const { currentRobot, tasks, completing, handleDoTask } = props;

  return (
    <ListGroup variant="flush">
      { // For each task in the datafile passed from App, we will generate a react-bootstrap actionable list
        // Each list item should have an interactive task, & dynamically rendering time to complete
        tasks.map( (task, currentTask) => {
          return (
            <ListGroup.Item
              key={currentTask}
              action onClick={() => {
                  completing === false ?
                  handleDoTask(task, currentRobot, currentTask) :
                  alert(`The robot is busy working on: ${task.description}!`)
                }}
            >
              {
                !task.completing ?
                  `${task.description} (${task.eta}ms)` :
                  `${task.description} (${task.eta}ms) Completing...`
              }
            </ListGroup.Item>
          )
        })
      }
    </ListGroup>
  )
}

export default Tasks;
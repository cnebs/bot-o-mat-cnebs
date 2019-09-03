import React     from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Tasks = props => {

  const { currentRobot, tasks, handleDoTask } = props;

  return (
    <ListGroup variant="flush">
      { // For each task in the datafile passed from App, we will generate a react-bootstrap actionable list
        // Each list item should have an interactive task, & dynamically rendering time to complete
        tasks.map( (task, currentTask) => {
          // let currentTask = i;
          return (
            <ListGroup.Item
              key={currentTask}
              action onClick={() => (handleDoTask(task, currentRobot, currentTask))}
            >
              {
                !task.completing ?
                  `${task.description} (${task.eta}ms)` :
                  `Working!!!`
              }
            </ListGroup.Item>
          )
        })
      }
    </ListGroup>
  )
}

export default Tasks;
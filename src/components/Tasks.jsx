import React     from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Tasks = props => {
  return (
    <ListGroup variant="flush">
      { // For each task in the datafile passed from App, we will generate a react-bootstrap actionable list
        // Each list item should have an interactive task, & dynamically rendering time to complete
        props.tasks.map( (task, i) => {
          return (
            <ListGroup.Item
              key={i}
              action onClick={() => (props.handleDoTask(task))}
            >
              {`${task.description} | ETA: ${task.eta}ms`}
            </ListGroup.Item>
          )
        })
      }
    </ListGroup>
  )
}

export default Tasks;
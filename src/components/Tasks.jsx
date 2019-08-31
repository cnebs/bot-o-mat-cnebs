import React     from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button    from 'react-bootstrap/Button';

const Tasks = props => {
  return (
    <ListGroup>
      { // For each task in the datafile passed from App, we will generate a react-bootstrap list + button
        props.tasks.map( task => {
          return (
            <>
            <ListGroup.Item>
              {task.description}
            </ListGroup.Item>
            <Button 
              variant="primary" >
              Make {props.roboName} {task.description}!
            </Button>
            </>
          )
        })
      }
    </ListGroup>
  )
}

export default Tasks;
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Tasks = props => {
  return (
    <ListGroup>
      {props.tasks.map( task => {
        return (
          <>
          <ListGroup.Item>
            {task.description}
          </ListGroup.Item>
          <Button 
            variant="primary" >
            Make {props.roboName} do it!
          </Button>
          </>
        )
      })}
    </ListGroup>
  )
}

export default Tasks;
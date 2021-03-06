import React        from 'react';
import NameSelector from './NameSelector.jsx';
import TypeSelector from './TypeSelector.jsx';
import Form         from 'react-bootstrap/Form';
import Button       from 'react-bootstrap/Button';

const RobotBuilder = props => {
  const { robots, handleNameUpdate, handleBuildABot, handleTypeChoice } = props; // destructure props for ease of visibility/use

  return (
    // return a form with the NameSelector and TypeSelector components, then a submit button
    <Form>
      <NameSelector 
        handleNameUpdate={handleNameUpdate}
      />
      <TypeSelector 
        handleTypeChoice={handleTypeChoice}
        data={props.data}
      />

      <Button 
        variant="primary" 
        onClick={handleBuildABot /* updates state with tasks */}>
        {robots.length ? `Build another Bot!` : `Build a Bot!`}
      </Button>
    </Form>
  )
}

export default RobotBuilder;
import React        from 'react';
import NameSelector from './NameSelector.jsx';
import TypeSelector from './TypeSelector.jsx';
import Form         from 'react-bootstrap/Form';
import Button       from 'react-bootstrap/Button';

const RobotBuilder = props => {
  const { handleNameUpdate, handleBuildABot, handleTypeChoice } = props; // destructure props for visibility / ease of use

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
      onClick={handleBuildABot /*updates state with tasks*/}>
    Build a Bot!
    </Button>

    </Form>
  )
}

export default RobotBuilder;
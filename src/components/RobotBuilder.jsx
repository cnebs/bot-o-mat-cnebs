import React        from 'react';
import NameSelector from './NameSelector.jsx';
import TypeSelector from './TypeSelector.jsx';
import Form         from 'react-bootstrap/Form';
import Button       from 'react-bootstrap/Button';

const RobotBuilder = props => {
  const { // destructure props for visibility / easier use
    handleNameUpdate,
    handleBuildABot,
    handleTypeChoice
  } = props;

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
      type="submit"
      onClick={handleBuildABot}>
    Build a Bot!
    </Button>

    </Form>
  )
}

export default RobotBuilder;
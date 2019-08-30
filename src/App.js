import React        from 'react';
import RobotBuilder from './components/RobotBuilder.jsx';
import Interface    from './components/Interface.jsx';
import Container    from 'react-bootstrap/Container';
import Col          from 'react-bootstrap/Col';
import Row          from 'react-bootstrap/Row';


export default class App extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        roboName: 'default Name',
        roboType: 'Bipedal'
     };

    // bind our helpers to this context for prop usage...
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
  };

  handleNameUpdate() {

  };

  render() {

    // destructure our state to be easily passed down as props...
    const { roboName, roboType } = this.state;

    return(

    <div className="App">

      <Container>

        <RobotBuilder 
          handleNameUpdate={this.handleNameUpdate}
        />
        <Interface 
          roboName={roboName}
          roboType={roboType}
        />

      </Container>

    </div>

    );
  };
}
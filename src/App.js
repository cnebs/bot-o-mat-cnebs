import React        from 'react';
import data         from './assets/data.js';
import RobotBuilder from './components/RobotBuilder.jsx';
import Interface    from './components/Interface.jsx';
import Container    from 'react-bootstrap/Container';
import Col          from 'react-bootstrap/Col';
import Row          from 'react-bootstrap/Row';


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        roboName: 'default Name',
        roboType: 'Bipedal'
     };

    // bind our helpers to this context for prop usage
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
  };

  handleNameUpdate() { // Update state as a user enters text into the robot name field
    console.log('hello');
  };

  handleBuildRobot() {

  }

  render() {
    const { roboName, roboType } = this.state; // destructure our state to be easily passed down as props

    return(
      <div className="App">
        <Container>
          <Col md={4}></Col>
          <Col md={4}>
            <Row>
              <RobotBuilder 
                handleNameUpdate={this.handleNameUpdate}
                data={data}
              />
            </Row>
            <Row>
              <Interface 
                roboName={roboName}
                roboType={roboType}
              />
            </Row>
          </Col>
          <Col md={4}></Col>
        </Container>
      </div>
    );
  };
}

export default App;
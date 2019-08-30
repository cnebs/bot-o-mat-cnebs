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
        roboType: 'Bipedal',
        build: false
     };

    // bind our helpers to this context for prop usage
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleTypeChoice = this.handleTypeChoice.bind(this);
    this.handleBuildABot  = this.handleBuildABot.bind(this);
  };

  handleNameUpdate(event) { // Update state as a user enters text into the robot name field
    const roboName = event.target.value;
    this.setState({roboName : roboName});
  };

  handleTypeChoice(event) {
    const roboType = event.target.value;
    this.setState({roboType : roboType});
  }

  handleBuildABot() {
    console.log('click!');
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
                handleTypeChoice={this.handleTypeChoice}
                handleBuildABot={this.handleBuildABot}
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
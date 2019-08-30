import React         from 'react';
import data          from './assets/data.js';
import RobotBuilder  from './components/RobotBuilder.jsx';
import Interface     from './components/Interface.jsx';
import Container     from 'react-bootstrap/Container';
import Col           from 'react-bootstrap/Col';
import Row           from 'react-bootstrap/Row';
import getFiveRandom from './utils/getFiveRandom';


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = { 
        robots : [], // Todo: Build robots state to hold array of robot objects, each with name, type, and tasks
        roboName : 'default Name',
        roboType : '',
        tasks    : []
     };

    // bind our handlers to this context for prop usage
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleTypeChoice = this.handleTypeChoice.bind(this);
    this.handleBuildABot  = this.handleBuildABot.bind(this);
  };

  handleNameUpdate(event) { // Update state as a user enters text into the robot name field
    const roboName = event.target.value;
    this.setState({roboName : roboName});
  };

  handleTypeChoice(event) { // Update state as a user chooses a robot type from the select field
    const roboType = event.target.value;
    this.setState({roboType : roboType});
  };

  handleBuildABot() { // Generate a list of 5 random tasks from the data; if user has completed the form, generate the task list
    const tasks = data.tasks
    const fiveRandomTasks = getFiveRandom(tasks);
    if (this.state.roboName === '' || this.state.roboType === '') {
      alert('Please give your poor robot a name & type!');
    } else {
      this.setState({tasks : fiveRandomTasks});
      const robots = this.state.robots;
      const robot = {}; // Build a new robot object, then set its properties before adding it into the state of robots
        robot.roboName = this.state.roboName;
        robot.roboType = this.state.roboType;
        robot.tasks    = fiveRandomTasks;
      robots.push(robot);
      this.setState({robots : robots});
    }
    

  };

  render() {
    const { roboName, roboType, tasks } = this.state; // destructure our state to be easily passed down as props

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
              {/* Conditionally render the list of tasks as <Interface /> if 5 tasks have been generated (means inputs are satisfied) */}
              {this.state.tasks.length ? 
              <Interface 
                roboName={roboName}
                roboType={roboType}
                tasks={tasks}
              /> :
              <></>}
              
            </Row>
          </Col>
          <Col md={4}></Col>
        </Container>
      </div>
    );
  };
};

export default App;
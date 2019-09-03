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
        robots    : [],
        roboName  : '',
        roboType  : '',
        completing: false
     };

    // bind our handlers to this context for prop usage
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleTypeChoice = this.handleTypeChoice.bind(this);
    this.handleBuildABot  = this.handleBuildABot.bind(this);
    this.handleDoTask     = this.handleDoTask.bind(this);
  };

  handleNameUpdate(event) { // Update state as a user enters text into the robot text field
    const roboName = event.target.value;
    this.setState({roboName : roboName});
  };

  handleTypeChoice(event) { // Update state as a user chooses a robot type from the select field
    const roboType = event.target.value;
    this.setState({roboType : roboType});
  };

  handleBuildABot() { // Generate a list of 5 random tasks from assets/data.js; form is satisfied, build a robot into state
    const tasks = data.tasks
    const fiveRandomTasks = getFiveRandom(tasks);

    if (this.state.roboName === '' || this.state.roboType === '') {
      alert('Please give your poor robot a name & type!');

    } else {
      const robots = this.state.robots; // clone robots state to modify it before using this var to reset state
      const robot = {}; // Build a new robot object, then set its properties before adding it into our [robots] state
        robot.roboName = this.state.roboName;
        robot.roboType = this.state.roboType;
        robot.tasks    = fiveRandomTasks;
      robots.push(robot);
      this.setState({robots : robots});
    };
  };

  handleDoTask(task, currentRobot, currentTask) {
    this.setState({completing: true});
    // Clone robots state, access clicked task object & set completing to true for conditional rendering, update state
    let robots = this.state.robots;
    let currentTasks = robots[currentRobot].tasks;
    robots[currentRobot].tasks[currentTask].completing = true;
    this.setState({robots: robots});
    
    // After ms specified in current task object eta property, remove task from robot clone and update state from clone
    setTimeout(() => {
      currentTasks.splice(currentTask, 1);
      this.setState({robots: robots});
      this.setState({completing: false});
    }, task.eta); 
  };

  render() {
    const { robots, completing } = this.state; // destructure our state to be easily passed down as props

    /* 
    React-Bootstrap follows a similar grid pattern to bootstrap
    */

    return(
      <div className="App">
        <Container>
          <Row>
            <Col></Col>
            <Col><h1>Bot-O-Mat!</h1></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <RobotBuilder // robot building user interface takes handlers and file data
                handleNameUpdate={this.handleNameUpdate}
                handleTypeChoice={this.handleTypeChoice}
                handleBuildABot={this.handleBuildABot}
                data={data}
              />
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col md="auto">
              <br></br>
              <Row>
                {/* Conditionally render each robot's list of tasks if at least 1 robot exists in the state */}
                {robots.length ? 
                <Interface 
                  robots={robots}
                  completing={completing}
                  handleDoTask={this.handleDoTask}
                /> :
                <></>}
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  };
};

export default App;
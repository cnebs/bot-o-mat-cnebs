import React         from 'react';
import data          from './assets/data.js';
import RobotBuilder  from './components/RobotBuilder.jsx';
import Leaderboard   from './components/Leaderboard.jsx';
import Interface     from './components/Interface.jsx';
import Container     from 'react-bootstrap/Container';
import Col           from 'react-bootstrap/Col';
import Row           from 'react-bootstrap/Row';
import getFiveRandom from './utils/getFiveRandom';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = { 
        robots            : [],
        roboName          : '',
        roboType          : ''
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
      alert('Please give your poor robot both a name and a type!');

    } else {
      const robots = this.state.robots; // clone robots state to modify it before using this var to reset state
      const robot = {}; // Build a new robot object, then set its properties before adding it into our [robots] state
        robot.roboName       = this.state.roboName;
        robot.roboType       = this.state.roboType;
        robot.tasksCompleted = 0;
        robot.isWorking      = false;
        robot.tasks          = fiveRandomTasks;
      robots.push(robot);
      this.setState({robots : robots});
    };
  };

  handleDoTask(task, currentRobot, currentTask) {
    // Clone robots state
    let robots = this.state.robots;
    let currentTasks = robots[currentRobot].tasks;

    // Access clicked task object & set completing to true for conditional rendering, update state
    robots[currentRobot].tasks[currentTask].completing = true;
    robots[currentRobot].isWorking = true;
    this.setState({robots: robots});
    
    // After ms specified in current task object eta property, remove task from robot clone and update state from clone
    setTimeout(() => {
      currentTasks.splice(currentTask, 1);
      robots[currentRobot].isWorking = false;
      robots[currentRobot].tasksCompleted++;
      this.setState({robots: robots});
    }, task.eta); 
  };

  render() {
    const { robots } = this.state; // destructure our state to be easily passed down as props

    /* 
    React-Bootstrap follows a similar grid pattern to Bootstrap
    */

    return(
      <div className="App">
        <Container>
          <br />
          <Row>
            <Col></Col>
            <Col md="auto"><h1>Bot-O-Mat</h1></Col>
            <Col></Col>
          </Row>

          <hr />
          <br />

          <Row>
            <Col md="2"></Col>
            <Col md="4">
              <RobotBuilder // robot building user interface takes handlers and file data
                robots={robots}
                handleNameUpdate={this.handleNameUpdate}
                handleTypeChoice={this.handleTypeChoice}
                handleBuildABot={this.handleBuildABot}
                data={data}
              />
            </Col>
            <Col md="4">
              <Row>
                <Col></Col>
                <Col md="auto"><h5>Robo-Leaderboard</h5></Col>
                <Col></Col>
              </Row>
              <Row>
                <Leaderboard // Leaderboard references robots array from state
                  robots={robots}
                />
              </Row>
            </Col>
            <Col md="2"></Col>
          </Row>

          <br />
          {robots.length ? <hr /> : <></>}

          <Row>
            <Col></Col>
            <Col md="auto">
              <br></br>
              <Row>
                {/* Conditionally render each robot's list of tasks if at least 1 robot exists in the state */}
                {robots.length ? 
                <Interface  // Interface dynamically renders tasklist cards for each robot passed from state
                  robots={robots}
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
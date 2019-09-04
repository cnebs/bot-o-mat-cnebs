import React from 'react';
import Table from 'react-bootstrap/Table';

const Leaderboard = props => {
const { robots } = props; // destructure
const roboClone  = robots.slice(0); // Create a clone of robots prop to use & sort based on tasks completed

  return ( // Build a table that dynamically renders rows for each Robot, updating order as tasks finish
    <Table striped bordered hover size="sm"> 
      <thead>
        <tr>
          <th>#</th>
          <th>Bot-Name</th>
          <th>Bot-Type</th>
          <th>Tasks Completed</th>
        </tr>
      </thead>
      <tbody>
        {
          robots.length ?  // If a robot hasn't been made: placeholder row; else, sort & render dynamically
            roboClone.sort((a, b) => (b.tasksCompleted - a.tasksCompleted)) // sort each robot clone by tasks completed
            .map((robot, i) => {
              let placement = i+1;
              return(
                <tr key={i}>
                  <td>{placement}</td>
                  <td>{robot.roboName}</td>
                  <td>{robot.roboType}</td>
                  <td>{5 - robot.tasks.length}</td>
                </tr>
              );
          }) : <tr>
                <td>-</td>
                <td>Build</td>
                <td>A</td>
                <td>Bot!</td>
              </tr>
        }
      </tbody>
    </Table>
  )
}

export default Leaderboard;
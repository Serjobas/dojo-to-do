import React from 'react';

class Stats extends React.Component{

  render(){

    let total = this.props.todos.length;
    let completed = this.props.todos.filter(todo => todo.completed).length;
    let notCompleted = total - completed;

    return (
      <table className="stats">
        <tbody>
          <tr>
            <th>Total</th>
            <td>{total}</td>
          </tr>
          <tr>
            <th>Completed</th>
            <td>{completed}</td>
          </tr>
          <tr>
            <th>Remained</th>
            <td>{notCompleted}</td>
          </tr>
        </tbody>
      </table>
    )
  }

}

export default Stats;

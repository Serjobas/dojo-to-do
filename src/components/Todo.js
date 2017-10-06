import React from 'react';

import Checkbox from './Checkbox';
import Button from './Button';

class Todo extends React.Component {
  render(){
    return (
      <div className={'todo ' + (this.props.isCompleted ? 'completed' : '')}>

        <Checkbox checked={this.props.isCompleted} />

        <span className="todo-title">{this.props.task}</span>

        <Button className="delete icon" icon="delete"/>

      </div>
  )
  }
}



export default Todo;

import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';
import Button from './Button';

class Todo extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      editing: false
    }

    this.onChange = this.onChange.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(){
    this.props.onStatusChange(this.props.id)
  }

  onDelete(){
    this.props.onDelete(this.props.id)
  }

  handleSubmit(event){
    event.preventDefault();
    let title = this.refs.title.value;

    this.props.onEdit(this.props.id, title);
    this.setState({editing: false});
  }

  renderDisplay(){
    return (
      <div className={`todo ${(this.props.completed ? 'completed' : '')}`}>

        <Checkbox onChange={this.onChange} checked={this.props.completed}/>

        <span className="todo-title">{this.props.title}</span>

        <Button className="edit icon" icon="edit" onClick={ e => this.setState({editing: true})} />
        <Button className="delete icon" icon="delete" onClick={this.onDelete} />

      </div>
    )
  }

  renderEditForm(){
    return (
      <form className="todo-edit-form" onSubmit={this.handleSubmit}>
        <input type="text" ref="title" defaultValue={this.props.title}/>
        <Button className="save icon" icon="save" type="submit"/>
      </form>
    )
  }

  render(){
    if(this.state.editing){
      return this.renderEditForm();
    }else{
      return this.renderDisplay();
    }
  }
}

Todo.PropTypes = {
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}


export default Todo;

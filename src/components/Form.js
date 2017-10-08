import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

class Form extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let title = this.state.title;

    if(title){
      this.props.onAdd(title);
      this.state.title = '';
      this.refs.title.focus();
    }
  }

  handleChange(event){
    let title = event.target.value;
    this.setState({title})
  }

  render(){
    return(
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <input ref="title" type="text" placeholder="Write your task" value={this.state.title} onChange={this.handleChange}/>
        <Button type="submit" >Add task</Button>
      </form>
    )
  }
}

Form.PropTypes = {
  onAdd: PropTypes.func.isRequired
}

export default Form;

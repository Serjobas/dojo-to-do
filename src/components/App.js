import React from 'react';

import Header from './Header';
import Todo from './Todo';
import Form from './Form';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      todos: this.props.initData,
      count: 5
    };

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  nextId (){
    this._nextId = this._nextId || 5;
    return this._nextId++;
  }

  handleStatusChange(id){
    let todos = this.state.todos.map( todo => {
      if(todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    this.setState({todos})
  }

  handleDelete(id){
    let todos = this.state.todos.filter( todo => todo.id !== id );

    this.setState({todos})
  }

  handleAdd(title){
    let todo = {
      id: this.nextId(),
      title: title,
      completed: false
    }
    let todos = [...this.state.todos, todo];
    this.setState({ todos });
  }

  handleEdit(id,title){
    let todos = this.state.todos.map( todo => {
      if (todo.id === id){
        todo.title = title;
      }
      return todo;
    });
    console.log(todos);
    this.setState({ todos });
  }

  render() {

    return (
      <main>
        <Header title="React to-do" todos={this.state.todos} />
        <section className="todo-list">
          {this.state.todos.map( todo =>
            <Todo
              key={todo.id}
              completed={todo.completed}
              title={todo.title}
              id={todo.id}
              onStatusChange={this.handleStatusChange}
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
            />
           )}
        </section>
        <Form onAdd={this.handleAdd} />
      </main>
    );
  }
}

// App.propTypes = {
//   title: React.PropTypes.string
// };
App.defaultProps = {
  title: 'React ToDo'
};

export default App;

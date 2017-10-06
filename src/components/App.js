import React from 'react';

import Header from './Header';
import Todo from './Todo';


class App extends React.Component {
  render() {

    console.log(this.props);

    return (
      <main>
        <Header title="React to- fucking-do" />
        <section className="todo-list">
          {this.props.todos.map( todo =>
            <Todo key={todo.id} isCompleted={todo.completed} title={todo.title} />
           )}
        </section>
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

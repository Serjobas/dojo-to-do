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
          <Todo isCompleted={true} task="Изучать React.js" />
          <Todo task="Изучать что-то" />
          <Todo task="Изучать JavaScript" />
          <Todo isCompleted={true} task="Стать крутым"/>
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

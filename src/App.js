import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {

    console.log(this.props);

    return (
      <main>
        <header>
          <h1>{this.props.title}</h1>
        </header>
        <section className="todo-list">
          <div className="todo">

            <button className="checkbox item">
              <i className="material-icons">check_box_outline_blank</i>
            </button>

            <span className="todo-title">Изучать Реакт</span>

            <button className="delete icon">
              <i className="material-icons">delete</i>
            </button>

          </div>

          <div className="todo completed">

            <button className="checkbox item">
              <i className="material-icons">check_box</i>
            </button>

            <span className="todo-title">Изучать JavaScript</span>

            <button className="delete icon">
              <i className="material-icons">delete</i>
            </button>

          </div>

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

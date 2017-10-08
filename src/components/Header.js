import React from 'react';
import Stats from './Stats';

class Header extends React.Component {
  render(){
    return(
      <header>
        <Stats todos={this.props.todos}/>
        <h1>{this.props.title}</h1>
      </header>)
  }
}

export default Header;

import React from 'react';

class Button extends React.Component {
  render(){
    return (
      <button className={this.props.className}>
        <i className="material-icons">{this.props.icon}</i>
      </button>
    )
  }
}

export default Button;

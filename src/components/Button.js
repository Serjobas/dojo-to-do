import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render(){
    return (
      <button className={this.props.className} onClick={this.props.onClick} {...this.props}>

        {this.props.icon ?
          <i className="material-icons">{this.props.icon}</i>
        :
          this.props.children
        }

      </button>
    )
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
}

export default Button;

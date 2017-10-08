import React from 'react';
import PropTypes from 'prop-types';


class Checkbox extends React.Component{
  constructor(props){
    super(props);
}

  render (){
    return (
      <button  className="checkbox item" onClick={this.props.onChange}>
        <i className="material-icons">{(this.props.checked) ? 'check_box' : 'check_box_outline_blank'}</i>
      </button>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Checkbox;

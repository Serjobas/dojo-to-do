import React from 'react';

class Checkbox extends React.Component{
  render (){
    return (
      <button className="checkbox item">
        <i className="material-icons">{(this.props.checked) ? 'check_box' : 'check_box_outline_blank'}</i>
      </button>
    );
  }
}

export default Checkbox;

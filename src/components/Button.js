import React from 'react';
import PropTypes from 'prop-types';

const Button = ({color,text}) => {
  return <button style={{backgroundColor:color}} className='btn'>{text}</button>
}

//when no property is passed to the component 
Button.defaultProps = {
    color:'green',
    text:'Add Task'
}

//The type of the proporty is limited to string
Button.propTypes = {
    text:PropTypes.string,
    color:PropTypes.string,
}

export default Button;
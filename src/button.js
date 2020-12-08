'use strict'

import React from 'react';

const Button = ({children, handleClick}) => (
    <button onClick={handleClick}>
        {children}
    </button>
)

Button.propTypes = {
  handleClick: React.PropTypes.func.isRequired
}
//https://reactjs.org/docs/typechecking-with-proptypes.html

export default Button

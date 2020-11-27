'use strict'

import React from 'react';

const Square = ({ color }) => (
    <div style={{
        height: '100px',
        width: '100px',
        marginTop: '10px',
        backgroundColor: color
        }}/>
)

Square.defaultProps = {
    color: 'red'
}

export default Square
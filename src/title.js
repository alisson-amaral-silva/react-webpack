'use strict'

import React from 'react';
const Title = ({name}) => (
    <h1>Ola {name}</h1>
)

Title.defaultProps = {
    name: 'Desconhecido'
}
// const Title = React.createClass ({
//     getDefaultProps: function (){
//         return {
//             name: 'Desconhecido'
//         }
//     },
//     render() {
//         return (
//             <h1>Ola {this.props.name}!</h1>
//         )
//     }
// })

export default Title

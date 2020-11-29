'use strict'

import React, {Component} from 'react'
import Button from './button'
import Square from './square'
export default class App extends Component {
  constructor (){
    super()
    this.state = {
      color: 'green'
    }
  }
  render(){
    return (
      <div>
        <Square color={this.state.color} />
        {['red', 'green','blue'].map((color) => (
          <Button 
          key={color} 
          handleClick={() => this.setState({color})}>
          {color}
          </Button>
        ))}
      </div>
    )
  }
}
// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Title />
//       </div>
//     )
//   }
// }



'use strict'

// import Title from './title';
import React, {Component} from 'react';
import Square from './square';
export default class App extends Component {
  render(){
    return (
      <div>
        {/* <Title /> */}
        {['blue','red','green'].map((square) => (
          <Square key={square} color={square}/>
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



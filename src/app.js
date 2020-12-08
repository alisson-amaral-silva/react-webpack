'use strict'

import React, {Component} from 'react'
export default class App extends Component {

  render(){
    return (
      <div>
        <form>
          <input type="text" value={this.state.value} onChange={(e) => {
            console.log(e)
            this.setState({
              value: e.target.value
            })
          }} />
        </form>
      </div>
    )
  }
}

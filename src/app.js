'use strict'

import React, {Component} from 'react'
import Button from './button'
export default class App extends Component {

  render(){
    return (
      <div>
        <Button handleClick= {() => console.log('clicou')}>
          Clica em mim
        </Button>
      </div>
    )
  }
}

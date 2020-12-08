'use strict'

import React, {Component} from 'react'

class Timer extends Component {
    constructor(){
        super()
        this.state = {
            timer: 0
        }
        this.timer
    }

    componentWillReceiveProps(nextProps) {
        console.log('timer ', this.props, nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        //console.log('shouldComponentUpdate', this.props, nextProps)
        return this.props.time !== nextProps.time
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate timer', this.props, nextProps)
    }

    componentDidUpdate(prevProps, prevState){
     console.log('componentDidUpdate ', this.props, prevProps)
    }
    componentDidMount(){
       this.timer = setInterval(() => {
            this.setState({timer: this.state.timer + 1})
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render () {
        return <div>Timer: {this.state.timer} </div>
    }
}

export default Timer
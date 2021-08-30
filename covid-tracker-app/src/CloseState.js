import React, { Component } from 'react'
import globalVar from './globals'

class CloseState extends Component {
  constructor () {
    super()
    this.state = {
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    globalVar.app_state = "closure"
    globalVar.clear_state()
    

    globalVar.update_stats({title: "U.S State Closures \nSelect a state to display current closures and policy information."})

    var data = {
        positions: [],
        options: {   
            radius: 60,   
            opacity: 0.6,
        }
    }
    globalVar.updateHeatMap(data)

    globalVar.backToCenter({
      center: {
        lat: 39,
        lng: -97
      },
      zoom: 4,
    })
  }

  render () {
    return (
        <button className='button' onClick={this.handleClick}>State Closures</button>
    )
  }
}
export default CloseState
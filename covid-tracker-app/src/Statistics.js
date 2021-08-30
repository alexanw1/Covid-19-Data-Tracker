import React, { Component } from 'react'
import globalVar from './globals'

class Statistics extends Component {
  constructor () {
    super()
    this.state = {
        stats: {}
    }
  }

  

  render () {
    var markup = []
    
    Object.keys(this.state.stats).forEach((element) => {
        if (element === "title"){
            markup.push(
                <h1> {this.state.stats[element]}</h1>
            )
        }else{
            markup.push(
                <div style={{float: "left"}, {width: "100%"}, {height: "75px"}}>
                    <span style={{float: "left"}}> {element}: {this.state.stats[element]}</span>
                    <br style={{clear: "all"}}></br>
                </div>
            )
        }
    })

    return (
        markup
    )
  }

  componentDidMount(){
    globalVar.update_stats = (stats) => {
        this.setState({stats})
    }
  }

}
export default Statistics
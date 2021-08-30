import React, { Component } from 'react'

import axios from 'axios'
import globalVar from './globals'

class CovidState extends Component {
  constructor () {
    super()
    this.state = {
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    globalVar.app_state = "case"
    globalVar.clear_state()
    axios.get(`http://localhost:8000/api/casedata/?iscounty=0`).then(cases => {
      axios.get('http://localhost:8000/api/states/').then(states => {
          var output = []
          var country_data = []

          states.data.forEach((state) => {
              cases.data.forEach((caseData) => {
                  if (state.stateid === caseData.stateid){
                      var modifier = 0
                      if (caseData.casesconfirmed > 200000){
                          modifier = 100000
                      }else if (caseData.casesconfirmed > 100000){
                          modifier = 50000
                      }else {
                          modifier = 10000
                      }
                      output.push({lat: state.latitude, lng: state.longitude, weight: caseData.casesconfirmed/modifier})
                      country_data.push({casesconfirmed: caseData.casesconfirmed, casesprobable: caseData.casesprobable, deathsconfirmed: caseData.deathsconfirmed, deathsprobable: caseData.deathsprobable})
                    }
              })
          })
          globalVar.update_stats({})

          var Total_Cases = 0
          var Cases_Probable = 0
          var Total_Deaths = 0
          var Deaths_Probable = 0

          country_data.forEach((data)=> {
              Total_Cases += data.casesconfirmed
              Cases_Probable += data.casesprobable
              Total_Deaths += data.deathsconfirmed
              Deaths_Probable += data.deathsprobable
          })

          globalVar.update_stats({title: "U.S Covid Cases", "Total Cases": Total_Cases.toLocaleString(), "Cases Probable": Cases_Probable.toLocaleString(), "Total Deaths": Total_Deaths.toLocaleString(), "Deaths Probable": Deaths_Probable.toLocaleString()})

          var data = {
              positions: output,
              options: {   
                  radius: 60,   
                  opacity: 0.6,
              }
          }
          globalVar.updateHeatMap(data)
      })
    })

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
        <button className='button' onClick={this.handleClick}>Covid Cases</button>
    )
  }
}
export default CovidState
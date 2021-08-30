import React, { Component } from 'react'

import axios from 'axios'
import globalVar from './globals'

class VaccineState extends Component {
  constructor () {
    super()
    this.state = {
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    globalVar.app_state = "vaccine"
    globalVar.clear_state()
    axios.get(`http://localhost:8000/api/vacdata`).then(vacs => {
            axios.get('http://localhost:8000/api/states/').then(states => {
                var output = []
                var country_data = []
                states.data.forEach((state) => {
                    vacs.data.forEach((vacData) => {
                        if (state.stateid === vacData.stateid){
                            var modifier = 0
                            if (vacData.totaldose > 10000000){
                                modifier = 10000000
                            }else if (vacData.totaldose > 5000000){
                                modifier = 5000000
                            }else {
                                modifier = 1000000
                            }
                            output.push({lat: state.latitude, lng: state.longitude, weight: vacData.numberfullyvac/modifier})
                            country_data.push({firstdose: vacData.firstdose, seconddose: vacData.seconddose, totaldose: vacData.totaldose})
                        }
                    })
                })

                globalVar.update_stats({})
                var firstdose = 0
                var seconddose = 0
                var totaldose = 0

                country_data.forEach((data)=> {
                  firstdose += data.firstdose
                  seconddose += data.seconddose
                  totaldose += data.totaldose
                })

                globalVar.update_stats({title: "U.S Vaccination Data", "First Doses Delivered": firstdose.toLocaleString(), "Second Doses Delivered": seconddose.toLocaleString(), "Total Doses Delivered": totaldose.toLocaleString()})

                var data = {
                    positions: output,
                    options: {   
                        radius: 50,   
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
        <button className='button' onClick={this.handleClick}>Vaccinations</button>
    )
  }
}
export default VaccineState
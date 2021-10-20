import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

import SelectCounty from './SelectCounty'
import globalVar from './globals'

class SelectState extends Component {
    constructor (props) {
        super(props)
        this.handler = this.handler.bind(this)
        this.state = {
            selectRef: null,
            selectOptions: [],
            selected: "",
            counties: [],
            updated: false,
            clear: false
        }
    }

    async getOptions(){
        const res = await axios.get('https://covidtrackermysql.herokuapp.com/api/states/')
        const data = res.data
    
        const options = data.map(d => ({
          "value" : d.abrv,
          "label" : d.statename
        }))
        this.setState({selectOptions: options})
      }

    handler() {
        this.setState({updated: false})
    }

    getCases(abrv){
        globalVar.update_stats({})
        axios.get(`https://covidtrackermysql.herokuapp.com/api/casedata/?iscounty=0&stateabvr=${abrv}`).then(statecases => {
            var caseData = statecases.data[0]
            globalVar.update_stats({title: caseData.countyname, "Total Cases": caseData.casesconfirmed.toLocaleString(), "Cases Probable": caseData.casesprobable.toLocaleString(), "Total Deaths": caseData.deathsconfirmed.toLocaleString(), "Deaths Probable": caseData.deathsprobable.toLocaleString()})
        })

        axios.get(`https://covidtrackermysql.herokuapp.com/api/casedata/?iscounty=1&stateabvr=${abrv}`).then(cases => {
            axios.get(`https://covidtrackermysql.herokuapp.com/api/counties/?state=${abrv}`).then(counties => {
                var output = []
                counties.data.forEach((county) => {
                    cases.data.forEach((caseData) => {
                        if (county.countyname === caseData.countyname){
                            output.push({lat: county.latitude, lng: county.longitude, weight: caseData.casesconfirmed/10000})
                        }
                    })
                })
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
    }

    getVacs(abrv){
        axios.get(`https://covidtrackermysql.herokuapp.com/api/states/?abrv=${abrv}`).then(state => {
            axios.get(`https://covidtrackermysql.herokuapp.com/api/vacdata/?statename=${state.data[0].statename}`).then(vacs => {
                var Vacdata = vacs.data[0]
                globalVar.update_stats({title: state.data[0].statename, "First Doses Delivered": Vacdata.firstdose.toLocaleString(), "Second Doses Delivered": Vacdata.seconddose.toLocaleString(), "Total Doses Delivered": Vacdata.totaldose.toLocaleString()})

                var data = {
                    positions: [
                        {lat: state.data[0].latitude, lng: state.data[0].longitude, weight: vacs.data[0].totaldose},
                    ],
                    options: {   
                        radius: 50,   
                        opacity: 0.6,
                    }
                }
                globalVar.updateHeatMap(data)
            })
        })
    }

    getClosures(abrv){
        axios.get(`https://covidtrackermysql.herokuapp.com/api/states/?abrv=${abrv}`).then(state => {
            axios.get(`https://covidtrackermysql.herokuapp.com/api/closuredata/?statename=${state.data[0].statename}`).then(closures => {
                var data = closures.data[0]
                Object.keys(data).forEach((key) => {
                    if (data[key] === "-" || data[key] === "0"){
                        data[key] = "No data available."
                    }
                })

                globalVar.update_stats({title: state.data[0].statename,
                                        "State Of Emergency": data.stateofemergency,
                                        "Stay at Home Mandate": data.stayathome,
                                        "Masks Required": data.masks,
                                        "Quarantine After Travel": data.travelquarantine,
                                        "Gathering Limitations": data.largegatherings
                                        })

                // var data = {
                //     positions: [
                //         {lat: state.data[0].latitude, lng: state.data[0].longitude, weight: closures.data[0].numberfullyvac},
                //     ],
                //     options: {   
                //         radius: 50,   
                //         opacity: 0.6,
                //     }
                // }
                // globalVar.updateHeatMap(data)
            })
        })
    }

    updateHeatMap(abrv) {
        var type = globalVar.app_state
        if (type === "case"){
            this.getCases(abrv)
        }else if (type === "vaccine"){
            this.getVacs(abrv)
        }else if (type === "closure"){
            this.getClosures(abrv)
        }
    }

    handleChange (event) {
        this.updateHeatMap(event.value)

        axios.get(`https://covidtrackermysql.herokuapp.com/api/states/?abrv=${event.value}`).then(response => {
            globalVar.move_center({data: response.data, zoom: 8})
        })
        if (globalVar.app_state === "case"){
            axios.get(`https://covidtrackermysql.herokuapp.com/api/counties/?state=${event.value}`).then(response => {
                this.setState({selected: event.value, counties: response.data, updated: true})
            })
        }else {
            this.setState({counties: []})
        }
      }

    render () {
        if (this.state.selectRef != null){
            
            if (this.state.clear){
                this.setState({value: null, clear: false})
                return null
            }
        }

        const customStyles = {
            control: (base, state) => ({
                ...base,
                background: '#fff',
                borderColor: '#9e9e9e',
                minHeight: '35px',
                height: '35px',
                boxShadow: state.isFocused ? null : null,
              }),

              option: (base) => ({
                ...base,
                color: "black",
              }),
          
              valueContainer: (base) => ({
                ...base,
                height: '38px',
                padding: '0 6px'
              }),
          
              input: (base) => ({
                ...base,
                margin: '0px',
              }),
              indicatorSeparator: base => ({
                display: 'none',
              }),
              indicatorsContainer: (base) => ({
                ...base,
                height: '38px',
              }),
        };
        return (
            <div>
                <div className="dropdown-selector">
                    <Select
                    ref={ref => {
                        this.state.selectRef = ref
                    }}  
                    styles={customStyles}
                    onChange={this.handleChange.bind(this)}
                    options={this.state.selectOptions}
                    />
                </div>
                <div className="dropdown-selector">
                    <SelectCounty updateParent={this.handler} counties={this.state.counties} state={this.state.selected} updated={this.state.updated} />
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.getOptions()

        globalVar.clear_state = () => {
            this.setState({clear: true, counties: []})
        }
    }
}

export default SelectState
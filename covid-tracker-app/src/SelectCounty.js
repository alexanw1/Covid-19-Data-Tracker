import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

import globalVar from './globals'

class SelectCounty extends Component {
    constructor () {
        super()
        this.state = {
            selectRef: null,
            selectOptions: [],
            selected: ""
        }
    }

    getCases(name) {
        globalVar.update_stats({})
        axios.get(`https://covidtrackermysql.herokuapp.com/api/casedata/?stateabvr=${this.props.state}&countyname=${name}`).then(countycases => {
            var caseData = countycases.data[0]
            globalVar.update_stats({title: caseData.countyname.toLocaleString(), "Total Cases": caseData.casesconfirmed.toLocaleString(), "Cases Probable": caseData.casesprobable.toLocaleString(), "Total Deaths": caseData.deathsconfirmed.toLocaleString(), "Deaths Probable": caseData.deathsprobable.toLocaleString()})
        })

        axios.get(`https://covidtrackermysql.herokuapp.com/api/counties/?countyname=${name}&state=${this.props.state}`).then(response => {
            globalVar.move_center({data: response.data, zoom: 12})
        })

        this.setState({value: name})
    }


    handleChange (event) {
        var type = globalVar.app_state
        if (type === "case"){
            this.getCases(event.value)
        }
    }

    render () {
        if (this.state.selectRef != null){
            if (this.props.updated){
                this.props.updateParent()
                this.setState({value: null})
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

        const options = this.props.counties.map(d => ({
            "value" : d.countyname,
            "label" : d.countyname
          }))

        return (
            <div>
                <Select
                    ref={ref => {
                        this.state.selectRef = ref
                    }} 
                    styles={customStyles}
                    onChange={this.handleChange.bind(this)}
                    options={options} />
            </div>
        )
    }
}

export default SelectCounty
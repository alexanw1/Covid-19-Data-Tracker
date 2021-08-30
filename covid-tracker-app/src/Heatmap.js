import React from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios'

import globalVar from './globals'
class Heatmap extends React.Component {
    constructor () {
        super()
        this.state = {
            center: {
                lat: 39,
                lng: -97
            },
            zoom: 4,
            heatMapData: {
                positions: [
                    
                ],
                options: {   
                    radius: 20,   
                    opacity: 0.6,
                }
            }
        }
    }

    apiIsLoaded = (map, maps, lat, lng, zoom) => {
        if (map) {
          const latLng = new maps.LatLng(lat, lng); // Makes a latlng
          map.panTo(latLng);
          map.setZoom(zoom);
        }
      };

    render() {
        console.log(this.state.heatMapData)
        return (
        <GoogleMapReact
            ref={(ref) => {
                this.mapRef = ref
            }}
            bootstrapURLKeys={{ key: "AIzaSyBuE1eYePSbGCivR7z1ko-tngdrPVIHObw" }}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => this.apiIsLoaded(map, maps, this.state.center.lat, this.state.center.lng, this.state.zoom)}
            center={this.state.center}
            zoom={this.state.zoom}
            heatmapLibrary={true}          
            heatmap={this.state.heatMapData}          
            >
            </GoogleMapReact>
        );
    }

    componentDidMount(){
        globalVar.move_center = (map_coord) => {
            const updateCenter = map_coord.data.map(d => ({
                lat : d.latitude,
                lng : d.longitude
            }))
            this.setState({center: updateCenter[0], zoom: map_coord.zoom})
        };

        globalVar.updateHeatMap = (data) => {
            this.setState({heatMapData: data})
        }

        globalVar.backToCenter = (data) => {
            this.setState({center: data.center, zoom: data.zoom})
        }

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

                globalVar.update_stats({title: "U.S Covid Cases", "Total Cases": Total_Cases.toLocaleString(), "Cases Probable": Cases_Probable.toLocaleString(), 
                "Total Deaths": Total_Deaths.toLocaleString(), "Deaths Probable": Deaths_Probable.toLocaleString()})

                var data = {
                    positions: output,
                    options: {   
                        radius: 60,   
                        opacity: 0.6,
                    }
                }
                this.setState({heatMapData: data})
            })
        })
    }
}

export {globalVar}
export default Heatmap
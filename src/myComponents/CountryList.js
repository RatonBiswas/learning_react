import React, { Component } from 'react';
import axios from 'axios';
class CountryList extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }


    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then((response)=>{
            this.setState({ countryData: response.data})
        }).catch((error)=>{
            console.log(error)
        })
    }
    render() {

        const listOfData = this.state.countryData
        const countyName = listOfData.map((listOfData)=>{
            return <li>{listOfData.name}</li>
        })

        return (
            <div>
                <ul>
                    {countyName}
                </ul>
            </div>
        );
    }
}

export default CountryList;
import React, { Component } from 'react';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css"
import axios from 'axios';
class Mytable extends Component {
    constructor(){
        super();
        this.state = {
            countryData: []
        }
    }

    componentDidMount(){
        axios.get('https://covid19.mathdro.id/api/recovered')
        .then((response)=>{
            this.setState({ countryData: response.data})
        }).catch((error)=>{
            console.log(error)
        })
    }
    render() {
        const listOfData = this.state.countryData
        const col = [{Header:"Country name",accessor:"countryRegion"},{Header:"Confirmed",accessor:"confirmed"},{Header:"Recovered",accessor:"recovered"},{Header:"Deaths",accessor:"deaths"},{Header:"Active",accessor:"active"}]
        // const col = [{Header:"Country name", accessor : "name"},{Header:"Capital name", accessor : "capital"},{Header:"Population", accessor : "population"},{Header:"Region", accessor : "region"},]
        return (
            <div>
                <ReactTable
                    data={listOfData}
                    columns={col}
                    defaultPageSize={14}
                    pageSizeOptions={[2,4,6,8,10]}
                />
            </div>
        );
    }
}

export default Mytable;
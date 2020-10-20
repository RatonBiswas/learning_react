import React, { Component } from 'react';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css"
class Mytable extends Component {
    render() {
        const dataTable = [{
            name: "Raton Nana",
            age: "18"
        },{
            name: "emon Nana",
            age: "19"
        },{
            name: "lokman Nana",
            age: "8"
        },{
            name: "forhan Nana",
            age: "12"
        },{
            name: "riya Nana",
            age: "83"
        },{
            name: "disaa Nana",
            age: "48"
        },{
            name: "dhoni Nana",
            age: "0"
        },{
            name: "mona Nana",
            age: "45"
        },{
            name: "montu Nana",
            age: "120"
        }
    ]
    const col = [{Header:"Name", accessor : "name"},{Header:"Age", accessor : "age"}]
        return (
            <div>
                <ReactTable
                    data={dataTable}
                    columns={col}
                    defaultPageSize={5}
                    pageSizeOptions={[2,4,6,8,10]}
                />
            </div>
        );
    }
}

export default Mytable;
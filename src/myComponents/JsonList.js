import React, { Component } from 'react';

class JsonList extends Component {

    

    render() {
        const myJsonData = [
            {
                name: 'Raton Nana',
                home: 'Nayergaon',
                age: '20'
            },
            {
                name: 'Emon Aurko',
                home: 'Chittagong',
                age: '23'
            },
            {
                name: 'Farhan Islam',
                home: 'Cumilla',
                age: '26'
            },
            {
                name: 'Lakshman Gope',
                home: 'Shylet',
                age: '22'
            }
        ];

        const dataItems = myJsonData.map((data)=>{
        return <option>{data.name}</option>
        })
        return (
            <div>
                <select>{dataItems}</select>
            </div>
        );
    }
}

export default JsonList;
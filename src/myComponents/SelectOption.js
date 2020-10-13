import React, { Component } from 'react';

class SelectOption extends Component {
    constructor(){
        super();
        this.state = {
            city1: 'Dhaka',
            city2: 'Rangpur',
            city3: 'Chittagong',
            city4: 'Barishal',
        }
    }
    render() {
        return (
            <div>
                <select value = {this.state.city2}>
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                </select>
            </div>
        );
    }
}

export default SelectOption;
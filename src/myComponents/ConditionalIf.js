import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class MyConditon extends Component{
    constructor() {
        super()
        this.state = {
            login:true
        }
    }

    render() {
        if(this.state.login!=true){
            return(<button class="btn btn-success m-5">Sign Out</button>)
        }else{
            return(<button class="btn btn-info m-5">Sign In</button>)
        }
    }
}

export default MyConditon
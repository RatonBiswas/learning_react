import React ,{Component} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class ReactSetState extends Component{
    constructor(){
        super()

        this.state = {
            name: 'Raton Nana'
        }

    }

    changeName(a){
        this.setState({name: a})
    }

    render(){
        return <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeName.bind(this, 'Raton Morningstar')} className="btn btn-primary m-5">Change Name</button>
        </div>
    }
}

export default ReactSetState
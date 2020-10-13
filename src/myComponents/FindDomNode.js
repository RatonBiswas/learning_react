import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
class FindDomNode extends Component {

    cngImg(){
        var img = document.getElementById("myId");
        ReactDOM.findDOMNode(img).src="https://www.clipartkey.com/mpngs/m/84-849045_transparent-siberian-tiger-clipart-jumping-tiger-png.png"
    }
    render() {
        return (
            <div>
                <button onClick={this.cngImg}>Jump</button><br></br>
                <img id="myId" src="https://lh3.googleusercontent.com/proxy/7CUXjza63-c8VR6shhSZ9xO77EI3CXPXWKbkhiA1Fj167NiczgEJRtlPJOsJOdVrjo0byZDqJa-dPqaNN6v7CudyE3-Euoh_mEWKV0rbCRpQiG1OGv9X4zxWStw"></img>
            </div>
        );
    }
}

export default FindDomNode;
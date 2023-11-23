import React, { Component, PureComponent} from 'react'

class PureComponentExample extends PureComponent {
    constructor(){
        super();
        this.state={
            data: 10
        }
    }
    render() {
        console.log("cheking render", this.state)
        return (
            <div>
                Pure Component {this.state.data}
                <button onClick={()=>{this.setState({data : 20})}}>Update State</button>
            </div>
        )
    }
}
export default PureComponentExample;

import React, { Component } from 'react'

class Counter1 extends Component {
  
  render() {
    if(this.props.value > 3){
        throw new Error('To many counts .....')
        
    }
    return (
      <div style={{alignItems:'center'}}>
        <h2>Counter1 is :{this.props.value} </h2>
        <button onClick={this.props.onClick}>Add</button>
      </div>
    )
  }
}
export default Counter1

import React, { Component } from 'react'

 class Counter2 extends Component {
  render() {
    return (
        <div style={{alignItems:'center'}}>
        <h2>Counte2 is : {this.props.value}</h2>
        <button onClick={this.props.onClick}>Add</button>
      </div>
    )
  }
}
export default Counter2

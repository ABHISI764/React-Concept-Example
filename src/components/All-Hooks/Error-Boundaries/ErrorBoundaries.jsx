import React, { Component } from 'react'

class ErrorBoundaries extends React.Component {
    state ={
        error : ''
    }
   static getDerivedStateFromError(error){
        return {
            error : error
        }
    }
    componentDidCatch(error, info){
        console.log("eroor is ", error)
        console.log("Info is ", info)

    }
    render(){
        if(this.state.error){
            return(
                <div>
                    <h2>some error occured</h2>
                </div>
            )
        }
        return this.props.children;
    }
}
export default ErrorBoundaries;

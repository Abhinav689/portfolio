import './Heroimg4.css'
import React, { Component } from 'react'

class Heroimg4 extends Component{

render(){

    return (
        <div className='hero-img4'>
            <div className='heading2'>
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
    
    
            </div>
        </div>
      )
    }
    


}
export default Heroimg4
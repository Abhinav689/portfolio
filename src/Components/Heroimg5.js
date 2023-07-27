import './Heroimg5.css'
import React, { Component } from 'react'

class Heroimg5 extends Component{

render(){

    return (
        <div className='hero-img5'>
            <div className='heading3'>
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
    
    
            </div>
        </div>
      )
    }
    


}
export default Heroimg5
import './Heroimg.css'
import React from 'react'
import pic1 from '../assests/pic1.jpg'
import { Link } from 'react-router-dom'

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'> 
        <img className='pic1' src={pic1} alt='pic1' />
        </div>
        <div className='content'>
            <p>Hello , I'm Abhinav Ys</p>
            <h1>Student</h1>
                 <Link to='/experience' className='btn'> 
                Experience               
                </Link>
                <Link to='/contactme' className=' btn btn-light'> 
                Contact           
                </Link>
                <div>
            </div>
        </div>
      
    </div>
  )
}

export default Heroimg

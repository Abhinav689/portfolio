import { Link } from 'react-router-dom'
import './Aboutcontent.css'
import React from 'react'
import logo4 from './html.png'
import logo5 from './logo4.jpg'


const Aboutcontent = () => {
  return (
    <div className='about'>
   <div className='left'>
    <h1>My Technical Skills</h1>
    <p>
Im a web-page devloper.
 I make responsive webpages for many start-up companies.
    I have a good knowledge in HTML,CSS,JavaScript and ReactJs.
</p>
<Link to='/Experience'>
    <button className='btn'>Next</button>
</Link>
    </div>
    <div className='right'>
    <div className='img-container'>
    <div className='image-stack top'>
<img src={logo5} alt='true' className='img'/>
</div>
<div className='image-stack bottom'>
<img src={logo4} className="img"alt='true'/>
</div>

    </div>
    </div>
    </div>

  )
}

export default Aboutcontent

import React from 'react'
import logo from './logo1.png'
import logo1 from './logo2.png'
import logo2 from './logo3.png'

import './herocard.css'
import { NavLink } from 'react-router-dom'
const herocard = () => {
  return (
    <div className='work-container'>
 <div className='project-container'>
        <div className='project-card'>
<img src={logo} alt='' />
<h2 className='project-title'>Booking Website</h2>
<div className='pro-details'>
    <p>Enjoy your show</p>
    <div className='pro-btns'>
    <div className='btns'>
<NavLink to ="https://shorturl.at/HOWY0" className="btn">Book</NavLink>
<NavLink to ="https://github.com/Abhinav689/webpage" className="btn">Code</NavLink>


</div>
</div>
    
</div>
        </div>
         <div className='project-card'>
<img src={logo1} alt='' />
<h2 className='project-title'>Contact form</h2>
<div className='pro-details'>
    <p>This collects and store</p>
    <p>your Contacts.</p>
    <p>Can add and delete </p>
    <p>your Contacts</p>
    <div className='pro-btns'>
    <div className='btns'>
<NavLink to ="https://abhinav689.github.io/contactform/" className="btn">explore</NavLink>
<NavLink to ="https://github.com/Abhinav689/contactform" className="btn">Code</NavLink>


</div>
</div>
    
</div>

</div>
<div className='project-card'>
<img src={logo2} alt='' />
<h2 className='project-title'>My Portfolio</h2>
<div className='pro-details'>
    
    <div className='pro-btns'>
    <div className='btns'>
<NavLink to ="/" className="btn">explore</NavLink>
<NavLink to ="/" className="btn">Code</NavLink>


</div>
</div>
    
</div>

</div>
     </div>
    </div>
    
    
  )
}

export default herocard

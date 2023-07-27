import './Footer.css'
import React from 'react'
import { FaGithub, FaHome ,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome  size={20} style={{color:'#fff', marginRight:'2rem'}}/>
                
                <div>
<p>88/A 89/A Balaji Residency SR Nagar</p>

<p>Hyderabad</p>


</div>
</div>
<div className='phone'>
    <h4> <FaPhone  size={20} style={{color:'#fff', marginRight:'2rem'}}/>
8374772478</h4>

</div>
<div className='email'>
    <h4> <FaMailBulk  size={20} style={{color:'#fff', marginRight:'2rem'}}/>
abhinavsai689@gmail.com</h4>

</div>
</div>

<div className='right'>
    <h4>Check More About Me</h4>
    <div className='icons'>
    <a href='https://twitter.com/home'><FaTwitter  size={30} style={{color:'#fff', marginRight:'1rem'}}/></a>
    <a href='https://github.com/Abhinav689'><FaGithub  size={30} style={{color:'#fff', marginRight:'1rem'}}/></a>
    <a href='https://www.linkedin.com/in/abhinav-ys/'><FaLinkedin  size={30} style={{color:'#fff', marginRight:'1rem'}}/></a>
    </div>
</div>

        </div>
      
    </div>
  )
}

export default Footer

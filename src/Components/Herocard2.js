import React from 'react'
import logo6 from './school.jpg'
import logo7 from './college.jpg'
import logo8 from './btech.jpg'
import './Herocard2.css'


const Herocard2 = () => {
  return (
    <div className='work-container'>
 <div className='project-container'>
        <div className='project-card'>
<img src={logo6} alt='true' />
<h2 className='project-title'>D.A.V Public School (2010-2018)</h2>
<div className='pro-details'>
    <p>Got Overall percentage 87% in 10th board exam.</p>
    <p>I have balanced my academics with a variety of extracurricular activities like:</p>
    <div className='tab'>
    <ol type='I'>
    
        <li> Cricket</li>
        <li> Badminton</li>
        <li>Skating</li>
        <li>Piano</li>
        <li>Chilling Out with Friends</li>
        <li>Exploring Mobile Games</li>
    </ol>
    </div>

    
</div>
        </div>
         <div className='project-card'>
<img src={logo7} alt='true' />
<h2 className='project-title'>Sri Chaitanya Junior College-Intermediate (2018-2020)</h2>
<div className='pro-details'>
    <p>Passed Intermediate with 94.7%</p>
    <div className='tab'>
    <ol type='I'>
        <li>Qualified JEE-MAINS with 95.7 percentile</li>
        <li>Qualified EAMCET with 6721 Rank</li>
        <li>Attended many Hackathons </li>
        <li>Have a Good knowledge in Mathematics</li>
        <li>Instrested and performed Many chemistry Lab experiments</li>
     
    </ol>
    </div>

    
</div>

</div>
<div className='project-card'>
<img src={logo8} alt='true' />
<h2 className='project-title'>JNTUH College(2020-2025) </h2>
<div className='pro-details'>
    <p>I'm now pursuing my B.Tech 4th year in Mechanical Engineering with an M.Tech in Thermal Engineering. </p>
    <p>My Achievments Till 4th yr are:</p>
    <div className='tab2'>
    <ol type='I'>
        <li>Attended BIW Engine Design Workshop 4th yr </li>
        <li>Completed My Intern on Design of Turbines in 3rd yr</li>
        <li>Attended Job mela fair in 2nd year</li>
        <li>Researching about my college and its facilities in 1st yr</li>
    </ol>
    </div>

    

    
</div>

</div>
     </div>
    </div>
    
    
  )
}

export default Herocard2


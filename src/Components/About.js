import React from 'react'
import Navbar from "./Navbar";
import Footer from './Footer';
import Heroimg5 from './Heroimg5';
import Aboutcontent from './Aboutcontent';

const About = () => {
  return (
    <div>
       <Navbar />
 <Heroimg5  heading="Im a Student" text="Scroll down to know better about me."/>
 <Aboutcontent />
 <Footer />
    </div>
  )
}

export default About

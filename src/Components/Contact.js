import React from 'react'
import Navbar from "./Navbar";
import Footer from './Footer';
import Heroimg3 from './Heroimg3';
import Form from './Form';


const Contact = () => {
  return (
    <div>
       <Navbar />
 <Heroimg3 heading="CONTACT ME" text="Lets have a chat" />
 <Form /> 
 <Footer />
    </div>
  )
}

export default Contact

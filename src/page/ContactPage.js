import React from 'react'
import Home from '../Component/Home'
import'./contact.css'
import { Form } from 'react-router-dom'




export default function ContactPage() {
  return (
   
   
   <div>

<section> 
  
  <div className='my-name'>


  
    <div> 
     <div className='contant'><span><img src='./profile.png' className='profile'/> <p className='dtail'>Name</p>  </span></div>
    <div className='tab'> <p> P.H.DILSHAN UDARAKA  RANATHUNGA </p></div>
    </div>

    <div>
    <div className='contant'><span><img src='./placeholder.png' className='profile'/> <p className='dtail'>Addrasess</p>  </span></div>
    <div className='tab' >NO.45, SINHASIRIPURA, MADURUKATIYA, MONARAGALA</div>
    </div>

    <div>
    <div className='contant'><span><img src='./gmail.png' className='profile'/> <p className='dtail'>Email</p>  </span></div>
    <div className='tab' > durdilshanudara29@gmail.com </div>
    </div>
   
    <div>
    <div className='contant'><span><img src='./phone-call.png' className='profile'/> <p className='dtail'>Contact number</p>  </span></div>
    <div className='tab'>0728185088</div>
    </div>
    </div>


    <span >
  <div className='massage' >
 <form className='send-massage'>
<h2>Contact For Me</h2>
  <input type='text' id=' First Name' placeholder=' Your First Name' className='contact-box'></input>
  <input type='text' id='Second Name' placeholder='Your Second Name' className='contact-box' ></input>
  <input type='text' id=' Email' placeholder=' Your Email'  className='contact-box'></input>
  <input type='text' id=' Phon Number' placeholder=' Your Phon Number' className='contact-box' ></input>
 <h3 >Type Your Message Here ....</h3>
<textarea className='contact-text-box'></textarea>
<button className='submit'> send</button>

 </form>

</div>

</span>

</section>



        <Home/>
    </div>
  )
}

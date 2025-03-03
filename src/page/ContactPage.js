import React from 'react'
import Home from '../Component/Home'
import'./contact.css'


export default function ContactPage() {
  return (
   
   
   <div>

<section> 
  
  <div className='my-name'>


  
    <div> 
     <div className='contant'> <p className='dtail'>Name</p>  </div>
    <div className='tab'> <p> P.H.DILSHAN UDARAKA  RANATHUNGA </p></div>
    </div>

    <div>
    <div className='contant'> <p className='dtail'>Addrasess</p> </div>
    <div className='tab' >NO.45, SINHASIRIPURA, MADURUKATIYA, MONARAGALA</div>
    </div>

    <div>
    <div className='contant'><p className='dtail'>Email</p> </div>
    <div className='tab' > durdilshanudara29@gmail.com </div>
    </div>
   
    <div>
    <div className='contant'> <p className='dtail'>Contact number</p>  </div>
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

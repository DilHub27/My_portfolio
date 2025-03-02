import React from 'react'
import Home from '../Component/Home'
import'./educationalpage.css'

export default function EducationalPage() {
  return (
    <div>
   
 <section className='mainone'>

  
<div className='main-title'>

<span className='line'></span>

<h2 className='name'>My Educational Background </h2>
<div className='title'>
<p>Primary education <span className='date1'>Jan 2005 - Dec 2016 </span> </p> 
<p>Mo/Royal Collage </p>
<p>Monaragala</p>  </div>


<div className='title'> 
<p>Secondary education <span className='date2'>Mar 2017 - Dec 2019 </span> </p>
<p>Mo/Royal Collage </p>
<p>Monaragala</p>  </div>


<div className='title'> 
<p>Undergraduate <span className='date3'> Mar 2022 - Mar 2026 </span> </p>
<p>Rajarata university of Sri Lanka, </p>
<p>Mihintale </p> </div>
</div>

</section>





<section className='maintwo' >
<div className='main-title'>

<span className='line1'></span>


<h2 className='name'>Advance Qulification </h2>
<div className='title'><p> BSc (Hons) In Information Systems Degree </p></div>
<h2 className='name'>Profiessional Certifications </h2>
<div className='title'> <p>Association of Accounting Technicians (AAT) </p> </div>
<h2 className='name'>Extra activites  certificate </h2>
<div className='title'>
<p> Dancing certificate  </p>
<p>School Cadet Band Certificate   </p>
<p>The Internal School House meet Event certificate </p></div>
</div>
</section>



<Home/>

    </div>
  )
}

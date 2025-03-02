
import './App.css';
import HomePage from './page/HomePage'
import AboutPage from './page/AboutPage'
import EducationalPage from './page/EducationalPage';
import SkillsPage from './page/SkillsPage'
import ContactPage from './page/ContactPage';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Loding from "./Component/Loding"; 
import Home from "./Component/Home";


function App() {

 const [loding, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  return (

   <Router>
<div>
{loding ? <Loding /> : <Home />}


  
<Routes>

{!loding && (<Route exact path=''element={<HomePage/>}/>  )} 

  <Route exact path='/HomePage'element={<HomePage/>} /> 
 
  <Route path ='/AboutPage'element={<AboutPage/>}/>
  
  <Route path='/EducationalPage'element={<EducationalPage/>}/>
   
  <Route path='/SkillsPage'element={<SkillsPage/>}/>
  
 <Route path ='/ContactPage'element={<ContactPage/>}/>


</Routes>

</div>

   </Router>






  )
}


export default App;

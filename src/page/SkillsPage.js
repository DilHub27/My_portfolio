import React from 'react'
import Home from '../Component/Home'
import './skills.css'

export default function SkillsPage() {
  return (
    <div className='main-slills'>
      
      
      <section className='tecSkill'>
        <h2 className='topic-name'>Core Technical Skills</h2>  
        <div className='tchbody'>

          <p>HTML, CSS and JavaScript</p>
          <div className='main-prasentage'><div className='prasentage1' style={{ width: '80%' }}><span className='prsen'>80% </span></div></div>

          <p>CSS Framework</p>
          <div className='main-prasentage'><div className='prasentage2' style={{ width: '60%' }}><span className='prsen'>60% </span></div></div>

          <p>JavaScript Framework & Libraries</p>
          <div className='main-prasentage'><div className='prasentage3' style={{ width: '65%' }}><span className='prsen'>65% </span></div></div>

          <p>Responsive Design</p>
          <div className='main-prasentage'><div className='prasentage4' style={{ width: '50%' }}><span className='prsen'>50%</span></div></div>

          <p>Version Control</p>
          <div className='main-prasentage'><div className='prasentage5' style={{ width: '45%' }}><span className='prsen'>45%</span></div></div>

        </div>
      </section>

     
      <section className='softSkill'>
        <h2 className='topic-name'>Soft Skills & Professional Development</h2>
        <div className='softbody'>

          <p>Problem Solving</p>
          <div className='main-prasentage'><div className='prasentage6' style={{ width: '65%' }}><span className='prsen'>65%</span></div></div>

          <p>Attention to Detail</p>
          <div className='main-prasentage'><div className='prasentage7' style={{ width: '50%' }}><span className='prsen'>50%</span></div></div>

          <p>Collaboration & Communication</p>
          <div className='main-prasentage'><div className='prasentage8' style={{ width: '70%' }}><span className='prsen'>70%</span></div></div>

          <p>Time Management</p>
          <div className='main-prasentage'><div className='prasentage9' style={{ width: '60%' }}><span className='prsen'>60%</span></div></div>

          <p>Continuous Learning</p>
          <div className='main-prasentage'><div className='prasentage10' style={{ width: '65%' }}><span className='prsen'>65%</span></div></div>

        </div>
      </section>

      <Home />
    </div>
  )
}

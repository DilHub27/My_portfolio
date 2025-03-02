import React from 'react';
import Home from '../Component/Home';
import './About.css';

export default function AboutPage() {
  return (
    <div className='about-container'>
      <div className='mypicture'>
        <h1 className='about-me'>About Me</h1>
        <div className='cecale'>
    <img src='4.jpg' className='image' alt='Profile' />
        </div>
        <div className='explain-me'>
          <p>I am Dilshan Udaraka Ranathunga, currently pursuing a BSc (Hons) in Information Systems at Rajarata University of Sri Lanka.</p>
          <p>Passionate about technology and innovation, I have a keen interest in software development, data analytics, and IT management.</p>
      <p>My academic journey has equipped me with strong technical skills, problem-solving abilities, and a deep understanding of enterprise IT solutions.</p>
          <p>With a drive for continuous learning and professional growth, I am eager to apply my knowledge in real-world projects, contribute to the evolving tech industry, and advance my career in IT management and system development.</p>
        </div>
      </div>

      <div className='my-info'>
        <table>
          <tr>
            <th>Name</th>
            <th>ID Number</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Civil Status</th>
          </tr>
          <tr>
            <td>P.H. DILSHAN UDARAKA RANATHUNGA</td>
            <td>200011800229</td>
            <td>2000/04/27</td>
            <td>No 45, Sinhasiripura, Maduruketiya, Monaragala</td>
            <td>Unmarried</td>
          </tr>
        </table>
      </div>
      <Home />
    </div>
  );
}

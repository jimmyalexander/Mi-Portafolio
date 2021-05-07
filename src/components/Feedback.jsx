import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Feedback = () => {
  useEffect(() => {
    AOS.init({
    duration:1000
    })
}, [])
  

  return (
    <div>
      <div data-aos="fade-up" className='feedback_container'>
      <h2>FEEDBACK</h2>
      <div className='feedback'>
        <div className="feedback_img">
          <img src="https://pbs.twimg.com/profile_images/1248766401034190848/k1qOv_rp_400x400.jpg" alt="freddy"/>
        </div>

        <div className="feedback_info">
          <strong>"Jimmy Alexander es un trabajador comprometido y muy profesional. Sus skills como desarrollador 
                  Frontend le permiten resolver problemas de manera eficiente"</strong>
          <p><a target='blank' href="https://www.linkedin.com/in/fredy-bustos/">Fredy Bustos</a>/ Frontend Enginner at Resuelve tu Deuda</p>
        </div>
      </div>
    </div>
    </div>
  )
}

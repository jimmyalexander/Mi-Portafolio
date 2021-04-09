import React from 'react'

export const Feedback = () => {
  return (
    <div className='feedback_container'>
      <h2>Testimonios</h2>
      <div className='feedback'>
        <div className="feedback_img">
          <img src="https://pbs.twimg.com/profile_images/1248766401034190848/k1qOv_rp_400x400.jpg" alt="freddy"/>
        </div>

        <div className="feedback_info">
          <strong>"Jimmy Alexander es un trabajador comprometido y muy profesional. Sus skills como desarrollador 
                  Frontend le permiten resolver problemas de manera eficiente"</strong>
          <p>Frontend Enginner at Resuelve tu Deuda</p>
        </div>
      </div>
    </div>
  )
}

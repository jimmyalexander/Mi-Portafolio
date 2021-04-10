import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../containers/UserContext'

export const Feedback = () => {
  const [aparicion, setAparicion] = useState(0)
  const {scroll} = useContext(UserContext)
  const refi = useRef(null)

  useEffect(() => {
    setAparicion(refi.current.offsetTop - 400)
  }, [] )

  

  return (
    <div>
      <div ref={refi} className={ scroll >= aparicion? 'feedback_container': 'feedback_container opacity'}>
      <h2>Testimonios</h2>
      <div className='feedback'>
        <div className="feedback_img">
          <img src="https://pbs.twimg.com/profile_images/1248766401034190848/k1qOv_rp_400x400.jpg" alt="freddy"/>
        </div>

        <div className="feedback_info">
          <strong>"Jimmy Alexander es un trabajador comprometido y muy profesional. Sus skills como desarrollador 
                  Frontend le permiten resolver problemas de manera eficiente"</strong>
          <p>Fredy Bustos / Frontend Enginner at Resuelve tu Deuda</p>
        </div>
      </div>
    </div>
    </div>
  )
}

import React, { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';


export const SobreMi = () => {
  useEffect(() => {
    AOS.init({
    duration:1000
    })
}, [])
  

  return (
    <div id='sobre-mi'>
      <section data-aos="fade-up"   className='sobre__mi' >
        <h2>SOBRE MI</h2>
        <h3>Frontend Developer</h3>
        <p className='description'>
          Hola! Mi nombre es Jimmy Alexander Castiblanco, amante a la tecnologia. Estudiante y trabajador actualmente ,
          empece de lleno en le mundo de la programación en el año 2018 donde me propuse ser Frontend Developer, <br /> 
          <br />
          Quiero llegar a ser uno de 
          los mejores desarrolladores frontend, me gusta jugar  futbol y  videojuegos,  amo la vida que tengo y mi
          familia.          
        </p>        
      </section>
    </div>
  )
}

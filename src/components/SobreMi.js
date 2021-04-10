import React, { useContext, useEffect, useRef, useState } from 'react'
import {  mdiGithub,mdiReact, mdiLanguageJavascript, mdiLanguageCss3, mdiLanguageHtml5, mdiBootstrap, mdiSass } from '@mdi/js';
import Icon from '../components/Iconos';
import { UserContext } from '../containers/UserContext';


export const SobreMi = () => {
  const [aparicionSobre, setAparicionSobre] = useState(0)

  const {scroll,setScroll} = useContext(UserContext)
  const refiSobre = useRef(null)

  useEffect(() => {
    setAparicionSobre( refiSobre.current.offsetTop - 400)
  }, [] )
  
  window.onscroll = function() {
    setScroll( window.scrollY );
  };
  

  return (
    <div>
      <section ref={refiSobre}  id='sobre-mi' className={ scroll >= aparicionSobre ? 'sobre__mi' : 'sobre__mi  opacity' } >
        <h2>Sobre mi</h2>
        <h3>Frontend Developer</h3>
        <p className='description'>
          Hola! Mi nombre es Jimmy Alexander Castiblanco, Colombiano emprendedor. Estudiante de Platzi actualmente ,
          empece de lleno en le mundo de la programación en el año 2018, <br /> 
          <br />
          Quiero llegar a ser uno de 
          los mejores desarrolladores frontend, me gusta jugar  futbol y  videojuegos,  amo la vida que tengo y mi
          familia.          
        </p>
        <h3>Habilidades y Conocimientos:</h3>
        <div   className='container__habilidades'>
          <Icon title='REACT' className='iconos' icon={mdiReact} color='cyan' />
          <Icon title='JAVASCRIPT' className='iconos' icon={mdiLanguageJavascript} color='yellow' />
          <Icon title='CSS3' className='iconos' icon={mdiLanguageCss3} color='#00BFFF' />
          <Icon title='HMTL5' className='iconos' icon={mdiLanguageHtml5} color='red'/>
          <Icon title='BOOTSTRAP' className='iconos' icon={mdiBootstrap } color='purple'/>
          <Icon title='SASS' className='iconos' icon={mdiSass} color='#ff44dd'/>
          <Icon title='GITHUB' className='iconos' icon={mdiGithub} />
        </div>
      </section>
    </div>
  )
}

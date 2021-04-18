import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import salon from '../assets/static/salon.jpeg';
import countries from '../assets/static/countries.jpeg';
import df from '../assets/static/df.png';


export const Proyectos = () => {
  useEffect(() => {
    AOS.init({
    duration:1000,
    delay: 200, 
    })
}, [])



  
  return (
    <div id='proyectos'>
      <section  data-aos="fade-up"  className='proyectos' >
        <h2>PORTAFOLIO</h2>
          <div className='proyectos_container'>

          <div data-aos="fade-up" className='proyectos_item'>
              <img src={df} alt='salon' />
              <div className='proyectos_item-info'>
                <h3 className='proyecto_item-titulo'>Disfrutas</h3>
                <p>Una tienda virtual donde podras encontrar productos 
                    como frutas y verduras entre otros.
                </p>
                <div className='proyecto_enlaces'>
                  <a target='blank' href='https://jimmyalexander.github.io/tienda/' >VER PROYECTO</a>
                  <a target='blank' href='https://jimmyalexander.github.io/tienda/' >VER CODIGO</a>
                </div>
              </div>
            </div>

            
            <div data-aos="fade-up" className='proyectos_item'>
              <img src={salon} alt='salon' />
              <div className='proyectos_item-info'>
                <h3 className='proyecto_item-titulo'>SALON DE EVENTOS</h3>
                <p>Un sitio web donde se muestra los servicios prestados por
                  una casa de eventos para toda la familia.
                </p>
                <div className='proyecto_enlaces'>
                  <a target='blank' href='https://jimmyalexander.github.io/salon-eventos/' >VER PROYECTO</a>
                  <a target='blank' href='https://github.com/jimmyalexander/salon-eventos' >VER CODIGO</a>
                </div>
              </div>
            </div>


            <div data-aos="fade-up" className='proyectos_item'>
              <img src={countries} alt='countries' />
              <div className='proyectos_item-info'>
                <h3 className='proyecto_item-titulo'>COUNTRIES</h3>
                <p>Encontraras detalles de los paises en cada continente
                  y algunos lugares en cada uno de ellos.
                </p>
                <div className='proyecto_enlaces'>
                  <a target='blank' href='https://jimmyalexander.github.io/countries/' >VER PROYECTO</a>
                  <a target='blank' href='https://github.com/jimmyalexander/countries' >VER CODIGO</a>
                </div>
              </div>
            </div>            
          </div>
       </section>
    </div>
  )
}

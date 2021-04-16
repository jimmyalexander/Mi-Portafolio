import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import logo_rick from '../assets/static/RandM.png';
import salon from '../assets/static/salon.jpeg';
import countries from '../assets/static/countries.jpeg';


export const Proyectos = () => {
  useEffect(() => {
    AOS.init({
    duration:1000,
    delay: 200, 
    })
}, [])



  
  return (
    <div>
      <section  data-aos="fade-up"  className='proyectos' id='proyectos'>
        <h2>PORTAFOLIO</h2>
          <div className='proyectos_container'>

            <div data-aos="fade-up" className='proyectos_item'>
              <img src={logo_rick} alt='rick' />
              <div className='proyectos_item-info'>
                <h3 className='proyecto_item-titulo'>RICK AND MORTY</h3>
                <p>Es un sitio web donde podras ver todos los personajes 
                  de la series de Rick and Morty y consultar algunos datos
                  curiosos.
                </p>
                <div className='proyecto_enlaces'>
                  <a target='blank' href='https://jimmyalexander.github.io/RickandMorty/' >VER PROYECTO</a>
                  <a target='blank' href='https://github.com/jimmyalexander/RickandMorty' >VER CODIGO</a>
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

import React, { useContext, useEffect, useRef, useState } from 'react'
import logo_rick from '../assets/static/RandM.png'
import salon from '../assets/static/salon.jpeg'
import countries from '../assets/static/countries.jpeg'
import { UserContext } from '../containers/UserContext'


export const Proyectos = () => {
  const [aparicion, setAparicion] = useState(0)
  const refi = useRef(null)
  const {scroll} = useContext(UserContext)

  useEffect(() => {
    setAparicion(refi.current.offsetTop - 300)
  }, [] )

  
  return (
    <div>
      <section ref={refi} className={ scroll >= aparicion ? 'proyectos': 'proyectos opacity' }id='proyectos'>
        <h2>Proyectos</h2>
          <div className='proyectos_container'>

            <div className='proyectos_item'>
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
            <div className='proyectos_item'>
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
            <div className='proyectos_item'>
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

import React from 'react'
import logo_rick from '../assets/static/RandM.png'

export const Proyectos = () => {
  return (
    <div>
      <section className='proyectos' id='proyectos'>
        <h2>Proyectos</h2>
          <div className='proyectos_container'>
            <div className='proyectos_item'>
              <img src={logo_rick} alt='rick' />
              <div className='proyectos_item-info'>
                <p className='proyecto_item-titulo'>RICK AND MORTY</p>
                <a href='https://jimmyalexander.github.io/RickandMorty/' >IR A RICK </a>
              </div>
            </div>
            <div className='proyectos_item'>
              <img src='https://cdn.dribbble.com/users/1099065/screenshots/11013914/instagramstoryad_2x.jpg' alt='dribble' />
              <div className='proyectos_item-info'>
                <p className='proyecto_item-titulo'>CLON DRIBBLE</p>
                <a href='/' >IR A DRIBBLE</a>
              </div>
            </div>
            <div className='proyectos_item'>
              <img src='https://www.lurebogota.com/wp-content/uploads/2018/07/Massima-1-of-1-49.jpg' alt='pizza' />
              <div className='proyectos_item-info'>
                <p className='proyecto_item-titulo'>PIZZABORES</p>
                <a href='/' >IR A PIZZABORES</a>
              </div>
            </div>
            <div className='proyectos_item'>
              <img src='https://i.pinimg.com/originals/18/da/63/18da637b683dbdadb84434b487e4942f.jpg' alt='fruver' />
              <div className='proyectos_item-info'>
                <p className='proyecto_item-titulo'>DISFRUTAS</p>
                <a href='/' >IR A DISFRUTAS</a>
              </div>
            </div>
          </div>
       </section>
    </div>
  )
}

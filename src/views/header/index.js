import React from 'react'
import { mdiTwitter, mdiGithub, mdiLinkedin } from '@mdi/js'
import logo from '../../assets/me.jpg'
import Icon from '../../components/icon'


const Header = () => {
  return (
    <section className='main'>
      <h2 className='subtitle'>Jimmy Alexander</h2>
      <h1 className='title'>
        Desarrollador frontend Javascript React y más...
      </h1>
      <div className="contenido">
          <p className='description'>
            Hola! Mi nombre es Jimmy alexander, Colombiano emprendedor. Estudiante de Platzi actualmente con conocimientos
            en de HTML, CSS y JS y un poco de React aunque quiero seguir aprendiendo mucho mas me gustaria ser uno de 
            los mejores desarrolladores frontend, me gusta jugar al futbol y los videojuegos,  amo la vida que tengo y mi
            familia.
          </p>
          <figure className='image'>
            <img src={logo} alt='profile' />
          </figure>
      </div>
      <ul className='list'>
        <li className='list-item'>
          <Icon icon={mdiTwitter} color='cyan' />
          <a href='#' className='list-item-link'>
            Twitter
          </a>
        </li>
        <li>
          <Icon icon={mdiGithub} />
          <a href='#'>Github</a>
        </li>
        <li>
          <Icon icon={mdiLinkedin} color='#000099' />
          <a href='#'>Linkedin</a>
        </li>
      </ul>
      <footer>© 2020, Built with ❤︎ by Jimmy Castiblanco</footer>
    </section>
  )
}
export default Header

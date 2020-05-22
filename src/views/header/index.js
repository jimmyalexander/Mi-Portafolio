import React from 'react'
import { mdiTwitter, mdiGithub, mdiLinkedin } from '@mdi/js'

import Icon from '../../components/icon'

const Header = () => {
  return (
    <section className='main'>
      <h2 className='subtitle'>Fredy</h2>
      <h1 className='title'>
        Desarrollador frontend Javascript React y más...
      </h1>
      <p className='description'>
        Hola! Mi nombre es Fredy Bustos. De Colombia. Desarrolador en javascript
        con conocimientos en librearias como React, React Native, GraphQL con
        Apollo. Librerias como Material UI, Styled Components y un poco más. Me
        gusta escuchar musica. Amo la vida, mi esposa y mis hijos.
      </p>
      <figure className='image'>
        <img src='#' alt='profile' />
      </figure>
      <ul className='list'>
        <li className='list-item'>
          <Icon icon={mdiTwitter} color='red' />
          <a href='#' className='list-item-link'>
            Twitter
          </a>
        </li>
        <li>
          <Icon icon={mdiGithub} />
          <a href='#'>Github</a>
        </li>
        <li>
          <Icon icon={mdiLinkedin} />
          <a href='#'>Linkedin</a>
        </li>
      </ul>
      <footer>© 2020, Built with ❤︎ by Fredy Bustos</footer>
    </section>
  )
}
export default Header

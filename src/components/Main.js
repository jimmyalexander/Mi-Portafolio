import React from 'react';
import { mdiTwitter, mdiGithub, mdiLinkedin} from '@mdi/js';

import logo from '../assets/static/me.jpg';
import Icon from '../components/Iconos';
import { Navbar } from './Navbar';

export const Main = () => {
  return (
    <div>
      <section className='main'>
      <Navbar />
      
        <figure className='container__img'>
          <img src={logo} alt='me' />
        </figure>
        <div className='main__content'>
        <div><strong>Hola,</strong>soy Jimmy Alexander</div>
        <h1 className='title'>
          Frontend Developer
        </h1>

        <ul className='list'>
          <li className='list__item'>
            <Icon icon={mdiTwitter}  />
            <a target='blank'  href='https://twitter.com/jkastiblanco'>
              Twitter
            </a>
          </li>
          <li>
            <Icon  icon={mdiGithub} />
            <a target='blank' href='https://github.com/jimmyalexander'>Github</a>
          </li>
          <li>
            <Icon icon={mdiLinkedin}  />
            <a target='blank' href='https://www.linkedin.com/in/jimmy-alexander-castiblanco-bustos-6a32191aa/'>Linkedin</a>
          </li>
        </ul>
        </div>
      </section>
    </div>
  )
}

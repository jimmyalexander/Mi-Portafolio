import React from 'react';
import { mdiTwitter, mdiGithub, mdiLinkedin,mdiArrowDownCircle} from '@mdi/js';

import logo from '../assets/static/me.png';
import Icon from '../components/Iconos';
import { Navbar } from './Navbar';

export const Main = () => {
  return (
    <div>
      <section className='main'>
        <Navbar />

        <div className='container_main-data'>
            <figure className='container__img'>
              <img src={logo} alt='me' />
            </figure>
            <div className='main__content '>
              <div className='saludo'><strong>Hola,</strong>soy Jimmy Alexander</div>
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
        </div>
        <a href='#sobre-mi'><Icon title='lower'  size={1.5} className='main_icon-row' color='white' icon={ mdiArrowDownCircle } /></a>
      </section>
    </div>
  )
}

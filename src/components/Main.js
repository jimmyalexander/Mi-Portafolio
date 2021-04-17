import React from 'react';
import { mdiTwitter, mdiGithub, mdiLinkedin,mdiArrowDownCircle, mdiMonitor, mdiCodeJson} from '@mdi/js';

import video from '../assets/static/video.mp4';
import Icon from '../components/Iconos';
import { Navbar } from './Navbar';

export const Main = () => {


  return (
    <div>
      <section className='main'>
        <Navbar />

        <div className='container_main-data'>
            <div className='container__img'>
              <video  autoPlay loop muted>
                <source src={video } type="video/mp4" />
              </video>
            </div>
            <div className='blend'></div>

            <div className='main__icon'>
              <Icon icon={  mdiMonitor }  size='150' color='white'  />
              <Icon className='main__icon-code' icon={  mdiCodeJson } color='#ea4c89' size='40'   />
            </div>

            <div className='main__content '>
              <div className='saludo'><strong>Hola,</strong>soy Jimmy Alexander</div>
              <h1 className='title'>
                Frontend Developer
              </h1>

              <ul className='list'>
                <li className='list__item'>
                  <Icon icon={mdiTwitter} color='white'  />
                  <a target='blank'  href='https://twitter.com/jkastiblanco'>
                    Twitter
                  </a>
                </li>

                <li>
                  <Icon  icon={mdiGithub} color='white'/>
                  <a target='blank' href='https://github.com/jimmyalexander'>Github</a>
                </li>

                <li>
                  <Icon icon={mdiLinkedin} color='white'  />
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

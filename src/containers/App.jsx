import React from 'react'
import { mdiTwitter, mdiGithub, mdiLinkedin, mdiReact, mdiLanguageJavascript, mdiLanguageCss3, mdiLanguageHtml5, mdiBootstrap, 
  mdiFormatLineWeight, mdiWindowClose, mdiWhiteBalanceSunny, mdiMoonWaxingCrescent, mdiSass } from '@mdi/js';

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import logo from '../assets/static/me.jpg';
import Icon from '../components/Iconos';

import '../assets/styles/App.scss'
class App extends React.Component {
  state = {
    active: false,
      cambio: false,
      iconoBurguer: `${mdiWindowClose}`,
      iconoSun: `${mdiMoonWaxingCrescent}`
  }
  handleClicked = (e) =>{
    e.preventDefault();
         this.setState({
           cambio: !this.state.cambio
         })
        document.body.classList.toggle('light');
  }
  handleClick = (e) =>{
    e.preventDefault();
         this.setState({
           active: !this.state.active
         })
         console.log('hey');
  }
  
  render(){
  return (
    <div className=''>
      <Navbar clickSun={this.handleClicked}   clickBurguer={this.handleClick} data={this.state} />

      <section className='main'>
        <figure className='container__img'>
          <img src={logo} />
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
    
    <section className='sobre__mi' >
      <h2>Sobre mi</h2>
      <h3>Frontend Developer</h3>
      <p className='description'>
         Hola! Mi nombre es Jimmy Alexander Castiblanco, Colombiano emprendedor. Estudiante de Platzi actualmente ,
         empece de lleno en le mundo de la programación en el año 2018, <br /> 
         <br />
         Quiero llegar a ser uno de 
         los mejores desarrolladores frontend, me gusta jugar al futbol y los videojuegos,  amo la vida que tengo y mi
         familia.          
      </p>
      <h3>Habilidades y Conocimientos:</h3>
      <div className='container__habilidades'>
        <Icon title='REACT' className='iconos' icon={mdiReact} color='cyan' />
        <Icon title='JAVASCRIPT' className='iconos' icon={mdiLanguageJavascript} color='yellow' />
        <Icon title='CSS3' className='iconos' icon={mdiLanguageCss3} color='#00BFFF' />
        <Icon title='HMTL5' className='iconos' icon={mdiLanguageHtml5} color='red'/>
        <Icon title='BOOTSTRAP' className='iconos' icon={mdiBootstrap } color='purple'/>
        <Icon title='SASS' className='iconos' icon={mdiSass} color='#ff44dd'/>
        <Icon title='GITHUB' className='iconos' icon={mdiGithub} />
      </div>
    </section>

    <section className='proyectos'>

    </section>

      <Footer />
    </div>
  )
}
}

export default App

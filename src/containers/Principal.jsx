import React from 'react'
import { mdiTwitter, mdiGithub, mdiLinkedin, mdiReact, mdiLanguageJavascript, mdiLanguageCss3, mdiLanguageHtml5, mdiBootstrap, 
   mdiWindowClose,mdiMoonWaxingCrescent, mdiSass } from '@mdi/js';

import Footer from '../components/Footer'

import logo from '../assets/static/me.jpg';
import Icon from '../components/Iconos';
import logo_rick from '../assets/static/RandM.png'


import '../assets/styles/App.scss'
import { Navbar } from '../components/Navbar';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: false,
        cambio: false,
        iconoBurguer: `${mdiWindowClose}`,
        iconoSun: `${mdiMoonWaxingCrescent}`
    }
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
  }

  
  render(){
  return (
    <div className='' id='home'>
      <Navbar enlace={'sobre_mi'} clickSun={this.handleClicked}   clickBurguer={this.handleClick} data={this.state} />

      <section className='main'>
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
    
    <section id='sobre-mi' className='sobre__mi' >
      <h2>Sobre mi</h2>
      <h3>Frontend Developer</h3>
      <p className='description'>
         Hola! Mi nombre es Jimmy Alexander Castiblanco, Colombiano emprendedor. Estudiante de Platzi actualmente ,
         empece de lleno en le mundo de la programación en el año 2018, <br /> 
         <br />
         Quiero llegar a ser uno de 
         los mejores desarrolladores frontend, me gusta jugar  futbol y  videojuegos,  amo la vida que tengo y mi
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

      <Footer id='enlace' />
    </div>
  )
}
}

export default App

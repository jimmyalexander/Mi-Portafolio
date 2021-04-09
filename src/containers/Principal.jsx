import React from 'react'   
import { Proyectos } from '../components/Proyectos';
import { SobreMi } from '../components/SobreMi';
import Footer from '../components/Footer';
import { Main } from '../components/Main';
   
import '../assets/styles/App.scss';
import { Feedback } from '../components/Feedback';

const  App = () => {
  return (
    <div className='' id='home'>

      <Main />
    
      <SobreMi />

      <Proyectos />

      <Feedback />

      <Footer id='enlace' />
    </div>
  )
}

export default App;


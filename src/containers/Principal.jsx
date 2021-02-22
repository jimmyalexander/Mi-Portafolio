import React from 'react'   
import { Proyectos } from '../components/Proyectos';
import { SobreMi } from '../components/SobreMi';
import Footer from '../components/Footer';
import { Main } from '../components/Main';
   
import '../assets/styles/App.scss';

const  App = () => {
  return (
    <div className='' id='home'>

      <Main />
    
      <SobreMi />

      <Proyectos />

      <Footer id='enlace' />
    </div>
  )
}

export default App;


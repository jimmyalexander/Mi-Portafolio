import React, { useState } from 'react'   
import { Proyectos } from '../components/Proyectos';
import { SobreMi } from '../components/SobreMi';
import Footer from '../components/Footer';
import { Main } from '../components/Main';
   
import '../assets/styles/App.scss';
import { Feedback } from '../components/Feedback';
import { UserContext } from './UserContext';
import { SkillSet } from '../components/SkillSet';

const  Principal = () => {
  const [scroll, setScroll] = useState(0)

  window.onscroll = function() {
    setScroll(window.scrollY)
  };

  return (
    <UserContext.Provider value={
     {
      scroll,
      setScroll
     }
    }>
      <div className='' id='home'>

        <Main />
      
        <SobreMi />

        <Proyectos />

        <SkillSet />

        <Feedback />

        <Footer  id='enlace' />
      </div>
    </UserContext.Provider>
  )
}

export default Principal;

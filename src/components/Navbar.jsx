import React,{ useState } from 'react'
import { mdiFormatLineWeight, mdiWhiteBalanceSunny,mdiWindowClose,mdiMoonWaxingCrescent} from '@mdi/js'
import Icon from './Iconos'

export const Navbar = () => {
  const [state, setState] = useState(
    {
      active: false,
      cambio: false,
    }
  )
  const { cambio, active, } = state;
  const [scrll, setScrll] = useState(0)
  const handleClicked = (e) =>{
        e.preventDefault();
             setState({
               cambio: !state.cambio,
               active: false
             })
            document.body.classList.toggle('light');
      }
  const handleClick = (e) =>{
    e.preventDefault();
          setState({
           active: !state.active,
           cambio: false
         })
  }
  window.onscroll = function() {
    setScrll( window.scrollY);
  };
  
  return (
  
        <div className={ scrll > 1 ? 'container__navbar fix' : 'container__navbar' }>
          <h2 className='container__icon'><a href='/#'><span>Jimmy</span><strong>Alexander</strong></a></h2>
          
            <Icon className='icons' onClick={handleClicked} className='sun' icon={cambio === false ? `${mdiWhiteBalanceSunny }` : `${mdiMoonWaxingCrescent}`} />
          
          
            <Icon  onClick={handleClick} className={`burguer`}  icon={active === false ? `${mdiFormatLineWeight}` : `${mdiWindowClose}`}  />
          
          <ul  className={active ?'navbar__list is-active':'navbar__list'}>
            <a className={scrll >100 && scrll < 400? 'section_active' : ''} href='#home'>Home</a>
            <a className={scrll >600 && scrll < 1050 ? 'section_active' : ''} href='#sobre-mi' >SobreMi</a>
            <a  href='/principal/certificados'>Certificados</a>
            <a className={scrll >1050  ? 'section_active' : ''}  href='#proyectos'>Proyectos</a>
          </ul>
        </div>
    
  )
}

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
  
  return (
  
        <div className='container__navbar'>
          <h2 className='container__icon'><a href='/#'><span>Jimmy</span><strong>Alexander</strong></a></h2>
          
            <Icon  onClick={handleClicked} className='sun' icon={cambio === false ? `${mdiWhiteBalanceSunny }` : `${mdiMoonWaxingCrescent}`} />
          
          
            <Icon  onClick={handleClick} className={`burguer`}  icon={active === false ? `${mdiFormatLineWeight}` : `${mdiWindowClose}`}  />
          
          <ul  className={`navbar__list ${active ?'is-active':' '}`}>
            <a href='#home'>Home</a>
            <a href='#sobre-mi' >SobreMi</a>
            <a href='/principal/certificados'>Certificados</a>
            <a  href='#proyectos'>Proyectos</a>
          </ul>
        </div>
    
  )
}

import React,{ useContext, useState } from 'react'
import { mdiFormatLineWeight, mdiWhiteBalanceSunny,mdiWindowClose,mdiMoonWaxingCrescent} from '@mdi/js'
import Icon from './Iconos'
import { UserContext } from '../containers/UserContext'

export const Navbar = () => {
  const {scroll} = useContext(UserContext)

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
  const ir = (e) => {
    setState({
      ...state,
      active: !active
    })
  }
  
  
  return (
  
        <div className={ scroll > 1 ? 'container__navbar fix' : 'container__navbar' }>
          <h2 className='container__icon'><a href='/Mi-Portafolio/'><span>Jimmy</span><strong>Alexander</strong></a></h2>
          
            <Icon color='white' onClick={handleClicked} className='sun icons' icon={cambio === false ? `${mdiMoonWaxingCrescent}` : `${mdiWhiteBalanceSunny}`} />
          
          
            <Icon  onClick={handleClick} className={`burguer`} color='white'  icon={active === false ? `${mdiFormatLineWeight}` : `${mdiWindowClose}`}  />
          
          <ul  className={active ?'navbar__list is-active':'navbar__list'}>
            <a onClick={ir} className={scroll >100 && scroll < 400? 'section_active' : ''} href='#home'>Inicio</a>
            <a onClick={ir}  className={scroll >600 && scroll < 969 ? 'section_active' : ''} href='#sobre-mi' >SobreMi</a>
            <a onClick={ir} className={scroll >970  && scroll < 2500? 'section_active' : ''}  href='#proyectos'>Portafolio</a>
            <a onClick={ir} className={scroll >2700  && scroll < 3000? 'section_active' : ''}  href='#skill'>Skillset</a>
          </ul>
        </div>
    
  )
}

import React from 'react'
import { mdiFormatLineWeight, mdiWhiteBalanceSunny} from '@mdi/js'
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Icon from './Iconos'

export const Navbar = ({clickSun, clickBurguer, data}) => {
  return (
    <Router>
        
        <div className='container__navbar'>
          <h2 className='container__icon'><a href='/#'><span>Jimmy</span><strong>Alexander</strong></a></h2>
          
            <Icon onClick={clickSun} className='sun' icon={data.cambio === false ? `${mdiWhiteBalanceSunny }` : `${data.iconoSun}`} />
          
          
            <Icon onClick={clickBurguer} className={`burguer`}  icon={data.active === false ? `${mdiFormatLineWeight}` : `${data.iconoBurguer}`}  />
          
          <ul  className={`navbar__list ${data.active ?'is-active':' '}`}>
            <a href='#home'>Home</a>
            <a href='#sobre-mi' >SobreMi</a>
            <Link to='/principal/certificados'>Certificados</Link>
            <a  href='#proyectos'>Proyectos</a>
          </ul>
        </div>
      </Router>
  )
}

import React from 'react'
import { mdiFormatLineWeight, mdiWindowClose, mdiWhiteBalanceSunny, mdiMoonWaxingCrescent} from '@mdi/js'
import Icon from './Iconos'

class Navbar extends React.Component{
 
  
  render(){
    return(
    <div className='container__navbar'>
       <h2 className='container__icon'><a href='#'><span>Jimmy</span><strong>Alexander</strong></a></h2>
       <div>
        <Icon onClick={this.props.clickSun} className='sun' icon={this.props.data.cambio === false ? `${mdiWhiteBalanceSunny }` : `${this.props.data.iconoSun}`} />
       </div>
       <div > 
         <Icon onClick={this.props.clickBurguer} className={`burguer`}  icon={this.props.data.active === false ? `${mdiFormatLineWeight}` : `${this.props.data.iconoBurguer}`}  />
       </div>
      <ul  className={`navbar__list ${this.props.data.active ?'is-active':' '}`}>
        <a href='#'>Home</a>
        <a href='#'>SobreMi</a>
        <a href='#'>Certificados</a>
        <a  href='#'>Proyectos</a>
      </ul>
    </div>
  )
}
}
export default Navbar;
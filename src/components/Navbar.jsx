import React from 'react'
import { mdiFormatLineWeight, mdiWhiteBalanceSunny} from '@mdi/js'
import Icon from './Iconos'

class Navbar extends React.Component{
 
  
  render(){
    return(
    <div className='container__navbar'>
       <h2 className='container__icon'><a href='#'><span>Jimmy</span><strong>Alexander</strong></a></h2>
       
        <Icon onClick={this.props.clickSun} className='sun' icon={this.props.data.cambio === false ? `${mdiWhiteBalanceSunny }` : `${this.props.data.iconoSun}`} />
      
       
         <Icon onClick={this.props.clickBurguer} className={`burguer`}  icon={this.props.data.active === false ? `${mdiFormatLineWeight}` : `${this.props.data.iconoBurguer}`}  />
       
      <ul  className={`navbar__list ${this.props.data.active ?'is-active':' '}`}>
        <a href='#home'>Home</a>
        <a href='#sobre-mi' >SobreMi</a>
        <a href=''>Certificados</a>
        <a  href='#proyectos'>Proyectos</a>
      </ul>
    </div>
  )
}
}
export default Navbar;
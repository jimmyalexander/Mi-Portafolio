import React from 'react'
import { mdiFormatLineWeight } from '@mdi/js'
import Icon from './Iconos'

class Navbar extends React.Component{
state = {
  active: false,
}
handleClick = (e) =>{
  this.setState({
    active: !this.state.active
  })
  console.log(this.state)
}
render(){
  return(
    <div className='container__navbar'>
       <h2 className='container__icon'><a href='#'>Jimmy<strong>Alexander</strong></a></h2>
       <div > 
         <Icon onClick={this.handleClick} className='burguer' color='#44ffff' icon={mdiFormatLineWeight}  />
       </div>
      <ul  className={`navbar__list ${this.state.active ?'is-active':' '}`}>
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
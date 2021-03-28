import React from 'react'
import { mdiCardsHeart, mdiArrowUpCircle  } from '@mdi/js' 
import Icon from '../components/Iconos'

const Footer = () => {
    return(
        <footer name='footer'>© 2020, Built with <Icon className='iconfooter'  icon={mdiCardsHeart} />
            by Jimmy Castiblanco
            <a href='#home'><Icon title='lower'  size={1.5} className='main_icon-row-home' color='white' icon={ mdiArrowUpCircle  } /></a>
        </footer>
    )
}
export default Footer;
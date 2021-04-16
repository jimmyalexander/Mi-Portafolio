import React, { useEffect, useRef } from 'react';
import { mdiCardsHeart, mdiArrowUpCircle  } from '@mdi/js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Icon from '../components/Iconos';

const Footer = () => {
    const refi = useRef(null)
    useEffect(() => {
        AOS.init({
        duration:1000
        })
    }, [])

  

    return(
        <footer data-aos="fade-up"  ref={refi}  name='footer'>© 2020, Built with <Icon className='iconfooter opacity '  icon={mdiCardsHeart} />
            by Jimmy Castiblanco
            <a href='#home'><Icon title='lower'  size={1.5} className='main_icon-row-home' color='white' icon={ mdiArrowUpCircle  } /></a>
        </footer>
    )
}
export default Footer;
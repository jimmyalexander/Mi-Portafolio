import React from 'react';
import {  mdiGit,mdiReact, mdiLanguageJavascript, mdiLanguageCss3, mdiLanguageHtml5, mdiBootstrap, mdiSass } from '@mdi/js';
import Icon from '../components/Iconos';

export const SkillSet = () => {
  return (
    <div className='skills' id='skill'>
      <h2>SKILLSET</h2>

      <div   className='container__skill'>
          <Icon size='150' title='REACT' className='iconos' icon={mdiReact} color='cyan' />
          <Icon size='150' title='JAVASCRIPT' className='iconos' icon={mdiLanguageJavascript} color='yellow' />
          <Icon size='150' title='CSS3' className='iconos' icon={mdiLanguageCss3} color='#00BFFF' />
          <Icon size='150' title='HMTL5' className='iconos' icon={mdiLanguageHtml5} color='red'/>
          <Icon size='150' title='BOOTSTRAP' className='iconos' icon={mdiBootstrap } color='purple'/>
          <Icon size='150' title='SASS' className='iconos' icon={mdiSass} color='#ff44dd'/>
          <Icon size='150' title='GITHUB'  className='iconos' icon={mdiGit} color='red' />
        </div>
    </div>
  )
}

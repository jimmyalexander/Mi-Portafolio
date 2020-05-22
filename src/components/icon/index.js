import React from 'react'
import Icon from '@mdi/react'

const IconButton = ({ size = 1, icon, title = 'test', ...props }) => {
  return (
    <div className='icon'>
      <Icon size={size} path={icon} title={title} {...props} />
    </div>
  )
}
export default IconButton

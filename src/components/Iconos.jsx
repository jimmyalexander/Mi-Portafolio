import React from 'react'
import Icon from '@mdi/react'

const IconButton = ({ size = 1,description, icon, title = 'test', ...props }) => {
  return (
    <div className='icon'>
      <Icon size={size} path={icon} title={title}  description={description} {...props} />
    </div>
  )
}
export default IconButton

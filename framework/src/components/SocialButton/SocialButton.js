import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SocialButton = ({ url, icon }) => {
  return (
    <a href={url}>
      <span className='icon has-text-dark is-large fa-lg'>
        <FontAwesomeIcon icon={['fab', icon]} />
      </span>
    </a>
  )
}

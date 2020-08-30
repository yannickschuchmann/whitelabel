import React from 'react'
import SectionHeadline from '../SectionHeadline'

const BodySegments = ({ children, title, titlePosition = 'left' }) => {
  return (
    <div className='container py-6'>
      <div className='columns px-6 mb-6'>
        {titlePosition === 'right' && <div className='column'></div>}
        <div className='column'>
          <SectionHeadline>{title}</SectionHeadline>
        </div>
      </div>
      <div className='columns is-multiline px-6'>{children}</div>
    </div>
  )
}

export default BodySegments

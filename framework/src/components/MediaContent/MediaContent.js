import React from 'react'
import SectionHeadline from '../SectionHeadline'

const MediaContent = ({
  children,
  imageSrc,
  imageAlt,
  title,
  titleUppercase = true,
  mediaPosition = 'left',
  backgroundColor = 'transparent'
}) => {
  const columns = [
    <div className='column' key='image'>
      <img src={imageSrc} className='box' alt={imageAlt} />
    </div>,
    <div className='column' key='content'>
      <div className='px-6'>
        <SectionHeadline isUppercase={titleUppercase}>{title}</SectionHeadline>
        {children}
      </div>
    </div>
  ]

  if (mediaPosition === 'right') {
    columns.reverse()
  }

  return (
    <div className='' style={{ backgroundColor }}>
      <div className='container my-4 py-6'>
        <div className='columns is-vcentered'>{columns}</div>
      </div>
    </div>
  )
}

export default MediaContent

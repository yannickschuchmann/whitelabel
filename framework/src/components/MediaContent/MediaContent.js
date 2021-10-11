import React from 'react'
import { SectionHeadline } from '../SectionHeadline'
import styles from './MediaContent.module.scss'

export const MediaContent = ({
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
      <div className={styles.xSpacing}>
        <SectionHeadline isUppercase={titleUppercase}>{title}</SectionHeadline>
        {children}
      </div>
    </div>
  ]

  if (mediaPosition === 'right') {
    columns.reverse()
  }

  return (
    <section className='section' style={{ backgroundColor }}>
      <div className={`container my-4 py-6 ${styles.container}`}>
        <div className='columns is-vcentered'>{columns}</div>
      </div>
    </section>
  )
}

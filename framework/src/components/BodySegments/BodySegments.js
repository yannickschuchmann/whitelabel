import React from 'react'
import { SectionHeadline } from '../SectionHeadline'
import styles from './BodySegments.module.scss'

const BodySegments = ({
  children,
  title,
  contentClassName = 'columns is-multiline',
  titlePosition = 'left'
}) => {
  return (
    <section className='section'>
      <div className='container py-6'>
        <div className={`columns mb-6 ${styles.xSpacing}`}>
          {titlePosition === 'right' && <div className='column'></div>}
          <div className='column'>
            <SectionHeadline>{title}</SectionHeadline>
          </div>
        </div>
        <div className={`${contentClassName} ${styles.xSpacing}`}>
          {children}
        </div>
      </div>
    </section>
  )
}

export default BodySegments

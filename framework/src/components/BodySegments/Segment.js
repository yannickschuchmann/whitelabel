import React from 'react'
import styles from './Segment.module.css'

const BodySegment = ({ children, title, className = 'is-half' }) => {
  return (
    <div className={`column ${className}`}>
      <div className='mt-6 mb-5'>
        <strong
          className={`is-family-secondary is-uppercase is-size-4 ${styles.break}`}
        >
          {title}
        </strong>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default BodySegment

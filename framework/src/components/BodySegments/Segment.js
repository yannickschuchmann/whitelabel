import React from 'react'
import styles from './Segment.module.css'

const BodySegment = ({
  children,
  title,
  iconSrc,
  iconSize = 96,
  className = 'is-half',
  titleClassName = ''
}) => {
  return (
    <div className={`column ${className}`}>
      <div className={`${titleClassName} mt-6 mb-5`}>
        {iconSrc && (
          <div className='pb-5 mb-5'>
            <figure className={`mx-auto image is-${iconSize}x${iconSize}`}>
              <img src={iconSrc} />
            </figure>
          </div>
        )}
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

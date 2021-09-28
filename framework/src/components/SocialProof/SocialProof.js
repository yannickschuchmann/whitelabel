import React from 'react'
import styles from './SocialProof.module.css'

const Column = ({ src, alt, url, imgStyle, centered, ...props }) => {
  const image = (
    <img className={styles.image} style={imgStyle} src={src} alt={alt} />
  )
  return (
    <div
      className={`${
        centered ? 'px-3' : 'column'
      } has-text-centered is-half-mobile`}
      {...props}
    >
      {url ? <a href={url}>{image}</a> : image}
    </div>
  )
}

const SocialProof = ({ children, images = [], centered = false }) => {
  return (
    <div className={`container my-5 ${styles.container}`}>
      <p className='py-5 is-size-6 has-text-centered'>{children}</p>
      <div className='py-5 columns is-multiline is-mobile is-centered'>
        {images.map((image, idx) => (
          <Column centered={centered} key={idx} {...image} />
        ))}
      </div>
    </div>
  )
}

export default SocialProof

import React from 'react'
import styles from './Hero.module.css'

export const Hero = ({ headline, subline, textStyle = 'light' }) => {
  return (
    <section className={`${styles.hero} hero is-fullheight-with-navbar`}>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <h1 className={`title ${styles[textStyle]}`}>{headline}</h1>
          <h2 className={`subtitle ${styles[textStyle]}`}>{subline}</h2>
        </div>
      </div>
    </section>
  )
}

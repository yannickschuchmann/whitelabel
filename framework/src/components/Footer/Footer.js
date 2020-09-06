import React from 'react'
import Link from 'next/link'

import styles from './Footer.module.scss'
const Logo = ({ src }) => (
  <div className='level-item'>
    <img src={src} className={styles.logo} alt='Logo' />
  </div>
)

const Footer = ({
  company = 'Company name',
  years = '2020',
  navLinks = [],
  logoSrc,
  socialButtons
}) => {
  const onJump = (target) => (e) => {
    e.preventDefault()
    const targetEl = document.querySelector(target)
    targetEl && targetEl.scrollIntoView({ behavior: 'smooth' })
  }

  const navigationEls = navLinks.map(({ text, url, target }, idx) => (
    <div className='level-item' key={idx}>
      <Link href={url}>
        <a
          onClick={target && onJump(target)}
          className='is-size-7 has-text-black'
        >
          <strong>{text}</strong>
        </a>
      </Link>
    </div>
  ))

  if (logoSrc) {
    navigationEls.splice(
      navigationEls.length / 2,
      0,
      <Logo src={logoSrc} key='logo' />
    )
  }

  return (
    <div className='container has-text-centered mt-6 py-6'>
      <div className={`level pt-6 px-6 mx-6 ${styles.navLinks}`}>
        {navigationEls}
      </div>
      <hr />
      <div className='pt-5'>{socialButtons}</div>
      <p className='is-size-7 has-text-dark'>
        © {years} {company}
      </p>
    </div>
  )
}

export default Footer

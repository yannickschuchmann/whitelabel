import React from 'react'
import styles from './Footer.module.css'
const Logo = () => (
  <div className='level-item'>
    <img src='logo.png' className={styles.logo} alt='Logo' />
  </div>
)

const Footer = ({
  company = 'Company name',
  years = '2020',
  navLinks = [],
  socialButtons
}) => {
  const onJump = (target) => (e) => {
    e.preventDefault()
    const targetEl = document.querySelector(target)
    targetEl && targetEl.scrollIntoView({ behavior: 'smooth' })
  }

  const navigationEls = navLinks.map(({ text, url, target }, idx) => (
    <div className='level-item' key={idx}>
      <a
        className='is-size-7 has-text-black'
        onClick={target && onJump(target)}
        href={url}
      >
        <strong>{text}</strong>
      </a>
    </div>
  ))

  navigationEls.splice(navigationEls.length / 2, 0, <Logo key='logo' />)

  return (
    <div className='container has-text-centered mt-6 py-6'>
      <div className='level pt-6 px-6 mx-6'>{navigationEls}</div>
      <hr />
      <div className='pt-5'>{socialButtons}</div>
      <p className='is-size-7 has-text-dark'>
        © {years} {company}
      </p>
    </div>
  )
}

export default Footer

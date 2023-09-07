import React, { useState } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.scss'

export const Navigation = ({
  links,
  className = '',
  logoStyle,
  logoSrc,
  itemsRight = null
}) => {
  const [open, setOpen] = useState(false)

  const onOpen = () => {
    setOpen(!open)
  }

  const onJump = (target) => (e) => {
    const targetEl = document.querySelector(target)
    if (targetEl) {
      e.preventDefault()
      targetEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = links.map(({ text, url, target }) => (
    <Link
      key={text}
      href={url}
      className='navbar-item'
      onClick={target && onJump(target)}
    >
      {text}
    </Link>
  ))

  return (
    <nav
      className={`navbar ${className}`}
      role='navigation'
      aria-label='main navigation'
    >
      <div className='container'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <img
              className={styles.logo}
              style={logoStyle}
              height='28'
              src={logoSrc}
              alt='Logo'
            />
          </a>
          <a
            role='button'
            aria-label='menu'
            aria-expanded='false'
            onClick={onOpen}
            className={`${open && 'is-active'} navbar-burger`}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div className={`${open && 'is-active'} navbar-menu`}>
          <div className='navbar-end'>
            {navItems}
            {itemsRight}
          </div>
        </div>
      </div>
    </nav>
  )
}

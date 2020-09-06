import React, { useState } from 'react'
import Link from 'next/link'

const Navigation = ({ links, logoSrc }) => {
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
    <Link key={text} href={url}>
      <a className='navbar-item' onClick={target && onJump(target)}>
        {text}
      </a>
    </Link>
  ))

  return (
    <div className='container'>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <img height='28' src={logoSrc} alt='Logo' />
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
          <div className='navbar-end'>{navItems}</div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation

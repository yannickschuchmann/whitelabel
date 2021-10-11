import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const setCookies = (checked) => {
  Object.keys(checked).forEach((key) => {
    Cookies.set(`cookie-consent-${key}`, checked[key], { expires: 365 })
  })
}

export const CookiePolicy = ({
  title,
  children,
  necessaryText,
  analyticalText,
  buttonSelectedText,
  buttonAllText
}) => {
  const [confirmed, setConfirmed] = useState(false)
  const [checked, setChecked] = useState({
    necessary: true,
    analytical: false
  })
  const [consents, setConsents] = useState({
    necessary: true, // avoid flickering of modal
    analytical: null
  })
  useEffect(() => {
    const nextConsents = {
      necessary: JSON.parse(Cookies.get('cookie-consent-necessary') || false),
      analytical: JSON.parse(Cookies.get('cookie-consent-analytical') || false)
    }
    setConsents(nextConsents)

    if (nextConsents.analytical) {
      window.gtag &&
        window.gtag('consent', 'update', {
          analytics_storage: 'granted'
        })
    }
  }, [confirmed])

  const handleChange = (e) => {
    setChecked({
      ...checked,
      [e.target.name]: !checked[e.target.name]
    })
  }
  const handleSelected = () => {
    setCookies(checked)
    setConfirmed(true)
  }
  const handleAll = () => {
    setCookies({ necessary: true, analytical: true })
    setConfirmed(true)
  }

  return (
    <div>
      <div className={`modal ${!consents.necessary ? 'is-active' : ''}`}>
        <div className='modal-background'></div>
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>{title}</p>
          </header>
          <section className='modal-card-body'>
            {children}
            <hr />
            <form>
              <div className='field'>
                <div className='control'>
                  <label className='checkbox' disabled>
                    <input
                      type='checkbox'
                      className='mr-2'
                      name='necessary'
                      checked={checked.necessary}
                      disabled
                    />
                    {necessaryText}
                  </label>
                </div>
              </div>
              <div className='field'>
                <div className='control'>
                  <label className='checkbox'>
                    <input
                      type='checkbox'
                      name='analytical'
                      onChange={handleChange}
                      checked={checked.analytical}
                      className='mr-2'
                    />
                    {analyticalText}
                  </label>
                </div>
              </div>
            </form>
          </section>
          <footer className='modal-card-foot'>
            <button className='button is-fullwidth' onClick={handleSelected}>
              {buttonSelectedText}
            </button>
            <button
              className='button is-black is-fullwidth'
              onClick={handleAll}
            >
              {buttonAllText}
            </button>
          </footer>
        </div>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const setCookies = (checked) => {
  Object.keys(checked).forEach((key) => {
    Cookies.set(`cookie-consent-${key}`, checked[key])
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
    necessary: null,
    analytical: null
  })
  useEffect(() => {
    setConsents({
      necessary: JSON.parse(Cookies.get('cookie-consent-necessary') || false),
      analytical: JSON.parse(Cookies.get('cookie-consent-analytical') || false)
    })
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

  return !process.browser
    ? null
    : !consents.necessary && (
        <div>
          <div className='modal is-active'>
            <div className='modal-background'></div>
            <div class='modal-card'>
              <header class='modal-card-head'>
                <p class='modal-card-title'>{title}</p>
              </header>
              <section class='modal-card-body'>
                {children}
                <hr />
                <form>
                  <div className='field'>
                    <div className='control'>
                      <label class='checkbox' disabled>
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
                      <label class='checkbox'>
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
              <footer class='modal-card-foot'>
                <button class='button is-fullwidth' onClick={handleSelected}>
                  {buttonSelectedText}
                </button>
                <button
                  class='button is-black is-fullwidth'
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

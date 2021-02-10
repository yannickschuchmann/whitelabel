import React from 'react'

const Quote = ({ author, children }) => {
  return (
    <div className='px-6 mx-6 py-5 is-size-3 has-text-weight-light has-text-centered'>
      “{children}”{author ? ` - ${author}` : ''}
    </div>
  )
}

export default Quote

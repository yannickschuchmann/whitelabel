import React from 'react'

export const Quote = ({ author, children, showQuotes = true }) => {
  return (
    <div className='px-6 mx-6 py-5 is-size-3 has-text-weight-light has-text-centered'>
      {showQuotes ? '“' : ''}
      {children}
      {showQuotes ? '“' : ''}
      {author ? ` - ${author}` : ''}
    </div>
  )
}

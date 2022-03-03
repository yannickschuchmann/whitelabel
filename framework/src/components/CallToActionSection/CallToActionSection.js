import React from 'react'

export const CallToActionSection = ({ children, margin = 'my-6' }) => {
  return (
    <div className={`container ${margin} has-text-centered`}>{children}</div>
  )
}

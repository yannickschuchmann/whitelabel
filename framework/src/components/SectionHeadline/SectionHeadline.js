import React from 'react'

export const SectionHeadline = ({ children, isUppercase = true }) => {
  return (
    <h3
      className={`title is-2 has-text-weight-light is-family-secondary ${
        isUppercase ? 'is-uppercase' : ''
      }`}
    >
      {children}
    </h3>
  )
}

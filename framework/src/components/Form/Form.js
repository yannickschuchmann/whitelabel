import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { postFormToSheet } from '../../helpers/googleSheets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FormContext = React.createContext({
  errors: null,
  register: null,
  requiredText: null
})

export const FormInputField = ({
  name,
  required = false,
  placeholder,
  pattern,
  patternText
}) => {
  const { errors, register, requiredText } = useContext(FormContext)
  return (
    <React.Fragment>
      <div className='control'>
        <input
          className={`input ${errors[name] ? 'is-danger' : ''}`}
          type='text'
          name={name}
          ref={register({ required, pattern })}
          placeholder={placeholder}
        />
      </div>
      {errors[name] && (
        <p className='help is-danger'>
          {errors[name].type === 'pattern' ? patternText : requiredText}
        </p>
      )}
    </React.Fragment>
  )
}

export const FormEmailField = ({ ...props }) => {
  return (
    <FormInputField
      pattern={
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      }
      patternText='This is not a valid email'
      {...props}
    />
  )
}

const FormBody = ({
  title,
  buttonText = 'Send',
  endpoint,
  afterSubmit,
  children,
  requiredText = 'This field is required'
}) => {
  const { register, handleSubmit, errors } = useForm()
  const [isLoading, setLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const onSubmit = async (data) => {
    setLoading(true)
    try {
      await postFormToSheet({ endpoint, data })
      setSuccess(true)
      afterSubmit && afterSubmit()
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContext.Provider value={{ errors, register, requiredText }}>
        <div className='box has-text-left'>
          <div className='my-5'>
            <strong className='is-size-5'>{title}</strong>
          </div>
          {children}
          <div className='columns'>
            <div className='column'>
              {!isSuccess ? (
                <button
                  type='submit'
                  className={`button is-black ${isLoading ? 'is-loading' : ''}`}
                >
                  {buttonText}
                </button>
              ) : (
                <button className='button is-static'>
                  <span className='icon is-small'>
                    <FontAwesomeIcon icon={['fas', 'check']} />
                  </span>
                  <span>Success</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </FormContext.Provider>
    </form>
  )
}

export const Form = ({
  headline,
  subline,
  buttonText,
  formTitle,
  endpoint,
  children
}) => {
  return (
    <div className='container has-text-centered'>
      <h3 className='title is-2 has-text-weight-light'>{headline}</h3>
      <div className='px-md-6 mx-6 mb-6 is-size-3 has-text-weight-light'>
        {subline}
      </div>
      <div className='columns is-centered'>
        <div className='column is-half-tablet is-one-third-fullhd'>
          <FormBody
            title={formTitle}
            endpoint={endpoint}
            buttonText={buttonText}
          >
            {children}
          </FormBody>
        </div>
      </div>
    </div>
  )
}

export default Form

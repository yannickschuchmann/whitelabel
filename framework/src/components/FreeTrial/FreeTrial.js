import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { postFormToSheet } from '../../helpers/googleSheets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Form = ({ title, endpoint, afterSubmit, buttonColor = 'is-black' }) => {
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
      <div className='box has-text-left'>
        <div className='my-5'>
          <strong className='is-size-5'>{title}</strong>
        </div>
        <div className='columns'>
          <div className='column'>
            <div className='control'>
              <input
                className={`input ${errors.first_name ? 'is-danger' : ''}`}
                type='text'
                name='first_name'
                ref={register({ required: true })}
                placeholder='First name*'
              />
            </div>
            {errors.first_name && (
              <p className='help is-danger'>This field is required</p>
            )}
          </div>
          <div className='column'>
            <div className='control'>
              <input
                className={`input ${errors.last_name ? 'is-danger' : ''}`}
                type='text'
                name='last_name'
                ref={register({ required: true })}
                placeholder='Last name*'
              />
            </div>
            {errors.last_name && (
              <p className='help is-danger'>This field is required</p>
            )}
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <div className='control'>
              <input
                className={`input ${errors.email ? 'is-danger' : ''}`}
                type='email'
                name='email'
                ref={register({
                  required: true,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })}
                placeholder='Email address*'
              />
            </div>
            {errors.email && (
              <p className='help is-danger'>
                {errors.email.type === 'pattern'
                  ? 'This is not a valid email'
                  : 'This field is required'}
              </p>
            )}
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <div className='control'>
              <input
                className='input'
                type='text'
                name='phone'
                ref={register}
                placeholder='Phone'
              />
            </div>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            <div className='control'>
              <input
                className='input'
                type='text'
                name='company'
                ref={register}
                placeholder='Company'
              />
            </div>
          </div>
        </div>
        <div className='columns'>
          <div className='column'>
            {!isSuccess ? (
              <button
                type='submit'
                className={`button ${buttonColor} ${
                  isLoading ? 'is-loading' : ''
                }`}
              >
                Register now
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
    </form>
  )
}

export const FreeTrial = ({
  headline,
  subline,
  formTitle,
  endpoint,
  buttonColor
}) => {
  return (
    <section className='section'>
      <div className='container has-text-centered py-6 my-6'>
        <h3 className='title is-2 has-text-weight-light'>{headline}</h3>
        <p className='px-md-6 mx-6 mb-6 is-size-3 has-text-weight-light'>
          {subline}
        </p>
        <div className='columns is-mobile is-centered'>
          <div className='column is-three-quarters-mobile is-half-tablet is-one-third-fullhd'>
            <Form
              title={formTitle}
              endpoint={endpoint}
              buttonColor={buttonColor}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

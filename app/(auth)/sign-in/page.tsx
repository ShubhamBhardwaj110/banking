import React from 'react'
import page from '../sign-up/page'
import AuthForm from '@/components/AuthForm'

const SignIn = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type="sign-in" />
    </section>
  )
}

export default SignIn

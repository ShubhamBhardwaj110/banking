import React from 'react'
import page from '../sign-up/page'
import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions';

const SignUp = async() => {
      const loggerInUser = await getLoggedInUser();
      console.log(loggerInUser)
  
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type="sign-up" />
    </section>
  )
}

export default SignUp

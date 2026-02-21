import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <Card className='w-fit min-w-100'>
            <CardHeader>
                <CardTitle className='text-3xl'>Sign Up</CardTitle>
                <p>Create your account to start using </p>
            </CardHeader>
            <CardContent>
                
            </CardContent>
        </Card>
    </div>
  )
}

export default SignUpPage
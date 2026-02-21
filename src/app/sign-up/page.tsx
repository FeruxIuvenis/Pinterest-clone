'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const SignUpPage = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ username, email, password })
  }

  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <Card className='w-fit min-w-100'>
            <CardHeader>
                <CardTitle className='text-3xl'>Sign Up</CardTitle>
                <p>Create your account to start using the app</p>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-2'>
                    <Label htmlFor='username'>Username</Label>
                    <Input
                      id='username'
                      type='text'
                      placeholder='Enter your username'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='Enter your email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <Label htmlFor='password'>Password</Label>
                    <div className='relative flex items-center'>
                      <Input
                        id='password'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='pr-10'
                      />
                      <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-3 text-gray-500 hover:text-gray-700'
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                  </div>

                  <Button type='submit' className='w-full mt-4'>
                    Sign Up
                  </Button>
                </form>
            </CardContent>
        </Card>
    </div>
  )
}

export default SignUpPage

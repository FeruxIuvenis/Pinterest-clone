'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Slide, toast, ToastContainer } from 'react-toastify'
import { useRouter } from 'next/navigation'

const SignUpPage = () => {
    const router = useRouter()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log({ username, email, password })

        if (!username || !email || !password) {
            toast.error(' All credentials are required!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
        } else {
            const res = await fetch('/api/auth/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            })
            const { data, error } = await res.json();
            console.log({ data, error })
            if (error) {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
            } else {
                toast.success('🦄 Account created successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    closeOnClick: true,
                    progress: 0.1,
                    theme: "light",
                    transition: Slide,
                });
                setTimeout(() => {
                    router.push('/profile')
                }, 5000)
            }
        }
    }

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
            />
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

export default SignUpPage;

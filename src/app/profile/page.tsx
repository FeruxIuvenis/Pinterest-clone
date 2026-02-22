"use client"
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { supabaseClient } from '@/lib/supabase/client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const ProfilePage = () => {
    const [pfp, setPfp] = React.useState('/profile-placeholder.png')
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        async function fetchUserPfp() {
            try {
                // Get current user
                const { data: { user }, error: authError } = await supabaseClient.auth.getUser()
                
                if (authError || !user) {
                    console.error('Auth error:', authError)
                    return
                }

                const { data: profile, error: profileError } = await supabaseClient
                    .from('profiles')
                    .select('username')
                    .eq('id', user.id)
                    .single()
                
                if (profileError || !profile) {
                    console.error('Profile error:', profileError)
                    return
                }

                const { data } = supabaseClient.storage
                    .from('profile-photos')
                    .getPublicUrl(`${profile.username}/profile.jpg`)
                
                if (data?.publicUrl) {
                    setPfp(data.publicUrl)
                }
            } catch (error) {
                console.error('Error fetching profile photo:', error)
            } finally {
                setLoading(false)
            }
        }
        
        fetchUserPfp()
    }, [])

    return (
        <div className='w-full h-screen p-8'>
            <Card>
                <CardHeader>
                    <Image 
                        src={pfp} 
                        alt='Profile Picture' 
                        width={150} 
                        height={150} 
                        className='rounded-full mx-auto mb-4'
                        priority
                    />
                </CardHeader>
            </Card>
        </div>
    )
}

export default ProfilePage
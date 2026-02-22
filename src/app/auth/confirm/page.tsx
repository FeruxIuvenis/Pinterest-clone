'use client'

import { useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { supabaseClient } from '@/lib/supabase/client'

export default function ConfirmPage() {
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        const verify = async () => {
            const supabase = supabaseClient;

            const token_hash = searchParams.get('token')
            const type = searchParams.get('type')

            if (!token_hash || !type) return

            await supabase.auth.verifyOtp({
                token_hash,
                type: type as any,
            })

            router.replace('/')
        }

        verify()
    }, [])

    return <p>Verifying your email...</p>
}
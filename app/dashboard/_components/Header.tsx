import { UserButton } from '@clerk/nextjs'
import React from 'react'

export default function Header() {
    return (
        <div className='flex justify-end w-full items-center p-5 shadow-sm border-b'>
            <UserButton />
        </div>
    )
}

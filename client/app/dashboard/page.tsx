import { UserButton } from '@clerk/nextjs'
import React from 'react'

type Props = {}

export default function Dashboard({ }: Props) {
    return (
        <div>
            <UserButton />
        </div>
    )
}
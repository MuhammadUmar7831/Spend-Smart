"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useUser, UserButton } from "@clerk/clerk-react"
import Link from 'next/link'

type Props = {}

export default function Header({ }: Props) {
  const { isSignedIn } = useUser();
  return (
    <div className='flex justify-between items-center p-5 shadow-sm border'>
      <span className='font-smeibold'>Spend Smart</span>
      {isSignedIn ?
        <UserButton /> :
        <Link href={"/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      }
    </div>
  )
}
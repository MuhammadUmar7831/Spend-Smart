import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

export default function Header({ }: Props) {
  return (
    <div className='flex justify-between items-center p-5'>
      <span className='font-smeibold'>Spend Smart</span>
      <Button>Get Started</Button>
    </div>
  )
}
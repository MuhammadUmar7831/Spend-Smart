import React from 'react'
import SideMenu from './_components/SideMenu'
import Dashboard from './page'
import Header from './_components/Header'

type Props = {
  children: React.ReactNode
}

export default function layout({ children }: Props) {
  return (
    <div className='flex'>
      <div><SideMenu /></div>
      <div className='w-full'>
        <Header />
        {children}
      </div>
    </div>
  )
}
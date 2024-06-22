"use client"
import React, { ReactSVGElement, useState } from 'react'
import { LayoutDashboard, PiggyBank, ScrollText, LucideProps } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { Sling as Hamburger } from 'hamburger-react'

type MenuItemType = {
    id: number,
    name: string,
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    path: string
}

export default function SideMenu() {

    const path = usePathname();
    const { user } = useUser();
    const [isOpen, setOpen] = useState(false);

    const menuItems: MenuItemType[] = [
        { id: 1, name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
        { id: 2, name: 'Budgets', icon: PiggyBank, path: '/dashboard/budgets' },
        { id: 3, name: 'Expenses', icon: ScrollText, path: '/dashboard/expenses' }
    ]

    return (
        <div>
            <div className="z-10 fixed p-4 lg:hidden">
                <Hamburger color={"black"} toggled={isOpen} toggle={setOpen} />
            </div>
            <div className={`${isOpen ? 'fixed flex' : 'hidden'} lg:static lg:flex h-screen flex-col justify-between border-e bg-white min-w-96 shadow-sm`}>
                <div className="px-4 py-6 mt-10">
                    <span className="grid h-10 w-32 place-content-center text-black text-lg font-semibold">
                        Spend Smart
                    </span>

                    <ul className="mt-6 space-y-2">
                        {menuItems.map((menuItem) => (
                            <li key={menuItem.id}>
                                <Link
                                    href={menuItem.path}
                                    className={`flex gap-2 rounded-lg ${menuItem.path === path ? 'bg-blue-500 text-white' : 'text-gray-500 hover:text-blue-500'} px-4 py-4 text-sm font-medium`}
                                >
                                    <menuItem.icon />
                                    {menuItem.name}
                                </Link>
                            </li>
                        ))
                        }
                    </ul>
                </div>

                <div className="flex border-t border-gray-100 items-center gap-2 bg-white p-4 hover:bg-gray-50">
                    <img
                        alt="avatar"
                        src={user?.imageUrl}
                        className="size-10 rounded-full object-cover"
                    />

                    {user && <div>
                        <p className="text-xs">
                            <strong className="block text-base"> {user.fullName}</strong>
                        </p>
                    </div>}
                </div>
            </div>
        </div>
    )
}
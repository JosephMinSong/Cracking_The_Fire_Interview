'use client'

import Link from 'next/link';
import { sidebarLinks } from '../constants/leftsidebarlinks';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { usePathname, useRouter } from 'next/navigation'

export default function Leftbar() {

    const router = useRouter();
    const pathname = usePathname();

    return (
        <section className="sticky left-0 top-0 z-20 h-screen w-fit flex-col justify-between gap-12 overflow-auto border-1 border-r-dark-4 pb-5 pt-20 hidden md:flex">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                <SignedIn>
                    {sidebarLinks.map( ( link, i ) => {

                        const isActive = ( pathname.includes( link.route ) && link.route.length > 1 || pathname === link.route )

                        return (
                            <Link
                                href={link.route}
                                key={i}
                                className={`sidebar_link p-3 rounded-lg ${isActive && 'bg-greyBackground'}`}
                            >
                                <div className='flex justify-between items-center text-center gap-2 lg:gap-6'>
                                    {link.icon}
                                    <span className='hidden lg:flex w-full justify-center items-center font-semibold'>{link.label}</span>
                                </div>
                            </Link>
                        )
                    } )}
                </SignedIn>
            </div>
        </section>
    )
}
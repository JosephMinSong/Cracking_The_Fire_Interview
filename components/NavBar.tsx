'use client'

import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from 'framer-motion'
import { useRouter, usePathname } from "next/navigation"
import { navbarlinks } from '../constants/navbarlinks'

export default function NavBar() {

    const [toggleDropDown, setToggleDropDown] = useState( false )
    const router = useRouter();
    const pathname = usePathname();


    return (
        <>
            {/* FOR TABLETS AND DESKTOP */}
            <div className="hidden md:block">
                <nav className="navbar-container flex justify-between items-center mr-5 ml-2 my-2 lg:mx-52">
                    <div className="flex items-center justify-center">
                        <Image
                            src='/company-logo.png'
                            width={75}
                            height={75}
                            alt="Company logo icon"
                        />
                        <h1 className="hidden lg:flex font-bold">Cracking the Fire Interview</h1>
                    </div>

                    <div>
                        <input type="text" name="searchbar" className="searchbar border rounded-lg py-0.5 px-2 md:py-2 md:px-16 lg:px-20 lg:pr-32 w-3/4 lg:w-fit" placeholder="Search..." />
                    </div>

                    <div className="flex justify-center items-center gap-8">

                        {navbarlinks.map( ( link, i ) => {
                            const isActive = ( pathname.includes( link.route ) && link.route.length > 1 || pathname === link.route )

                            return (
                                <div key={i}>
                                    <Link href={link.route} className={`navbutton flex flex-col text-center justify-center items-center gap-1 p-1 rounded-lg ${isActive && 'bg-greyBackground'}`}>
                                        {link.icon}
                                        <span className="hidden lg:flex font-semibold text-center text-sm">{link.label}</span>
                                    </Link>
                                </div>
                            )
                        } )}
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton>
                                <svg xmlns="http://www.w3.org/2000/svg" className="navbutton" height="1.5em" viewBox="0 0 512 512" style={{ fill: '#fb923c' }}><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" /></svg>
                            </SignInButton>
                        </SignedOut>
                    </div>
                </nav>
            </div>

            {/* FOR MOBILE */}
            <div className="md:hidden">
                <nav className="navbar-container flex justify-between items-center mr-5 ml-2 my-2 lg:mx-52">
                    <div className="flex items-center justify-center">
                        <Image
                            src='/company-logo.png'
                            width={75}
                            height={75}
                            alt="Company logo icon"
                        />
                    </div>

                    <div>
                        <input type="text" name="searchbar" className="searchbar border rounded-lg py-0.5 px-2 md:py-2 md:px-16 lg:px-20 lg:pr-32 w-3/4 lg:w-fit" placeholder="Search..." />
                    </div>

                    {/* Menu icon */}
                    <div>
                        <SignedIn>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" style={{ fill: '#fb923c' }} onClick={() => setToggleDropDown( prev => !prev )}><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                            {toggleDropDown && (
                                <motion.div
                                    className="dropdown"
                                    initial={{
                                        x: 100
                                    }}
                                    animate={{
                                        x: 0
                                    }}>
                                    <div className="w-full">
                                        <Link href='/createpost' className="navbutton flex text-center justify-between items-center gap-1" onClick={() => setToggleDropDown( prev => !prev )}>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" style={{ fill: '#fb923c' }} ><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                                            <span className="font-semibold text-center text-sm">Create Post</span>
                                        </Link>
                                    </div>
                                    <div className="w-full">
                                        <Link href='/messages' className="navbutton flex text-center justify-between items-center gap-1" onClick={() => setToggleDropDown( prev => !prev )}><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512" style={{ fill: '#fb923c' }}><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" /></svg>
                                            <span className="font-semibold text-sm text-center">Messages</span>
                                        </Link>
                                    </div>
                                    <div className="w-full">
                                        <Link href='/notifications' className="navbutton flex text-center justify-between items-center gap-1" onClick={() => setToggleDropDown( prev => !prev )}><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" style={{ fill: '#fb923c' }} className="notificationbutton navbutton"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" /></svg>
                                            <span className="font-semibold text-center text-sm">Notifications</span>
                                        </Link>
                                    </div>
                                    <UserButton afterSignOutUrl="/" />
                                </motion.div>
                            )}
                        </SignedIn>
                        <SignedOut>
                            <SignInButton>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512" style={{ fill: '#fb923c' }}><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" /></svg>
                            </SignInButton>
                        </SignedOut>
                    </div>
                </nav >
            </div >

            {/* <div>
                            <Link href='/createpost' className="navbutton flex flex-col text-center justify-center items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" style={{ fill: '#fb923c' }} ><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                                <span className="hidden lg:flex font-semibold text-center text-sm">Create Post</span>
                            </Link>
                        </div>
                        <div>
                            <Link href='/messages' className="navbutton flex flex-col text-center justify-center items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512" style={{ fill: '#fb923c' }}><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" /></svg>
                                <span className="hidden lg:flex font-semibold text-sm text-center">Messages</span>
                            </Link>
                        </div>
                        <div>
                            <Link href='/notifications' className="navbutton flex flex-col text-center justify-center items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" style={{ fill: '#fb923c' }} className="notificationbutton navbutton"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" /></svg>
                                <span className="hidden lg:flex font-semibold text-center text-sm">Notifications</span>
                            </Link>
                        </div>
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton></SignInButton>
                        </SignedOut> */}
        </>
    )
}
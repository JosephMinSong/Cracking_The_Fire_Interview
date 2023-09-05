import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="navbar-container flex justify-between items-center mr-5 ml-2 my-2 lg:mx-52">
            <div className="flex items-center justify-center">
                <Image
                    src='/company-logo.png'
                    width={75}
                    height={75}
                    alt="Company logo icon"
                />
                <h1 className="hidden md:flex font-bold">Cracking the Fire Interview</h1>
            </div>

            <div>
                <input type="text" name="searchbar" id="searchbar" className="border rounded-lg py-1 px-7 md:py-2 md:px-16 lg:px-32  searchbar bg-orange" placeholder="Search..." />
            </div>

            <div className="flex justify-center items-center gap-6">
                <Link href='/createpost'><svg xmlns="http://www.w3.org/2000/svg" height="2.25em" viewBox="0 0 448 512" style={{ fill: '#fb923c' }} className="createpostbutton"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg></Link>
                <Link href='/notifications'><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" style={{ fill: '#fb923c' }} className="notificationbutton"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" /></svg></Link>
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                    <SignOutButton>

                    </SignOutButton>
                </SignedIn>
                <SignedOut>
                    <SignInButton></SignInButton>
                </SignedOut>
            </div>
        </nav>
    )
}
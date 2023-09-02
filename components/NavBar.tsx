import { UserButton } from "@clerk/nextjs"
import Image from "next/image"

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

            <div className="border rounded-lg py-1 px-7 md:py-2 md:px-16 lg:px-32  searchbar bg-orange">
                <h1>SEARCH BAR</h1>
            </div>

            <div>
                <UserButton afterSignOutUrl="/" />
            </div>
        </nav>
    )
}
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"

export default function NavBar() {
    return (
        <nav className="navbar-container flex justify-between items-center mx-5 my-2">
            <div className="">
                <Image
                    src='/company-logo.png'
                    width={75}
                    height={75}
                    alt="Company logo icon"
                />
            </div>

            <div>

            </div>

            <div>
                <UserButton afterSignOutUrl="/" />
            </div>
        </nav>
    )
}
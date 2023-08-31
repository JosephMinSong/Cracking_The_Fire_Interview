import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import '../../styles/globals.css'

export const metadata = {
    title: "Cracking the Fire Interview",
    description: "A social media, web based application for aspiring firefighters to learn more about the firefighter interview process"
}

const inter = Inter( { subsets: ["latin"] } )

export default function RootLayout( { children }: { children: React.ReactNode } ) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className}`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
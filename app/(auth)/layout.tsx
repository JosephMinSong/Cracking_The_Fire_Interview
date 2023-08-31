import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import '../../styles/globals.css'
import Footer from "@/components/general/Footer"
import Header from "@/components/auth/Header"

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
                    <Header />
                    {children}
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    )
}
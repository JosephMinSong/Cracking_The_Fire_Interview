import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

import '../globals.css'
import Topbar from "@/components/shared/Topbar"
import LeftSidebar from "@/components/shared/LeftSidebar"
import RightSidebar from "@/components/shared/RightSidebar"
import BottomBar from "@/components/shared/Bottombar"

export const metadata = {
    title: "Cracking the Fire Interview",
    description: "A Next.js 13 Social Media Application for aspiring/current firefighters"
}

const inter = Inter( { subsets: ["latin"] } )

export default function RootLayout( { children }: { children: React.ReactNode } ) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <Topbar />

                    <main>
                        <LeftSidebar />

                        <section className="main-container">
                            <div className="w-full max-w-4xl">
                                {children}
                            </div>
                        </section>

                        <RightSidebar />
                    </main>

                    <BottomBar />
                </body>
            </html>
        </ClerkProvider>
    )
}
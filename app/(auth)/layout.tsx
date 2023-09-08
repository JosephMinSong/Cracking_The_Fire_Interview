import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import '../../styles/globals.css'
import Footer from "@/components/Footer"
import Header from "@/components/auth/Header"
import Head from "next/head"

export const metadata = {
    title: "Cracking the Fire Interview",
    description: "A social media, web based application for aspiring firefighters to learn more about the firefighter interview process"
}

const inter = Inter( { subsets: ["latin"] } )

export default function RootLayout( { children }: { children: React.ReactNode } ) {
    return (
        <ClerkProvider>
            <html lang="en">
                <Head>
                    <link
                        rel="icon"
                        href="/icon?<generated>"
                        type="image/<generated>"
                        sizes="<generated"
                    />
                </Head>
                <body className={`${inter.className}`}>
                    <Header />
                    {children}
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    )
}
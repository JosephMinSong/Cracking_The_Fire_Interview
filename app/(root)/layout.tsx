import '../../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Leftsidebar from '@/components/Leftsidebar'

const inter = Inter( { subsets: ['latin'] } )

export const metadata: Metadata = {
    title: 'Cracking the Fire Interview',
    description: 'A social media, web based application for aspiring firefighters to learn more about the firefighter interview process, including the entrance exams (i.e. Public Safety Testing, National Testing Network), CPAT, and the actual interview process!',
}

export default function RootLayout( {
    children,
}: {
    children: React.ReactNode
} ) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={inter.className}>
                    <NavBar />

                    <main className='flex'>

                        <Leftsidebar />

                        <section className='main-container max-md:pb-32 sm:px-10'>
                            <div className='w-full max-w-5xl'>
                                {children}
                            </div>
                        </section>

                    </main>
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    )
}

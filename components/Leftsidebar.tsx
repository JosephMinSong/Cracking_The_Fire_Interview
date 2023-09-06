import Link from 'next/link';
import { sidebarLinks } from '../constants/leftsidebarlinks';
import Image from 'next/image';

export default function Leftbar() {
    return (
        <section className="sticky left-10 top-0 z-20 flex h-screen w-fit flex-col justify-between gap-12 overflow-auto border-1 border-r-dark-4 pb-5 pt-20 max-md:hidden">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {sidebarLinks.map( ( link, i ) => (
                    <Link
                        href={link.route}
                        key={i}
                        className='sidebar_link'
                    >
                        <div className='flex justify-between items-center text-center gap-6'>
                            {link.icon}
                            <span className='flex w-full justify-center items-center font-semibold'>{link.label}</span>
                        </div>
                    </Link>
                ) )}
            </div>
        </section>
    )
}
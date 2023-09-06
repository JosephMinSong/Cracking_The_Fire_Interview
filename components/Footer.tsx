import Image from "next/image";

export default function Footer() {
    return (
        <div className="footer flex items-center justify-center mt-10 p-10 text-center">
            <Image
                src='/copyright.png'
                width={30}
                height={30}
                alt="Copyright icon"
                className="rounded-lg"
            />
            <h1 className="text-xs md:text-base">2023 Cracking the Fire Interview | All rights reserved</h1>
        </div>
    )
}
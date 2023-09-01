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
            <h1>2023 Joseph Song | All rights reserved</h1>
        </div>
    )
}
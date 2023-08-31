import Image from "next/image"

export default function Header() {
    return (
        <div className="title-container flex flex-col align-center justify-center mt-12 text-center font-montserrat">
            <div className="flex flex-col justify-center items-center gap-5 text-center">
                <Image
                    src='/company-logo.png'
                    width={100}
                    height={100}
                    alt="company-logo"
                    className="rounded"
                />
                <h1 className="title-header text-orange text-3xl font-extrabold lg:text-5xl">Cracking The Fire Interview</h1>
            </div>
            <p className="text-lg bg-orange rounded mx-5 font-bold lg:text-2xl lg:mt-5 p-4 lg:mx-52">Welcome to your new family of firefighters</p>
        </div>
    )
}
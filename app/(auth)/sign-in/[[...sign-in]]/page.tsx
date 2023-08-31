import { SignIn } from "@clerk/nextjs";
import '../../../../styles/signin.css'

import Image from "next/image";

export default function Page() {
    return (
        <main>

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

            <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-10">
                <SignIn />
                <div className="flex flex-col justify-center items-center">
                    <Image
                        src='/hero-image.png'
                        width={600}
                        height={600}
                        alt="Picture of multiple fire engines at night"
                        className="rounded-lg"
                    />
                </div>
            </div>

            <div className="description-container mt-12 lg:mx-52 rounded-lg p-5">
                <h1 className="font-open-sans text-2xl font-bold mx-5 p-2 lg:text-3xl">Learn more about the firefighter interview process</h1>
                <hr />
                <ul>
                    <li className="mx-5 mt-5 lg:text-lg">Join a community dedicated to helping the newer generation of firefighter achieve their dreams</li>
                    <li className="mx-5 mt-5 lg:text-lg">Post questions about anything you are curious about or is confusing to you with no judgement</li>
                    <li className="mx-5 mt-5 lg:text-lg">Read insightful answers from successful recruits who have been hired and read about their journey</li>
                </ul>
            </div>

        </main>
    );
}
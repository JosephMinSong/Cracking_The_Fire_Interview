import { SignIn } from "@clerk/nextjs";
import '../../../../styles/signin.css'

export default function Page() {
    return (
        <main>

            <div className="title-container flex flex-col align-center justify-center mt-12 text-center font-montserrat">
                <h1 className="title-header text-orange text-3xl font-bold">Cracking The Fire Interview</h1>
                <p className="text-lg">Welcome to your new family of firefighters</p>
            </div>

            <div className="mt-10">
                <SignIn />
            </div>

            <div className="mt-14">
                <h1>Learn more about the firefighter interview process</h1>
            </div>

        </main>
    );
}
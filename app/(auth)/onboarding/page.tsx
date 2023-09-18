import AccountProfile from "@/components/forms/AccountProfile"
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation";

export default async function Page() {

    const user = await currentUser();
    if ( !user ) return null;

    const userInfo = await fetchUser( user.id );
    if ( userInfo?.onboarded ) redirect( "/" )

    const userData = {
        id: user?.id,
        objectId: userInfo?._id,
        username: userInfo?.username || user?.username,
        status: userInfo?.status || "",
        bio: userInfo?.bio || "",
        image: userInfo?.image || user?.imageUrl
    }

    return (
        <main className="flex justify-center items-center text-center">
            <div className="inline-block mt-6">
                <h1 className="text-xl lg:text-3xl font-extrabold">Introduce yourself to the crew!</h1>

                <section className="mt-10 rounded-2xl bg-strongOrangeBackground p-10">
                    <AccountProfile user={userData} btnTitle="Continue" />
                </section>
            </div>
        </main>
    )
}
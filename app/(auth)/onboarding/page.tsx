import AccountProfile from "@/components/forms/AccountProfile"
import { currentUser } from "@clerk/nextjs"

export default async function Page() {

    const user = await currentUser();

    const userInfo = {};

    const userData = {
        id: user?.id,
        objectId: userInfo?._id,
        username: userInfo?.username || user?.username,
        status: userInfo?.status || "",
        bio: userInfo?.bio || "",
        image: userInfo?.image || user?.imageUrl
    }

    return (
        <main className="flex justify-center items-center">
            <div className="inline-block mt-6">
                <h1 className="text-xl lg:text-3xl font-extrabold">Introduce yourself to the crew!</h1>

                <section className="mt-10">
                    <AccountProfile user={user} btnTitle="Continue" />
                </section>
            </div>
        </main>
    )
}
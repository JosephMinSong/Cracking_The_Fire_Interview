import AccountProfile from "@/components/forms/accountprofile"
import { currentUser } from "@clerk/nextjs"

export default async function Page() {

    const user = await currentUser();

    const userInfo = {};

    const userData = {
        id: user?.id,
        objectId: userInfo?._id,
        username: userInfo?.username || user?.username,
        bio: userInfo?.bio || "",
        image: userInfo?.image || user?.imageUrl
    }

    return (
        <main>
            <div className="flex flex-col lg:flex-row justify-center mt-5 mx-10">
                <h1 className="text-xl font-bold">Introduce yourself to the crew!</h1>

                <section>
                    <AccountProfile user={userData} btnTitle="Continue" />
                </section>
            </div>
        </main>
    )
}
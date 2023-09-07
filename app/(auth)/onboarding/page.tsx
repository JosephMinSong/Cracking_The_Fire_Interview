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
            <div className="flex justify-center mt-10">
                <h1 className="text-xl font-bold">Introduce yourself to the crew!</h1>

                <section>
                    <AccountProfile user={userData} btnTitle="Continue" />
                </section>
            </div>
        </main>
    )
}
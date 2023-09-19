import Image from "next/image"
import { currentUser } from "@clerk/nextjs"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Props {
    id: string,
    username: string,
    image: string,
    status: string,
    bio: string
}

export default async function UserProfile( {
    id,
    username,
    image,
    status,
    bio
}: Props ) {

    const user = await currentUser();
    if ( !user ) return null

    return (
        <main className="flex justify-between items-center w-full">
            <div className="flex flex-col flex-1 justify-center items-center gap-8">
                <div>
                    <Image
                        src={image}
                        width={175}
                        height={175}
                        alt="User profile picture"
                        className="rounded-xl"
                    />
                </div>
                <div className="profile-div">
                    <h1 className="font-bold">Username: </h1>
                    <h1 className="text-2xl font-bold">{username}</h1>
                </div>
                <div className="profile-div">
                    <h2 className="font-bold">Bio:</h2>
                    <h2>{bio}</h2>
                </div>
                <div className="profile-div">
                    <h2 className="font-bold">Status:</h2>
                    <h2>{status}</h2>
                </div>
                <div className="profile-buttons">
                    {user.id == id ? (
                        <h1>Edit Profile</h1>
                    ) : (
                        <>
                            <h1>Add Friend</h1>
                            <h1>Send Message</h1>
                        </>
                    )}
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">Make changes to your account here.</TabsContent>
                    <TabsContent value="password">Change your password here.</TabsContent>
                </Tabs>
            </div>
        </main>
    )
}
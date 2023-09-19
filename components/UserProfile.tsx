'use client'

import Image from "next/image"

interface Props {
    id: string,
    username: string,
    image: string,
    status: string,
    bio: string
}

export default function UserProfile( {
    id,
    username,
    image,
    status,
    bio
}: Props ) {
    return (
        <main className="flex flex-col justify-center items-center gap-8">
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
                <h1>Add Friend</h1>
                <h1>Send Message</h1>
            </div>
        </main>
    )
}
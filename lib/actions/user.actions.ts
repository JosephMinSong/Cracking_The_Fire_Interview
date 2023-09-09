"use server"

import { connectToDB } from "../mongoose"
import User from "../models/user.model"
import { revalidatePath } from "next/cache";

interface Params {
    userId: string,
    username: string,
    status: string,
    image: string,
    bio: string,
    path: string
}

export async function updateUser( {
    userId,
    username,
    status,
    image,
    bio,
    path
}: Params ): Promise<void> {
    connectToDB();

    try {
        await User.findOneAndUpdate(
            { id: userId },
            {
                username: username.toLowerCase(),
                bio,
                image,
                status,
                onboarded: true,
            },
            { upsert: true }
        );

        // NextJs function that allows you to revalidate data associated with a specific path -> useful for scenarios where you want to update your cached data without waiting fro a revalidation period to expire
        if ( path === '/profile/edit' ) {
            revalidatePath( path )
        }
    } catch ( error: any ) {
        throw new Error( `Failed to create/update user: ${error.message}` )
    }

}
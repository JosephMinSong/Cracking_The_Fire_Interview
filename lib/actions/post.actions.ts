"use server"

import { connectToDB } from "../mongoose"
import Post from "../models/post.model"
import User from "../models/user.model";
import { revalidatePath } from "next/cache";

interface Params {
    title: string,
    post: string,
    author: string,
    path: string
}

export async function createPost( {
    title, post, author, path
}: Params ) {

    try {
        connectToDB();

        const createdPost = await Post.create( {
            title,
            post,
            author
        } );

        // Update user model and add this post to their profile
        await User.findByIdAndUpdate( author, {
            $push: { posts: createdPost._id }
        } )

        // revalidate path
        revalidatePath( path );
    } catch ( error: any ) {
        throw new Error( `Error creating post: ${error.message}` )
    }
}
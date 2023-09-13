"use server"

import { connectToDB } from "../mongoose"
import Post from "../models/post.model"
import User from "../models/user.model";
import Comment from "../models/comment.model";
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

export async function fetchPosts( pageNumber = 1, pageSize = 20 ) {
    connectToDB();

    // Calculating the number of posts to skip
    const skipAmount = ( pageNumber - 1 ) * pageSize;

    // get all posts
    const postsQuery = Post.find()
        .sort( { createdAt: 'desc' } )
        .skip( skipAmount )
        .limit( pageSize )
        .populate( { path: 'author', model: User } )
    // .populate( {
    //     path: 'children',
    //     populate: {
    //         path: 'author',
    //         model: User,
    //         select: '_id name parentId image'
    //     }
    // } )

    const totalPostsCount = await Post.countDocuments()

    const posts = await postsQuery.exec();

    const isNext = totalPostsCount > skipAmount + posts.length;

    return { posts, isNext }
}
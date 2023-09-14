import mongoose from "mongoose";

const postSchema = new mongoose.Schema( {
    title: {
        type: String
    },
    post: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    parentId: {
        type: String
    },
    children: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
} );

const Post = mongoose.models.Post || mongoose.model( 'Post', postSchema );

export default Post;
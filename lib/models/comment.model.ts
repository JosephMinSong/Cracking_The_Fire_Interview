import mongoose from "mongoose";

const commentSchema = new mongoose.Schema( {
    body: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    parentId: { type: String }
} );

const Comment = mongoose.models.Comment || mongoose.model( 'Comment', commentSchema );

export default Comment;
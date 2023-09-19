import * as z from 'zod';

export const PostValidation = z.object( {
    title: z.string().nonempty().min( 3, { message: "Title must be a minimum of 3 characters long" } ),
    post: z.string().nonempty().min( 3, { message: "Post must be a minimum of 3 characters long" } ),
    accountId: z.string()
} )

export const CommentValidation = z.object( {
    post: z.string().nonempty().min( 3, { message: "Minimum of 3 characters long" } ),
    accountId: z.string()
} )
import * as z from 'zod';

export const UserValidation = z.object( {
    profile_photo: z.string().url().nonempty(),
    username: z.string().min( 1 ).max( 30 ),
    status: z.string(),
    bio: z.string().max( 1000 ),
} )
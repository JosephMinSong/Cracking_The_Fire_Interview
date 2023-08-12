import * as z from 'zod';

export const UserValidation = z.object( {
    profile_photo: z.string().url().nonempty(),
    name: z.string().min( 3, { message: "The minimum length is 3 characters!" } ).max( 30, { message: "The maximum length is 30 characters!" } ),
    username: z.string().min( 3, { message: "The minimum length is 3 characters!" } ).max( 100, { message: "The maximum length is 100 characters!" } ),
    BIO: z.string().min( 3, { message: "The minimum length is 3 characters!" } ).max( 1000, { message: "The maximum length is 1000 characters!" } ),
} )
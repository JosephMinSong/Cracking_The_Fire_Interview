'use client'

// ShadCN UI
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// React Hook Form
import { useForm } from 'react-hook-form';

// Zod + Validations
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

import { usePathname, useRouter } from "next/navigation"
import { PostValidation } from "@/lib/validations/post"

import { createPost } from "@/lib/actions/post.actions"

export default function PostForm( { userId }: { userId: string } ) {
    const router = useRouter();
    const pathname = usePathname();

    const form = useForm<z.infer<typeof PostValidation>>( {
        resolver: zodResolver( PostValidation ),
        defaultValues: {
            title: '',
            post: '',
            accountId: userId
        }
    } )

    const onSubmit = async ( values: z.infer<typeof PostValidation> ) => {
        await createPost( {
            title: values.title,
            post: values.post,
            author: userId,
            path: pathname
        } )

        router.push( "/" )
    }

    return (
        <Form {...form}>
            <h1 className="text-2xl font-bold">Create a new post</h1>
            <form
                onSubmit={form.handleSubmit( onSubmit )}
                className="flex flex-col gap-10 mt-5">
                {/* Username */}
                <FormField
                    control={form.control}
                    name="title"
                    render={( { field } ) => (
                        <FormItem className="flex flex-col justify-start items-start gap-1 w-full">
                            <FormLabel className="text-base-semibold">
                                Title
                            </FormLabel>
                            <FormControl className="flex-1 text-base-semibold">
                                <Input
                                    type="text"
                                    className="account-form_input no-focus"
                                    placeholder="Your title here..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Bio */}
                <FormField
                    control={form.control}
                    name="post"
                    render={( { field } ) => (
                        <FormItem className="flex flex-col justify-start items-start gap-1 w-full">
                            <FormLabel className="text-base-semibold">
                                Post
                            </FormLabel>
                            <FormControl className="flex-1 text-base-semibold no-focus">
                                <Textarea
                                    placeholder="Your post here..."
                                    rows={20}
                                    cols={50}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="submit-button">Post!</Button>
            </form>
        </Form>
    )
}
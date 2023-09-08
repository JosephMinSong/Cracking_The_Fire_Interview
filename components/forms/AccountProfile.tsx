'use client'

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
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { UserValidation } from "@/lib/validations/user";
import { z } from "zod";


interface Props {
    user: {
        id: string,
        objectId: string,
        username: string,
        bio: string,
        image: string
    },
    btnTitle: string
}

export default function AccountProfile( { user, btnTitle }: Props ) {

    const form = useForm<z.infer<typeof UserValidation>>( {
        resolver: zodResolver( UserValidation ),
        defaultValues: {
            profile_photo: "",
            username: "",
            bio: "",
        }
    } )

    function onSubmit( values: z.infer<typeof UserValidation> ) {
        console.log( values )
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit( onSubmit )} className="space-y-8">
                <FormField
                    control={form.control}
                    name="profile_photo"
                    render={( { field } ) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
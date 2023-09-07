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

    const handleSubmit = ( values: z.infer<typeof UserValidation> ) => {
        console.log( values )
    }

    return (
        <Form>

        </Form>
    )
}
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// React Hook Form
import { useForm } from 'react-hook-form';

// Zod + Validations
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { UserValidation } from "@/lib/validations/user";


import Image from "next/image";
import { ChangeEvent } from "react";


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

    const handleImage = ( e: ChangeEvent, fieldChange: ( value: string ) => void ) => {
        e.preventDefault();
    }

    function onSubmit( values: z.infer<typeof UserValidation> ) {
        console.log( values )
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit( onSubmit )}
                className="flex flex-col justify-start gap-10">
                {/* Profile Picture */}
                <FormField
                    control={form.control}
                    name="profile_photo"
                    render={( { field } ) => (
                        <FormItem className="flex justify-center items-center gap-5">
                            <FormLabel className="account-form_image-label">
                                {field.value ? (
                                    <Image
                                        src={field.value}
                                        alt="profile photo"
                                        width={96}
                                        height={96}
                                        priority
                                        className="rounded-full object-contain"
                                    />
                                ) : (
                                    <Image
                                        src="/profile.svg"
                                        alt="profile photo"
                                        width={96}
                                        height={96}
                                        priority
                                        className="rounded-lg object-contain"
                                    />
                                )}
                            </FormLabel>
                            <FormControl className="flex-1 text-base-semibold">
                                <Input
                                    type="file"
                                    accept="image/*"
                                    placeholder="Upload a photo"
                                    onChange={( e ) => handleImage( e, field.onChange )}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Username */}
                <FormField
                    control={form.control}
                    name="username"
                    render={( { field } ) => (
                        <FormItem className="flex justify-center items-center gap-5 w-full">
                            <FormLabel className="text-base-semibold">
                                Name
                            </FormLabel>
                            <FormControl className="flex-1 text-base-semibold">
                                <Input
                                    type="text"
                                    className="account-form_input no-focus"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Status */}
                <FormField
                    control={form.control}
                    name="status"
                    render={( { field } ) => (
                        <FormItem className="flex justify-center items-center gap-5 w-full">
                            <FormLabel>Current Status: </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select where you are in the process" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="curious">I'm just curious about the process</SelectItem>
                                    <SelectItem value="preparing">I'm preparing for the exams and interviews</SelectItem>
                                    <SelectItem value="volunteer">I'm a volunteer firefighter</SelectItem>
                                    <SelectItem value="probationary">I'm a probationary firefighter</SelectItem>
                                    <SelectItem value="career">I'm a career firefighter</SelectItem>
                                    <SelectItem value="retired">I'm a retired firefighter</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />

                {/* Bio */}
                <FormField
                    control={form.control}
                    name="bio"
                    render={( { field } ) => (
                        <FormItem className="flex justify-center items-center gap-5 w-full">
                            <FormLabel className="text-base-semibold">
                                Bio
                            </FormLabel>
                            <FormControl className="flex-1 text-base-semibold">
                                <Textarea
                                    placeholder="Add anything that you want to share!"
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />


                <Button type="submit">{btnTitle}</Button>
            </form>
        </Form>
    )
}
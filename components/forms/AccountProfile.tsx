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

import { useUploadThing } from "@/lib/uploadthing"

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { isBase64Image } from "@/lib/utils"
import { updateUser } from "@/lib/actions/user.actions"
import { usePathname, useRouter } from "next/navigation"


interface Props {
    user: {
        id: string,
        objectId: string,
        username: string,
        bio: string,
        status: string,
        image: string
    },
    btnTitle: string
}

export default function AccountProfile( { user, btnTitle }: Props ) {

    const [files, setFiles] = useState<File[]>( [] )
    const { startUpload } = useUploadThing( "media" )
    const router = useRouter();
    const pathname = usePathname();

    const form = useForm<z.infer<typeof UserValidation>>( {
        resolver: zodResolver( UserValidation ),
        defaultValues: {
            profile_photo: user?.image || "",
            username: user?.username || "",
            status: user?.status || "",
            bio: user?.bio || "",
        }
    } )

    const handleImage = ( e: ChangeEvent<HTMLInputElement>, fieldChange: ( value: string ) => void ) => {
        e.preventDefault();

        const fileReader = new FileReader();

        if ( e.target.files && e.target.files.length > 0 ) {
            const file = e.target.files[0];

            setFiles( Array.from( e.target.files ) );

            if ( !file.type.includes( 'image' ) ) return;

            fileReader.onload = async ( event ) => {
                const imageDataUrl = event.target?.result?.toString() || '';

                fieldChange( imageDataUrl );
            };

            fileReader.readAsDataURL( file )
        }
    }

    const onSubmit = async ( values: z.infer<typeof UserValidation> ) => {
        // checking to see if we need to upload a new profile pic
        const blob = values.profile_photo;

        // importing change function from utils.ts
        const hasImageChanged = isBase64Image( blob );

        // if the image has changed, then we call uploadthing to upload a new file
        if ( hasImageChanged ) {
            const imgRes = await startUpload( files )

            // and then set the new uploaded file to our profile photo
            if ( imgRes && imgRes[0].url ) {
                values.profile_photo = imgRes[0].url;
            }
        }

        // importing updateUser from user.actions.ts
        await updateUser( {
            image: values.profile_photo,
            username: values.username,
            status: values.status,
            bio: values.bio,
            userId: user.id,
            path: pathname
        } )

        // if we are in the edit page, then go back to where we came from
        // else, we go to the home page
        if ( pathname === '/profile/edit' ) {
            router.back();
        } else {
            router.push( '/' )
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit( onSubmit )}
                className="flex flex-col gap-10">

                {/* Profile Picture */}
                <FormField
                    control={form.control}
                    name="profile_photo"
                    render={( { field } ) => (
                        <FormItem className="flex items-center gap-5">
                            <FormLabel className="account-form_image-label">
                                {field.value ? (
                                    <Image
                                        src={field.value}
                                        alt="profile_photo"
                                        width={96}
                                        height={96}
                                        priority
                                        className="rounded-full object-contain"
                                    />
                                ) : (
                                    <Image
                                        src="/profile.svg"
                                        alt="profile photo"
                                        width={42}
                                        height={42}
                                        priority
                                        className="object-contain"
                                    />
                                )}
                            </FormLabel>
                            <div className="flex flex-col justify-start items-start gap-1">
                                <FormControl className="flex-1 text-base-semibold">
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        placeholder="Upload a photo"
                                        onChange={( e ) => handleImage( e, field.onChange )}
                                        className="account-form_image-input"
                                    />
                                </FormControl>
                                <FormMessage />
                                <FormDescription>
                                    This will be your profile picture
                                </FormDescription>
                            </div>
                        </FormItem>
                    )}
                />

                {/* Username */}
                <FormField
                    control={form.control}
                    name="username"
                    render={( { field } ) => (
                        <FormItem className="flex flex-col justify-start items-start gap-1 w-full">
                            <FormLabel className="text-base-semibold">
                                Username
                            </FormLabel>
                            <FormControl className="flex-1 text-base-semibold">
                                <Input
                                    type="text"
                                    className="account-form_input no-focus"
                                    placeholder="Your new username"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Status */}
                <FormField
                    control={form.control}
                    name="status"
                    render={( { field } ) => (
                        <FormItem className="flex flex-col justify-start items-start gap-1 w-full">
                            <FormLabel>Current Status: </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select where you are in the process" />
                                    </SelectTrigger>
                                </FormControl>
                                <FormMessage />
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
                        <FormItem className="flex flex-col justify-start items-start gap-1 w-full">
                            <FormLabel className="text-base-semibold">
                                Bio
                            </FormLabel>
                            <FormControl className="flex-1 text-base-semibold">
                                <Textarea
                                    placeholder="Add anything that you want to share!"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="submit-button">{btnTitle}</Button>
            </form>
        </Form>
    )
}
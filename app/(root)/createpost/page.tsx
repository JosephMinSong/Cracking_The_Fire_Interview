import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { fetchUser } from "@/lib/actions/user.actions";
import PostForm from "@/components/forms/PostForm";

export default async function CreatePost() {

    const user = await currentUser();

    if ( !user ) return null;

    const userInfo = await fetchUser( user.id );

    if ( !userInfo?.onboarded ) redirect( '/onboarding' )

    return (
        <>
            <PostForm userId={userInfo._id} />
        </>
    )
}
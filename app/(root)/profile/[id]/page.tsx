
import { fetchUser } from "@/lib/actions/user.actions"
import { useParams } from "next/navigation"

export default async function Profile( { params }: { params: { id: string } } ) {

    const userInfo = await fetchUser( params.id )

    return (
        <main>
            <
        </main>
    )
}
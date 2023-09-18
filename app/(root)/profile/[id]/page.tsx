
import { fetchUser } from "@/lib/actions/user.actions"
import { useParams } from "next/navigation"

export default function Profile() {

    const id = useParams().id.toString();
    const user = fetchUser( id )
    console.log( user )

    return (
        <main>

        </main>
    )
}
import { formatDateString } from "@/lib/utils"

interface Props {
    id: string,
    currentUserId: string,
    title: string,
    content: string,
    author: {
        name: string,
        image: string,
        id: string
    },
    createdAt: string,
    comments: {
        author: {
            image: string
        }
    }[],
}


export default function PostCard( {
    id,
    currentUserId,
    title,
    content,
    author,
    createdAt,
    comments,
}: Props ) {
    return (
        <article className="postcard">
            <h1>{id}</h1>
            <div>
                <h1>{title}</h1>
            </div>
            <p>{content}</p>
            <p>{formatDateString( createdAt )}</p>
        </article>
    )
}
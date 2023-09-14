import { formatDateString } from "@/lib/utils"
import Image from "next/image"

interface Props {
    id: string,
    currentUserId: string,
    title: string,
    content: string,
    author: {
        username: string,
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
            <div className="flex flex-start items-center gap-5">
                <Image
                    src={author.image}
                    width={50}
                    height={50}
                    alt="author profile image"
                    className="rounded-xl"
                />
                <h1 className="text-xl font-extrabold">{author.username}</h1>
            </div>
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="ml-10">{content}</p>
            <div className="flex justify-between">
                <p>10 comments</p>
                <p>{formatDateString( createdAt )}</p>
            </div>
        </article>
    )
}
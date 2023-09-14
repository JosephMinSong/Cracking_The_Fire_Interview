import { formatDateString } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

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
    isComment?: boolean
}


export default function PostCard( {
    id,
    currentUserId,
    title,
    content,
    author,
    createdAt,
    comments,
    isComment
}: Props ) {

    return (
        <Link href={`/posts/${id}`}>
            <article className="postcard">
                <div className="flex justify-between">
                    <div className="flex flex-start items-center gap-5">
                        <Image
                            src={author.image}
                            width={50}
                            height={50}
                            alt="author profile image"
                            className="rounded-xl"
                        />
                        <h1 className="text-lg font-bold">{author.username}</h1>
                    </div>
                </div>
                <h1 className="text-xl font-extrabold">{title}</h1>
                <p className="ml-10 text-base">{content}</p>
                <div className="flex justify-between text-sm md:text-base">
                    <p>{comments.length} {comments.length == 1 ? "comment" : "comments"}</p>
                    <p>{formatDateString( createdAt )}</p>
                </div>
            </article>
        </Link>
    )
}
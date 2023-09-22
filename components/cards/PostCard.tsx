import { formatDateString } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import DeletePost from "../forms/DeletePost"

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
    }[]
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
        <Link href={`/posts/${id}`}>
            <article className="postcard">
                <div className="flex justify-between">
                    <div className="flex flex-start items-center gap-5">
                        <Link href={`/profile/${author.id}`}>
                            <Image
                                src={author.image}
                                width={50}
                                height={50}
                                alt="author profile image"
                                className="rounded-xl"
                            />
                        </Link>
                        <h1 className="text-lg font-bold">{author.username}</h1>
                    </div>
                    <DeletePost
                        postId={id}
                        currentUserId={currentUserId}
                        authorId={author.id}
                    />
                </div>
                <h1 className="text-xl font-extrabold">{title}</h1>
                <p className="ml-10 text-base">{content}</p>
                <div className="flex justify-between text-sm md:text-base">
                    <p>{comments.length} {comments.length == 1 ? "comment" : "comments"}</p>
                    <p suppressHydrationWarning>{formatDateString( createdAt )}</p>
                </div>
            </article>
        </Link>
    )
}
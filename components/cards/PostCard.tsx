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
        <article>
            <h2>{title}</h2>
            <h2>{content}</h2>
        </article>
    )
}
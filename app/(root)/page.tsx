import { fetchPosts } from "@/lib/actions/post.actions";
import { currentUser } from "@clerk/nextjs";
import dynamic from "next/dynamic";

// disable ssr to fix hydration issue
const PostCard = dynamic( () => import( '../../components/cards/PostCard' ), { ssr: false } )

export default async function Page() {

    const result = await fetchPosts( 1, 30 );
    const user = await currentUser();

    return (
        <section>
            {result.posts.length === 0 ? (
                <p>No posts found</p>
            ) : (
                <div className="postcard_container w-full max-w-5xl">
                    {result.posts.map( ( post ) => (
                        <PostCard
                            key={post._id}
                            id={post._id}
                            currentUserId={user?.id || ""}
                            title={post.title}
                            content={post.post}
                            author={post.author}
                            createdAt={post.createdAt}
                            comments={post.children}
                        />
                    ) )}
                </div>
            )}
        </section>
    )
}
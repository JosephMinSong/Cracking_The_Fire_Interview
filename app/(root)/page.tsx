import PostCard from "@/components/cards/PostCard";
import { fetchPosts } from "@/lib/actions/post.actions";
import { currentUser } from "@clerk/nextjs";

export default async function Page() {

    const result = await fetchPosts( 1, 30 );
    const user = await currentUser();


    console.log( result )

    return (
        <section>
            {result.posts.length === 0 ? (
                <p>No posts found</p>
            ) : (
                <>
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
                </>
            )}
        </section>
    )
}
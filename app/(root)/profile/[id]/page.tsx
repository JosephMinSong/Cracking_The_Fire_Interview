import UserProfile from "@/components/UserProfile";
import { fetchUser } from "@/lib/actions/user.actions";
import { useParams } from "next/navigation";

export default async function Profile({ params }: { params: { id: string } }) {
  const userInfo = await fetchUser(params.id);
  console.log(userInfo);

  return (
    <main className="flex justify-center">
      <UserProfile
        id={userInfo.id}
        username={userInfo.username}
        status={userInfo.status}
        image={userInfo.image}
        bio={userInfo.bio}
      />
    </main>
  );
}

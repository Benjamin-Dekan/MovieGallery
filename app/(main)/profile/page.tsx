import SignIn from "@/app/ui/signin-button";
import SignOut from "@/app/ui/signout-button";
import { auth } from "@/auth";

export default async function ProfilePage() {
  const session = await auth();

  return (
    <main>
      <h1 className="text-3xl font-bold mb-3">Profile</h1>

      <div>{session ? <SignOut /> : <SignIn />}</div>
    </main>
  );
}

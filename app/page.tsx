import { Button } from "@heroui/react";
import { signIn } from "./actions/sign-in";
import { signOut } from "./actions/sign-out";
import { auth } from "@/auth";
import Profile from "./components/Profile";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <span>Welcome to Talk to Go</span>
      <form action={signIn}>
        <Button type="submit" variant="primary">
          Sign in using Github
        </Button>
      </form>
      <form action={signOut}>
        <Button type="submit" variant="danger-soft">
          Sign Out
        </Button>
      </form>
      {session?.user ? (
        <span>user is signed in</span>
      ) : (
        <span>user is signed out</span>
      )}
      <Profile />
    </>
  );
}

"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@heroui/react";
import { signIn } from "@/app/actions/sign-in";
import { signOut } from "@/app/actions/sign-out";
export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;
  if(session.status === "loading") {
    authContent = null ;
  }
  else if (session?.data?.user) {
    authContent = (
      <Popover>
        <PopoverTrigger>
          <Avatar size="lg">
            <Avatar.Image src={session.data.user.image ?? ""} alt="User" />
            <Avatar.Fallback>U</Avatar.Fallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={signOut}>
              <Button type="submit" variant="danger-soft">
                Sign Out
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <form action={signIn}>
          <nav>
            <Button type="submit" variant="secondary">
              Sign In
            </Button>
          </nav>
        </form>
        <form action={signIn}>
          <nav>
            <Button type="submit" variant="primary">
              Sign Up
            </Button>
          </nav>
        </form>
      </>
    );
  }
  return authContent;
}

"use client";

import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();

  if (session?.data?.user) {
    return <span>Signed in</span>;
  } else {
    return <span>Signed out</span>;
  }
};

export default Profile;

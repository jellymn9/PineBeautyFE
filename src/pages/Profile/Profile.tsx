import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import Button from "@/components/UI/Button/Button";
import {
  HSeparator,
  MyAccountHeader,
  MyAccountHeaderTitle,
  ProfileContainer,
  ProfileContent,
  ProfileTabLink,
  ProfileTabs,
} from "./ProfileStyled";
import { Outlet } from "react-router-dom";
import { useProfile } from "@/queries/profile/useProfile";
import { useAuth } from "@/context/AuthContext";
import { Loader } from "@/components/UI/Loader/Loader";
import { mapErrorToMessageSafe } from "@/errors/errorMapper";

const TABS = [
  { id: 1, title: "Order history", path: "orders" },
  { id: 2, title: "Account details", path: "account" },
];

function Profile() {
  const { user } = useAuth();
  const {
    data: profile,
    isLoading,
    isError,
    error,
  } = useProfile(user?.uid || "");

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return mapErrorToMessageSafe(error);
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully.");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <ProfileContainer>
      <Helmet>
        <title>PineBeauty | My Profile</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <MyAccountHeader>
        <MyAccountHeaderTitle>My Account</MyAccountHeaderTitle>
        <Button
          text="Log out"
          icon={<ChevronRight strokeWidth={1} size={22} />}
          handleClick={handleLogout}
        />
      </MyAccountHeader>
      <HSeparator />

      <ProfileTabs>
        {TABS.map((tab) => (
          <ProfileTabLink key={tab.id} to={tab.path}>
            {tab.title}
          </ProfileTabLink>
        ))}
      </ProfileTabs>

      <ProfileContent>
        <Outlet context={{ profile }} />
      </ProfileContent>
    </ProfileContainer>
  );
}

export default Profile;

import { ChevronRight } from "lucide-react";

// import { useAuth } from "../../context/AuthContext";
import Button from "../../components/Button/Button";
import {
  HSeparator,
  MyAccountHeader,
  MyAccountHeaderTitle,
  ProfileCard,
  ProfileCards,
  ProfileCardTitle,
  ProfileContainer,
} from "./ProfileStyled";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const tabs = [
  { id: 1, title: "Order history" },
  { id: 2, title: "Account details" },
];

function Profile() {
  //const { logout } = useAuth();

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
      <MyAccountHeader>
        <MyAccountHeaderTitle>My Account</MyAccountHeaderTitle>
        <Button
          text="Log out"
          icon={<ChevronRight strokeWidth={1} size={22} />}
          handleClick={handleLogout}
        />
      </MyAccountHeader>
      <HSeparator />
      <ProfileCards>
        {tabs.map((tab) => (
          <ProfileCard key={tab.id}>
            <ProfileCardTitle>{tab.title}</ProfileCardTitle>
          </ProfileCard>
        ))}
      </ProfileCards>
    </ProfileContainer>
  );
}

export default Profile;

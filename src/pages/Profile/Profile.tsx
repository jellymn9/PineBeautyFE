import { ChevronRight } from "lucide-react";

import { removeUserSession } from "../../helpers/authHelper";
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

const tabs = [
  { id: 1, title: "Order history" },
  { id: 2, title: "Account details" },
];

function Profile() {
  return (
    <ProfileContainer>
      <MyAccountHeader>
        <MyAccountHeaderTitle>My Account</MyAccountHeaderTitle>
        <Button
          text="Log out"
          icon={<ChevronRight strokeWidth={1} size={22} />}
          handleClick={() => removeUserSession()}
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

import { Link } from "react-router-dom";
import { Search } from "lucide-react";

import { useDrawer } from "@/context/DrawerContext";
import { NAV_LINKS } from "@/utils/constants";
import { CloseButton } from "@/components/CloseBtn/CloseBtn";
import Drawer from "@/components/Drawer/Drawer";
import {
  HSeparator,
  IconsContainer,
  InputContainer,
  NavLinks,
  SearchInput,
} from "./NavDrawerStyled";

const NavDrawer = function () {
  const { closeDrawer } = useDrawer();

  return (
    <Drawer>
      <>
        <IconsContainer>
          {NAV_LINKS.iconLinks.map(
            ({ route, icon, mobile }) =>
              mobile && <Link to={route}>{icon}</Link>
          )}
          <CloseButton handleClose={closeDrawer} />
        </IconsContainer>
        <HSeparator />
        <InputContainer>
          {/* improve later, create custom input */}
          <SearchInput placeholder="Search..."></SearchInput>
          <Search />
        </InputContainer>
        <HSeparator />
        {NAV_LINKS.textualLinks.map(({ route, name }) => (
          <>
            <NavLinks to={route}>{name}</NavLinks>
            <HSeparator />
          </>
        ))}
      </>
    </Drawer>
  );
};

export default NavDrawer;

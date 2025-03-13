import { Search } from "lucide-react";
import { navLinks } from "../../../utils/constants";
import { CloseButton } from "../../CloseBtn/CloseBtn";
import {
  Container,
  Drawer,
  HSeparator,
  IconsContainer,
  InputContainer,
  NavLinks,
  SearchInput,
} from "./NavDrawerStyled";
import { useDrawer } from "../../../context/DrawerContext";
import { Link } from "react-router-dom";

const NavDrawer = function () {
  const { closeDrawer, isOpen } = useDrawer();

  return (
    <Container $isOpen={isOpen}>
      <Drawer $isOpen={isOpen}>
        <IconsContainer>
          {navLinks.iconLinks.map(
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
        {navLinks.textualLinks.map(({ route, name }) => (
          <>
            <NavLinks to={route}>{name}</NavLinks>
            <HSeparator />
          </>
        ))}
      </Drawer>
    </Container>
  );
};

export default NavDrawer;

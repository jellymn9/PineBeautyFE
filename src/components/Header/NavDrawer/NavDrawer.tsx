import { Search } from "lucide-react";
import { navLinks } from "../../../utils/constants";
import { CloseButton } from "../../CloseBtn/CloseBtn";
import {
  Container,
  Drawer,
  HSeparator,
  InputContainer,
  NavLinks,
  SearchInput,
} from "./NavDrawerStyled";
import { useDrawer } from "../../../context/DrawerContext";

const NavDrawer = function () {
  const { closeDrawer, isOpen } = useDrawer();

  return (
    <Container $isOpen={isOpen}>
      <Drawer $isOpen={isOpen}>
        <CloseButton handleClose={closeDrawer} />
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

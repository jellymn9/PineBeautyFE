import CartSVG from "../../assets/user.svg?react";
import UserSVG from "../../assets/cart.svg?react";
import LogoSVG from "../../assets/logo.svg?react";
import SearchSVG from "../../assets/search.svg?react";

import {
  Container,
  TopLinksBar,
  BlogLink,
  Separator,
  HeaderLink,
  TopLinksBarSection,
  Label,
  ProfileCartBar,
  LogoContainer,
  MainNavBar,
  MainLinksContainer,
  HSeparator,
} from "./HeaderStyled";

function Header() {
  const label = "Serbian natural and organic Cosmetics";
  const blog = "Blog";
  const shipping = "International shipping";
  const samples = "Free samples";

  const navLinks = [
    { route: "", name: "home" },
    { route: "", name: "products" },
    { route: "", name: "offers" },
    { route: "", name: "free samples" },
  ];
  return (
    <Container>
      <TopLinksBar>
        <TopLinksBarSection>
          <Label>{label}</Label>
          <Separator />
          <BlogLink to={""}>{blog}</BlogLink>
        </TopLinksBarSection>
        <TopLinksBarSection>
          <HeaderLink to="">{shipping}</HeaderLink>
          <Separator />
          <HeaderLink to="">{samples}</HeaderLink>
        </TopLinksBarSection>
      </TopLinksBar>
      <ProfileCartBar>
        <CartSVG />
        <UserSVG />
      </ProfileCartBar>
      <LogoContainer>
        <LogoSVG width="100px" height="100px" />
      </LogoContainer>
      <MainNavBar>
        <MainLinksContainer>
          {navLinks?.map((link) => (
            <HeaderLink to={link.route} key={link.name}>
              {link.name}
            </HeaderLink>
          ))}
        </MainLinksContainer>
        <SearchSVG width="22px" height="22px" />
      </MainNavBar>
      <HSeparator />
    </Container>
  );
}

export default Header;

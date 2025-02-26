import { User, Search, ShoppingCart } from "lucide-react";

import { routes } from "../../utils/constants";
import Icon from "../Icon/Icon";
import { Container, LinksContainer, LinkStyled } from "./HeaderStyled";

function Header() {
  // const label = "Serbian natural and organic Cosmetics";
  // const blog = "Blog";
  // const shipping = "International shipping";
  // const samples = "Free samples";

  const navLinks = [
    { route: routes.home, nameOrIcon: "home" },
    { route: routes.products, nameOrIcon: "products" },
    { route: "", nameOrIcon: <User size={22} strokeWidth={2} /> },
    { route: "", nameOrIcon: <Search size={22} strokeWidth={2} /> },
    { route: "", nameOrIcon: <ShoppingCart size={22} strokeWidth={2} /> },
  ];
  return (
    <Container>
      <Icon name="logo" width="75px" height="75px" />
      <LinksContainer>
        {navLinks.map(({ route, nameOrIcon }) => (
          <LinkStyled to={route}>{nameOrIcon}</LinkStyled>
        ))}
      </LinksContainer>
    </Container>
    // <Container>
    //   <TopLinksBar>
    //     <TopLinksBarSection>
    //       <Label>{label}</Label>
    //       <Separator />
    //       <BlogLink to={""}>{blog}</BlogLink>
    //     </TopLinksBarSection>
    //     <TopLinksBarSection>
    //       <HeaderLink to="">{shipping}</HeaderLink>
    //       <Separator />
    //       <HeaderLink to="">{samples}</HeaderLink>
    //     </TopLinksBarSection>
    //   </TopLinksBar>
    //   <ProfileCartBar>
    //     <CartIcon />
    //     <Icon name="user" width="24px" height="24px" />
    //   </ProfileCartBar>
    //   <LogoContainer>
    //     <Icon name="logo" width="100px" height="100px" />
    //   </LogoContainer>
    //   <MainNavBar>
    //     <MainLinksContainer>
    //       {navLinks?.map((link) => (
    //         <HeaderLink to={link.route} key={link.name}>
    //           {link.name}
    //         </HeaderLink>
    //       ))}
    //     </MainLinksContainer>
    //     <Icon name="search" width="22px" height="22px" />
    //   </MainNavBar>
    //   <HSeparator />
    // </Container>
  );
}

export default Header;

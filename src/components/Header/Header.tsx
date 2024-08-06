import {
  Container,
  TopLinksBar,
  BlogLink,
  Separator,
  TopBarLink,
  TopLinksBarSection,
  Label,
  ProfileCartBar,
} from "./HeaderStyled";

function Header() {
  const label = "Serbian natural and organic Cosmetics";
  const blog = "Blog";
  const shipping = "International shipping";
  const semples = "Free samples";

  return (
    <Container>
      <TopLinksBar>
        <TopLinksBarSection>
          <Label>{label}</Label>
          <Separator />
          <BlogLink to={""}>{blog}</BlogLink>
        </TopLinksBarSection>
        <TopLinksBarSection>
          <TopBarLink to="">{shipping}</TopBarLink>
          <Separator />
          <TopBarLink to="">{semples}</TopBarLink>
        </TopLinksBarSection>
      </TopLinksBar>
      <ProfileCartBar></ProfileCartBar>
    </Container>
  );
}

export default Header;

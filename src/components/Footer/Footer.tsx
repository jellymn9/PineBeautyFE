import Icon from "../Icon/Icon";
import LinksSection from "./LinksSection";
import {
  Container,
  Subscription,
  FormHeading,
  SocialIconsContainer,
} from "./FooterStyled";

function Footer() {
  const formHeading = "Be in touch with us:";

  return (
    <Container>
      <Subscription>
        <FormHeading>{formHeading}</FormHeading>
        <form>
          <input></input>
          <button>Join us</button>
        </form>
        <SocialIconsContainer>
          <Icon name="instagram" width="32px" height="32px" />
          <Icon name="facebook" width="32px" height="32px" />
          <Icon name="pinterest" width="32px" height="32px" />
        </SocialIconsContainer>
      </Subscription>
      <LinksSection />
    </Container>
  );
}

export default Footer;

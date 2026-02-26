import LinksSection from "@/components/Footer/LinksSection/LinksSection";
import {
  CaptchaInfo,
  Container,
  FormHeading,
  IconAndLinksContainer,
  InputTemporarily,
  MainContainer,
  SubFooter,
  Subscription,
} from "./FooterStyled";

function Footer() {
  const formHeading = "Subscribe to our newsletter";
  const subscribeNote =
    "Subscribe now to our newsletter and recive a 10% discount on your first purchase.";

  const captchaInfo =
    "This site is protected by hCatpcha and the hCaptcha Privacy Policy and Terms of Service apply.";

  const subFooter = ` © pine beauty ${new Date().getFullYear()}`;

  return (
    <MainContainer>
      <Container>
        <Subscription>
          <FormHeading>{formHeading}</FormHeading>
          <small>{subscribeNote}</small>
          <InputTemporarily placeholder="your-email@example.com" />
          <CaptchaInfo>{captchaInfo}</CaptchaInfo>
        </Subscription>
        <IconAndLinksContainer>
          <img
            src="/logo.svg"
            alt="Pine Beauty Logo"
            width="100"
            height="100"
          />
          <LinksSection />
        </IconAndLinksContainer>
      </Container>
      <SubFooter>{subFooter}</SubFooter>
    </MainContainer>
  );
}

export default Footer;

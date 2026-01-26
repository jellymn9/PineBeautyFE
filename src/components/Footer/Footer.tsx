//import * as yup from "yup";
//import Icon from "../Icon/Icon";
//import Icon from "@/components/Icon/Icon";
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
//import Form from "../Form/Form";
//import { SubmitHandler } from "react-hook-form";

// const subscribeSchema = yup.object({
//   email: yup.string().email().required("Email field is required."),
// });

// type InputsT = yup.InferType<typeof subscribeSchema>;

// type FormFieldsT = {
//   label: string;
//   inputType: "text" | "email" | "password";
//   inputId: string;
//   registerName: keyof InputsT;
// };

function Footer() {
  const formHeading = "Subscribe to our newsletter";
  const subscribeNote =
    "Subscribe now to our newsletter and recive a 10% discount on your first purchase.";

  const captchaInfo =
    "This site is protected by hCatpcha and the hCaptcha Privacy Policy and Terms of Service apply.";

  const subFooter = ` © pine beauty ${new Date().getFullYear()}`;

  // const formFields: Array<FormFieldsT> = [
  //   {
  //     label: "Email",
  //     inputType: "email",
  //     inputId: "subscribeEmail",
  //     registerName: "email",
  //   },
  // ];

  //const handleSubsription: SubmitHandler<InputsT> = () => {};

  return (
    <MainContainer>
      <Container>
        {/* <Form<InputsT>
        heading="Subscribe to our newsletter"
        buttonText="send"
        onSubmit={handleSubsription}
        schema={subscribeSchema}
        formFields={formFields}
      /> */}
        <Subscription>
          <FormHeading>{formHeading}</FormHeading>
          <small>{subscribeNote}</small>
          <InputTemporarily placeholder="your-email@example.com" />
          <CaptchaInfo>{captchaInfo}</CaptchaInfo>
        </Subscription>
        <IconAndLinksContainer>
          {/* <Icon name="logo" width="100px" height="100px" /> */}
          <img
            src="/src/assets/logo.svg"
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

import {
  Digit,
  Wrapper,
  NumberRow,
  Subtitle,
  Title,
  ButtonRow,
} from "./NotFoundStyled";
import LinkBtn from "@/components/UI/Button/LinkBtn/LinkBtn";
import { ROUTES } from "@/utils/constants";

const NotFound = () => {
  return (
    <Wrapper>
      <img src={"/plantIllustration.svg"} alt="" width={120} height={80} />

      <NumberRow>
        <Digit>4</Digit>
        <Digit $accent>0</Digit>
        <Digit>4</Digit>
      </NumberRow>

      <Title>This page got lost in the woods</Title>
      <Subtitle>
        The page you're looking for doesn't exist or may have been moved.
      </Subtitle>

      <ButtonRow>
        <LinkBtn to={ROUTES.home} text="Back to shop" />
      </ButtonRow>
    </Wrapper>
  );
};

export default NotFound;

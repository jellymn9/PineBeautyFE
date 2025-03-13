import { ReactNode } from "react";
import {
  Container,
  Heading,
  HeadingAndSeparator,
  TinySeparator,
} from "./HomeSectionStyled";

interface HomeSectionPropsI {
  heading: string;
  children: ReactNode;
}

const HomeSection = ({ heading, children }: HomeSectionPropsI) => {
  return (
    <Container>
      <HeadingAndSeparator>
        <Heading>{heading}</Heading>
        <TinySeparator />
      </HeadingAndSeparator>
      {children}
    </Container>
  );
};

export default HomeSection;

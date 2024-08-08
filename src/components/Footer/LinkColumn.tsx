import { LinksContainer, Heading } from "./LinkColumnStyled";

interface LinkGroupI {
  heading: string;
  children: Array<JSX.Element> | JSX.Element;
}

const LinkColumn = function ({ heading, children }: LinkGroupI) {
  return (
    <LinksContainer>
      <Heading>{heading}</Heading>
      {children}
    </LinksContainer>
  );
};

export default LinkColumn;

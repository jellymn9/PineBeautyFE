import { LinksContainer, Heading } from "./LinkColumnStyled";

interface LinkGroupI {
  heading: string;
  isOpen: boolean;
  children: Array<JSX.Element> | JSX.Element;
  handleClick: () => void;
}

const LinkColumn = function ({
  heading,
  isOpen,
  handleClick,
  children,
}: LinkGroupI) {
  return (
    <LinksContainer $isOpen={isOpen}>
      <Heading onClick={handleClick}>{heading}</Heading>
      {children}
    </LinksContainer>
  );
};

export default LinkColumn;

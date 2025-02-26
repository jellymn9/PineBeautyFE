import { Container, Heading, SingleLink } from "./LinksStyled";

interface LinksListPropsI {
  list: Array<{ name: string; route: string }>;
  heading?: string;
}

const LinksList = ({ list, heading }: LinksListPropsI) => {
  return (
    <Container>
      {heading && <Heading>{heading}</Heading>}
      {list.map((link) => (
        <SingleLink to={link.route} key={link.name}>
          {link.name}
        </SingleLink>
      ))}
    </Container>
  );
};

export default LinksList;

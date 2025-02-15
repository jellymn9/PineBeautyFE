import { Container, SingleLink } from "./LinksStyled";

interface LinksListPropsI {
  list: Array<{ name: string; route: string }>;
}

const LinksList = ({ list }: LinksListPropsI) => {
  return (
    <Container>
      {list.map((link) => (
        <SingleLink to={link.route} key={link.name}>
          {link.name}
        </SingleLink>
      ))}
    </Container>
  );
};

export default LinksList;

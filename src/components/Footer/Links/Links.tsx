import { SingleLink } from "./LinksStyled";

interface LinksListPropsI {
  list: Array<{ name: string; route: string }>;
}

const LinksList = ({ list }: LinksListPropsI) => {
  return (
    <>
      {list.map((link) => (
        <SingleLink to={link.route} key={link.name}>
          {link.name}
        </SingleLink>
      ))}
    </>
  );
};

export default LinksList;

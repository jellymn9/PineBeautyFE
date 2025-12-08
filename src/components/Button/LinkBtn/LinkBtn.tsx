import { LinkStyled } from "./LinkBtnStyled";

interface LinkBtnPropsI {
  text: string;
  to: string;
}

const LinkBtn = ({ text, to }: LinkBtnPropsI) => {
  return <LinkStyled to={to}>{text}</LinkStyled>;
};

export default LinkBtn;

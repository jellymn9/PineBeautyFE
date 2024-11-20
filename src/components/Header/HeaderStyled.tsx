import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../../utils/colors";
import { HorizonalSeparator } from "../../utils/globalStyled";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
`;

export const TopLinksBar = styled.div`
  background-color: ${colors.platinum};
  display: flex;
  justify-content: space-between;
  padding: 12px;
  font-size: 12px;
  line-height: 22px;
`;

export const ProfileCartBar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px;
  grid-gap: 6px;
`;

export const LogoContainer = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
`;

export const MainNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px 0 12px;
`;

export const MainLinksContainer = styled.nav`
  display: flex;
  grid-gap: 24px;
`;

export const TopLinksBarSection = styled.div`
  display: flex;
  grid-gap: 6px;
  align-items: center;
`;

export const Label = styled.span`
  text-transform: uppercase;
`;

export const BlogLink = styled(Link)`
  color: ${colors.olivine};
  font-weight: 500;
  text-transform: uppercase;
`;

export const HeaderLink = styled(BlogLink)`
  color: ${colors.black};
`;

export const Separator = styled.div`
  height: 12px;
  border: 2px solid ${colors.black};
  border-radius: 6px;
`;

export const HSeparator = styled(HorizonalSeparator)`
  margin: 12px 0 12px 0;
`;

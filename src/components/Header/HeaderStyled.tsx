import styled from "styled-components";
import { Link } from "react-router-dom";

import colors from "../../utils/colors";

export const Container = styled.div`
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
  justify-items: flex-end;
  padding: 12px;
`;

export const LogoContainer = styled.div`
  padding: 12px;
`;

export const MainNavBar = styled.div`
  display: flex;
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

export const TopBarLink = styled(BlogLink)`
  color: ${colors.black};
`;

export const Separator = styled.div`
  height: 12px;
  border: 2px solid ${colors.black};
  border-radius: 6px;
`;

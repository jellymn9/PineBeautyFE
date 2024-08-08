import styled from "styled-components";

import colors from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subscription = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-evenly;
  background-color: ${colors.olivine};
  height: 60px;
`;

export const FormHeading = styled.p`
  font-size: 16px;
  line-height: 26px;
  margin: 0;
  text-transform: uppercase;
  color: ${colors.white};
  align-self: center;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  grid-gap: 12px;
  align-items: center;
`;

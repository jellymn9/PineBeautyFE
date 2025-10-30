import styled from "styled-components";

import colors from "@/utils/colors";
import breakpoints from "@/utils/breakpoints";

export const ProfileContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90vw;
  align-self: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 80vw;
    max-width: 1200px;
  }
`;

export const MyAccountHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  align-items: space-between;
`;

export const MyAccountHeaderTitle = styled.h1`
  font-weight: 700;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
`;

export const HSeparator = styled.div`
  height: 2px;
  background-color: ${colors.timberwolf};
`;

export const ProfileCards = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  @media screen and (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;
export const ProfileCardTitle = styled.h2`
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  text-transform: uppercase;
`;

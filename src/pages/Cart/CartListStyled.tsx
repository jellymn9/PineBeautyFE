import breakpoints from "@/utils/breakpoints";
import { styled } from "styled-components";

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
  align-items: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    align-items: normal;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

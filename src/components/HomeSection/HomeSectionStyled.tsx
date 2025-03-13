import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  grid-gap: 60px;
`;

export const HeadingAndSeparator = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h2`
  font-family: Montserrat-Variable;
  text-transform: uppercase;
`;

export const TinySeparator = styled.div`
  width: 30px;
  height: 4px;
  background-color: ${colors.blackTransparent1};
  border-radius: 2px;
`;

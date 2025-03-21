import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--section-padding) 0;
`;

export const HeadingAndSeparator = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--section-margin);
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

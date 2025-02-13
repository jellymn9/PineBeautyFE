import styled from "styled-components";
import colors from "../../utils/colors";

const headingHeight = 34;

export const LinksContainer = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  grid-gap: 6px;
  height: auto;
  max-height: ${headingHeight}px;
  overflow-y: hidden;
  transition: max-height 0.1s ease-in;
  ${({ $isOpen }) => $isOpen && `max-height: 600px;`}
`;

export const Heading = styled.h3`
  text-transform: uppercase;
  font-size: 18px;
  line-height: 28px;
  margin: 12px 0 12px 0;
  color: ${colors.white};
  height: ${headingHeight}px;
`;

import styled from "styled-components";
import { ChevronRight } from "lucide-react";
import colors from "../../utils/colors";

const headingHeight = 24;
const headingPadding = 16;

export const MainContainer = styled.div``;

export const Container = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  grid-gap: 6px;
  height: auto;
  max-height: calc(${headingHeight}px + 2 * ${headingPadding}px);
  overflow-y: hidden;
  transition: max-height 0.1s ease-in;
  ${({ $isOpen }) => $isOpen && `max-height: 600px;`}
`;

export const Heading = styled.h3`
  margin: 0;
  font-family: Montserrat-Variable;
  font-weight: 400;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 24px;
  padding: ${headingPadding}px 0;
  color: ${colors.white};
  height: ${headingHeight}px;
`;

export const HSeparator = styled.div`
  // consider adding this to global style later..
  height: 1px;
  background-color: ${colors.whiteTransparent1};
`;

export const HeadingInnerContiner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChevronRightAnim = styled(ChevronRight)<{ $isOpen: boolean }>`
  transition: transform 0.5s;
  ${({ $isOpen }) =>
    $isOpen &&
    `
    transform: rotate(90deg);
`}
`;

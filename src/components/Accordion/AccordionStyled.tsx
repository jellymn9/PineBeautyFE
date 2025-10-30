import styled from "styled-components";
import { ChevronRight } from "lucide-react";
import colors from "@/utils/colors";
import { ColorThemeT } from "@/utils/types";

const headingHeight = 24;
const headingPadding = 16;

export const MainContainer = styled.div<{ $colorTheme: ColorThemeT }>`
  color: ${({ $colorTheme }) =>
    $colorTheme === "light" ? colors.white : colors.black};
`;

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

export const HeadingContainer = styled.div`
  text-transform: uppercase;
  padding: ${headingPadding}px 0;
  height: ${headingHeight}px;
`;

export const HSeparator = styled.div<{ $colorTheme: ColorThemeT }>`
  // consider adding this to global style later..
  height: 1px;
  background-color: ${({ $colorTheme }) =>
    $colorTheme === "light" ? colors.whiteTransparent1 : colors.black};
`;

export const HeadingInnerContiner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Heading = styled.h4`
  margin: 0;
  //font-size: 14px;
  line-height: ${headingHeight}px;
  font-family: Montserrat-Variable;
  font-weight: 400;
  letter-spacing: 0.06em;
`;

export const ChevronRightAnim = styled(ChevronRight)<{ $isOpen: boolean }>`
  transition: transform 0.5s;
  ${({ $isOpen }) =>
    $isOpen &&
    `
    transform: rotate(90deg);
`}
`;

export const ChildContainer = styled.div`
  padding-bottom: 16px;
`;

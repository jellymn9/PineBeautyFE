import styled from "styled-components";
import { ChevronRight } from "lucide-react";
import { ColorThemeT } from "@/utils/types";

const headingHeight = 24;
const headingPadding = 16;

export const MainContainer = styled.div<{ $colorTheme: ColorThemeT }>`
  color: ${({ $colorTheme, theme }) =>
    $colorTheme === "light" ? theme.colors.white : theme.colors.black};
`;

export const Container = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: auto ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 0.3s ease-out;
`;

export const HeadingButton = styled.button`
  all: unset;

  text-transform: uppercase;
  padding: ${headingPadding}px 0;
  height: ${headingHeight}px;
`;

export const HSeparator = styled.div<{ $colorTheme: ColorThemeT }>`
  // consider adding this to global style later..
  height: 1px;
  background-color: ${({ $colorTheme, theme }) =>
    $colorTheme === "light"
      ? theme.colors.whiteTransparent1
      : theme.colors.black};
`;

export const HeadingInnerContiner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Heading = styled.h4`
  margin: 0;
  line-height: ${headingHeight}px;
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
  overflow: hidden;
  min-height: 0;

  > * {
    padding-bottom: 16px;
  }
`;

import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ProfileContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90vw;
  align-self: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
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
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.sm};
`;

export const HSeparator = styled.div`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.timberwolf};
`;

export const ProfileCards = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;
export const ProfileCardTitle = styled.h2`
  ${({ theme }) => theme.typography.fontFamilyBase};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.sm};
  text-transform: uppercase;
`;

export const ProfileTabLink = styled(NavLink)`
  position: relative;
  padding: 0 0 14px;
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.sm};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  color: inherit;
  opacity: 0.65;
  transition: opacity 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease;
  }

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
  }

  &.active::after {
    transform: scaleX(1);
  }
`;

export const ProfileContent = styled.div`
  padding-top: 40px;
`;

export const ProfileTabs = styled.nav`
  display: flex;
  gap: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.timberwolf};
  margin-top: 32px;
`;

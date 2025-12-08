import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.ebony};
  padding: 48px 24px 0px 24px;

  color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.footer`
  display: flex;
  flex-direction: column;

  padding-bottom: 48px;

  grid-gap: 30px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;

    grid-gap: 11vw;
  }
`;

export const Subscription = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 12px;
  margin-bottom: 60px;

  font-family: ${({ theme }) => theme.typography.fontFamilyBrand};
  font-weight: 400;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 380px;
    order: 5;

    padding-top: 100px;
  }
`;

export const FormHeading = styled.h3`
  font-size: 26px;
  font-weight: 400;
`;

export const InputTemporarily = styled.input`
  height: 26px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.whiteTransparent2};
`;

export const CaptchaInfo = styled.i`
  font-size: 14px;
`;

export const SubFooter = styled.div`
  //add this 2 props to global style
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  letter-spacing: 0.02em;

  font-size: 12px;
  text-transform: uppercase;
  padding-bottom: 12px;
`;

export const IconAndLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-gap: 22px;

    width: 100%;
  }
`;

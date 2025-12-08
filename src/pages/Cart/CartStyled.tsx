import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  grid-gap: 30px;
  padding: 40px 0px 80px 0px;

  font-family: ${({ theme }) => theme.typography.fontFamilyBase};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 40px 40px 80px 40px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: normal;
  }
`;

export const Heading = styled.h2`
  font-size: 22px;
  line-height: 32px;
  font-family: ${({ theme }) => theme.typography.fontFamilyBrand};

  padding-left: 20px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Subtotal = styled.div`
  display: flex;
  justify-content: end;
`;

export const PriceColName = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
  text-align: end;
`;

export const HSeparator = styled.div`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.timberwolf};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

import styled from "styled-components";

export const ProductsAndCategories = styled.div`
  width: fit-content;

  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const ProductsSection = styled.section`
  width: auto;

  padding-bottom: 32px;
  height: 721px;
  overflow-y: scroll;

  &&::-webkit-scrollbar {
    //display: none;
  }
`;

export const EmptyMessage = styled.p`
  font-size: 16px;
  line-height: 26px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.typography.fontFamilyAlt};
`;

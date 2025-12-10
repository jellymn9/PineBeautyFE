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

export const Message = styled.p`
  font-size: 22px;
  line-height: 26px;
  font-weight: 300;
  font-family: ${({ theme }) => theme.typography.fontFamilyAlt};
  padding: 60px;
`;

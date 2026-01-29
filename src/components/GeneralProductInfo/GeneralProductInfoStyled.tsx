import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
`;

export const ColumnList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`;

export const ListItem = styled.li`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.sm};
`;

export const HorizontalList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 0;
  padding: 0px;
  margin: 0px;
`;

export const ListTitle = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.sm};
  margin-top: 0px;
  margin-bottom: 6px;
`;

export const ListItem2 = styled(ListItem)`
  font-weight: 500;
`;

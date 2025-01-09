import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  grid-gap: 30px;
  padding: 40px 0 80px 0;
`;

export const Heading = styled.h2`
  font-size: 22px;
  line-height: 32px;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const Subtotal = styled.div`
  display: flex;
  justify-content: end;
`;

export const PriceColName = styled.p`
  font-size: 18px;
  color: ${colors.gray};
  margin: 0;
  text-align: end;
`;

export const HSeparator = styled.div`
  height: 2px;
  background-color: ${colors.timberwolf};
`;

// export const Price = styled.span``;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

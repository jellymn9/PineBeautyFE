import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

export const HSeparator = styled.div`
  height: 2px;
  background-color: ${colors.timberwolf};
`;

// export const Price = styled.span``;

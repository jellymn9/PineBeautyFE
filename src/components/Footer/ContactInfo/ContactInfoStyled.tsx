import styled from "styled-components";
import colors from "../../../utils/colors";

export const Container = styled.div`
  dispaly: flex;
  flex-direction: column;
`;

export const InfoItem = styled.span`
  color: ${colors.white};
`;

export const InfoItemContainer = styled.div`
  display: flex;
  grid-gap: 12px;
  align-items: center;
`;

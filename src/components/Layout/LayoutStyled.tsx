import styled from "styled-components";
import colors from "../../utils/colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${colors.babyPowder};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  min-width: 900px;
`;

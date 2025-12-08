import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--section-padding) 0;
`;

export const HeadingAndSeparator = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--section-margin);
`;

export const Heading = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamilyBase};
  text-transform: uppercase;
`;

export const TinySeparator = styled.div`
  width: 30px;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.blackTransparent1};
  border-radius: 2px;
`;

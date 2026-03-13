import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  background: #fcfbf4;
  font-family: sans-serif;
`;

export const NumberRow = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  letter-spacing: -4px;
`;

export const Digit = styled.span<{ $accent?: boolean }>`
  font-size: 96px;
  font-weight: 500;
  color: ${({ $accent, theme }) =>
    $accent ? theme.colors.olivine : theme.colors.black};
  line-height: 1;
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 0.75rem;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.ebony};
  text-align: center;
  max-width: 340px;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

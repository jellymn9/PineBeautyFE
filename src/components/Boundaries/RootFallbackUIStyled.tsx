import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  padding: 2rem;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Message = styled.p`
  max-width: 320px;
  opacity: 0.7;
`;

export const ReloadButton = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.6rem 1.1rem;
  border-radius: 6px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: #222;
  }

  &:active {
    background-color: #000;
  }
`;

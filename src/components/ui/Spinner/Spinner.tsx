import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-top: 2px solid black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  animation: ${spin} 2s linear infinite;
`;

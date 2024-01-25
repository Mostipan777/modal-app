import styled from 'styled-components';

export const AppLayout = styled.div`
  background-color: ${(props) => props.theme.color.background.default};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

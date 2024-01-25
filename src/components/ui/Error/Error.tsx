import styled from 'styled-components';

export const Error = styled.span`
  display: inline-flex;
  align-items: flex-start;
  min-height: 20px;
  color: ${(props) => props.theme.color.danger.default};
  font-size: 12px;
  margin-top: 2px;
`;

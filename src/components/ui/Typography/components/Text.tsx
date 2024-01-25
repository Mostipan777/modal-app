import styled from 'styled-components';

export const Text = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.text.primary};
`;

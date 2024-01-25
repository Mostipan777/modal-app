import styled from 'styled-components';

export const StyledButton = styled.button<{ loading?: boolean }>`
  background-color: ${(props) => props.theme.color.primary.default};
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.loading ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.loading ? 0.8 : 1)};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease;
  color: ${(props) => props.theme.color.text.primary};
  font-size: 14px;
  font-weight: 600;

  &:hover {
    background-color: ${(props) => props.theme.color.primary.hover};
  }

  &:focus,
  &:active {
    background-color: ${(props) => props.theme.color.primary.active};
  }
`;

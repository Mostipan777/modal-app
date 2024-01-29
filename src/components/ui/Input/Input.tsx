import styled from 'styled-components';

export const Input = styled.input<{ error?: boolean }>`
  padding: 6px 8px;
  border-radius: 6px;
  border: 2px solid ${(props) => (props.error ? props.theme.color.danger.default : props.theme.color.text.secondary)};
  font-size: 16px;
  font-family: inherit;
  letter-spacing: inherit;

  &::placeholder {
    color: ${(props) => props.theme.color.text.disabled};
  }

  &:focus,
  &:active {
    border-color: ${(props) => props.theme.color.primary.active};
    outline: none;
  }
`;

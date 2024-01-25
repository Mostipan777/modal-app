import styled from 'styled-components';

export const Textarea = styled.textarea<{ error?: boolean }>`
  padding: 6px 8px;
  border-radius: 6px;
  border: 2px solid ${(props) => (props.error ? props.theme.color.danger.default : props.theme.color.text.secondary)};
  font-size: 16px;
  min-height: 75px;
  max-height: 200px;
  resize: vertical;

  &:focus,
  &:active {
    border-color: ${(props) => props.theme.color.primary.active};
    outline: none;
  }
`;

import styled from 'styled-components';

export interface BoxProps {
  direction?: 'row' | 'column';
  align?: 'center' | 'flex-start' | 'flex-end';
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  gap?: number;
  p?: string;
}

export const Box = styled.div<BoxProps>`
  display: flex;
  max-width: 100%;
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ align }) => align && `align-items: ${align};`}
  ${({ justify }) => justify && `justify-content: ${justify};`}
  ${({ gap }) => gap && `gap: ${gap}px;`}
  ${({ p }) => p && `padding: ${p};`}
`;

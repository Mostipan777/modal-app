import styled, { keyframes } from 'styled-components';

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.2s ease-in-out;
  background-size: cover;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(25px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

const show = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.75);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }`;

const Container = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.background.default};
  border-radius: 20px;
  max-height: 90%;
  width: 450px;
  max-width: 100%;
  overflow: hidden;
  animation: ${show} 200ms ease-in-out;
`;

const Body = styled.div`
  overflow-y: scroll;
  padding: 28px 48px;

  @media (max-width: ${(props) => props.theme.breakpoint.s}) {
    padding: 24px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  cursor: pointer;
  color: ${(props) => props.theme.color.text.primary};
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: transparent;
  border: none;

  &:hover {
    color: ${(props) => props.theme.color.text.secondary};
  }
`;

export const View = {
  Backdrop,
  Container,
  ModalContainer,
  Body,
  CloseButton
};

import React from 'react';
import { createPortal } from 'react-dom';

import { View } from './components';
import { useModal } from './useModal';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  isVisible?: boolean;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ onClose, isVisible, children, ...props }) => {
  useModal({ onClose, isVisible });

  if (!isVisible) return null;

  const ModalComponent = (
    <View.Backdrop onMouseDown={onClose}>
      <View.Container role="dialog" aria-modal="true" onMouseDown={(e) => e.stopPropagation()} {...props}>
        <View.CloseButton onClick={onClose}>✕</View.CloseButton>
        <View.Body>{children}</View.Body>
      </View.Container>
    </View.Backdrop>
  );

  return createPortal(ModalComponent, document.body);
};

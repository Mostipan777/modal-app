import React, { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import { View } from './components';
import { useModal } from './useModal';

interface ModalProps extends PropsWithChildren {
  onClose: () => void;
  isVisible?: boolean;
}

export const Modal: React.FC<ModalProps> = ({ onClose, isVisible, children }) => {
  useModal({ onClose, isVisible });

  if (!isVisible) return null;

  const ModalComponent = (
    <View.Backdrop onMouseDown={onClose}>
      <View.Container onMouseDown={(e) => e.stopPropagation()}>
        <View.CloseButton onClick={onClose}>✕</View.CloseButton>
        <View.Body>{children}</View.Body>
      </View.Container>
    </View.Backdrop>
  );

  return createPortal(ModalComponent, document.body);
};

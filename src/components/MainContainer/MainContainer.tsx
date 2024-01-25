import React from 'react';

import { AppLayout, Button, Modal } from '../ui';
import { useMainContainer } from './useMainContainer';
import { QuestionForm } from '../QuestionForm';

export const MainContainer: React.FC = () => {
  const { isModalOpen, closeModal, openModal } = useMainContainer();

  return (
    <AppLayout>
      <Button onClick={openModal}>Open modal</Button>
      <Modal isVisible={isModalOpen} onClose={closeModal}>
        <QuestionForm onSuccess={closeModal} />
      </Modal>
    </AppLayout>
  );
};

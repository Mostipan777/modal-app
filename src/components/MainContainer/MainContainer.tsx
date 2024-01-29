import React from 'react';

import { AppLayout, Button, Modal } from '../ui';
import { useMainContainer } from './useMainContainer';
import { QuestionForm } from '../QuestionForm';

export const MainContainer: React.FC = () => {
  const { isModalOpen, closeModal, openModal } = useMainContainer();

  return (
    <AppLayout>
      <Button onClick={openModal} aria-controls="question-modal">
        Open modal
      </Button>
      <Modal isVisible={isModalOpen} onClose={closeModal} aria-label="Question Form Modal" id="question-modal">
        <QuestionForm onSuccess={closeModal} />
      </Modal>
    </AppLayout>
  );
};

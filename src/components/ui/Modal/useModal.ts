import { useEffect } from 'react';

interface UseModalParams {
  onClose: () => void;
  isVisible?: boolean;
}

export const useModal = (params: UseModalParams) => {
  const { isVisible, onClose } = params;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isVisible) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isVisible, onClose]);
};

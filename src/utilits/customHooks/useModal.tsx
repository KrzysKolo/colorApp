import { useState } from 'react';

export const useModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggle = () => setShowModal(!showModal);
  return {
    showModal,
    toggle,
  };
}

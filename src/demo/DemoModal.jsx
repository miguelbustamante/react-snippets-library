import { useState } from 'react';
import Modal from '../components/Modal';

const DemoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h3>Modal Demo</h3>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Sample Modal</h2>
        <p>This is a reusable modal!</p>
      </Modal>
    </div>
  );
};

export default DemoModal;
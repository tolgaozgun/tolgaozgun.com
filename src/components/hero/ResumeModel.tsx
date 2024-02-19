import { Button, Modal } from '@mantine/core';
import { useState } from 'react';

interface ResumeModalProps {
  buttonText: string;
  pdfUrl: string;
}

const ResumeModal = ({ buttonText = 'Open Resume', pdfUrl }: ResumeModalProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Button onClick={() => setOpened(true)}>{buttonText}</Button>
      <Modal opened={opened} onClose={() => setOpened(false)} title={buttonText}>
        <iframe
          src={pdfUrl}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        ></iframe>
      </Modal>
    </>
  );
};

export default ResumeModal;

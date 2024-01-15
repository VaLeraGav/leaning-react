import { useState, useEffect } from 'react';
import styled from "styled-components";
import { useKeyDown } from "../../hooks/useKeyDown";
import { createPortal } from 'react-dom';

const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border-radius: 8px;
  border: 1px solid #888;
  padding: 20px;
  background-color: white;
`;

export default function ModalDiv({ isOpened, onClose, children }) {
  const [container, setContainer] = useState();

  useKeyDown("Escape", onClose);
  // useKeyDown("Enter", onClose); // - не работает

  const preventAutoClose = (e) => e.stopPropagation();

  useEffect(() => {
    const portalContainer = document.getElementById('modal');

    if (!portalContainer) {
      throw new Error(`There is no portal container in markup. Please add portal container with proper id attribute.`);
    }
    setContainer(portalContainer);
  }, []);

  if (!isOpened) return null;

  return container ? createPortal(
    <Overlay onClick={onClose}>
      <Container onClick={preventAutoClose}>

        {children}

      </Container>
    </Overlay>,
    container) : null;
};

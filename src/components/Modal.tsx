import React from "react";
import { ModalProps } from "../types/componentTypes";

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, content, children }) => {
  const outsideRef = React.useRef<HTMLDivElement>(null);

  const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <div
      ref={outsideRef}
      onClick={handleCloseOnOverlay}
      className="fixed inset-0 flex justify-center items-center bg-blue-500 bg-opacity-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-4 rounded-md shadow-md"
        style={{ width: '5cm', height: '5cm' }}
      >
        <div>
          {children} <br />
          {title}
        </div>
        <div>{content}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;

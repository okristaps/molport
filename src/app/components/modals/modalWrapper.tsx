import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function ModalWrapper({ isOpen, onClose, children, title }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg mx-auto p-6 shadow-lg">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-2xl  text-purple1 ">{title}</h2>
          <button onClick={onClose} className="text-dark3 hover:text-gray-600 focus:outline-none text-3xl">
            &times;
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}

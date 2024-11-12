import React, { useEffect } from "react";
import { useModal } from "../context/ModalContext";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  isTextArea?: boolean;
  rows?: number;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  isTextArea = false,
  rows,
}) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">{label}</label>
      {isTextArea ? (
        <textarea
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          rows={rows}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type={type}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

const ContactModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="bg-white w-[90%] md:w-[50%] p-6 rounded-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <p className="mb-4">
          Keep up to date with the latest news from ME Elecmetal.
        </p>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Name *" placeholder="Enter your name" />
            <InputField label="Surname *" placeholder="Enter your surname" />
            <InputField
              label="Email *"
              placeholder="Enter your email"
              type="email"
            />
            <InputField label="Subject *" placeholder="Enter the subject" />
          </div>
          <InputField
            label="Message *"
            placeholder="Enter your message"
            isTextArea
            rows={4}
          />
          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="button"
              className="bg-gray-300 px-4 py-2 rounded-md"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-orange-600 text-white px-4 py-2 rounded-md"
            >
              Send →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;

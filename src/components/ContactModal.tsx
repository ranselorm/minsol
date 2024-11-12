import React, { useEffect } from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  rows?: number; // Optional for textarea
  isTextarea?: boolean; // Flag to differentiate between input and textarea
}

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  rows?: number; // Optional for textarea
  isTextarea?: boolean; // Flag to differentiate between input and textarea
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  required = false,
  rows,
  isTextarea = false,
}) => {
  return (
    <div className={isTextarea ? "col-span-full" : "col-span-2 md:col-span-1"}>
      <label htmlFor={id} className="block text-sm font-bold text-blu mb-1">
        {label} {required && "*"}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          name={id}
          rows={rows || 4}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-blu"
          required={required}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-blu"
          required={required}
        />
      )}
    </div>
  );
};

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-[90%] max-w-2xl rounded-lg shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Contact us</h2>
          <p className="text-gray-600 mb-6">
            Keep up to date with the latest news from ME Elecmetal.
          </p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField id="name" label="Name" required />
              <InputField id="surname" label="Surname" required />
              <InputField id="email" label="Email" type="email" required />
              <InputField id="subject" label="Subject" required />
              <InputField
                id="message"
                label="Message"
                isTextarea
                rows={5}
                required
              />
            </div>
            <div className="flex justify-end mt-6">
              <button
                type="button"
                className="text-orange-600 font-bold px-4 py-2 rounded-md mr-4"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-2 rounded-md"
              >
                Send →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;

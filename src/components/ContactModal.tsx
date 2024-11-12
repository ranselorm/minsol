import React, { useEffect } from "react";

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  // Prevent scrolling on the main page when the modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // Dismiss modal when clicking on overlay
    >
      <div
        className="bg-white w-[90%] max-w-2xl rounded-lg shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Contact us</h2>
          <p className="text-gray-600 mb-6">
            Keep up to date with the latest news from ME Elecmetal.
          </p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-blue-800 mb-1"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="surname"
                  className="block text-sm font-bold text-blue-800 mb-1"
                >
                  Surname *
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-blue-800 mb-1"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-bold text-blue-800 mb-1"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-blue-800 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                ></textarea>
              </div>
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

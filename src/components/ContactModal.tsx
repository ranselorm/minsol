// components/ContactUsModal.tsx
import { useModal } from "@/context/ModalContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input"; // Assuming you have these components in your UI kit
import { Textarea } from "@/components/ui/textarea"; // Assuming you have these components in your UI kit
import { Button } from "@/components/ui/button"; // Assuming you have these components in your UI kit
import React, { useState } from "react";

const ContactUsModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the submission logic (e.g., send form data to an API)
    console.log("Form submitted:", formData);
    closeModal(); // Close the modal after submitting
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={closeModal}>
      <DialogContent>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogDescription>
          We'd love to hear from you. Please fill out the form below.
        </DialogDescription>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={4}
                required
              />
            </div>
            <div className="mt-4 flex justify-end">
              <Button type="submit" className="bg-main">
                Submit
              </Button>
              <Button variant="secondary" onClick={closeModal} className="ml-4">
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactUsModal;

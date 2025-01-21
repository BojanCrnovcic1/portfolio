import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage("Sending...");

    emailjs
      .send(
        "service_xx0q2oi", 
        "template_xcd225m",
        formData,
        "J_Pjzxad5rtlqHXaO" 
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          setFormData({ name: "", emailId: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="emailId"
            value={formData.emailId}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            required
          />
        </label>
        <button type="submit">Send</button>
      </form>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
};

export default Contact;

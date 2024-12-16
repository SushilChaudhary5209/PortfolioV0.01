import React, { useState } from "react";
import "./ContactForm.css";
import { useTheme } from "../components/ThemeContext";
import { Toaster, toast } from "react-hot-toast";

function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Client-side validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Invalid email address.");
      return;
    }

    try {
      const response = await fetch(
        "https://portfolio-backebd.vercel.app/send",
        {
          // Ensure this is your actual domain
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
      } else {
        const errorData = await response.json();
        setError(
          errorData.message || "Failed to send message. Please try again."
        );
        toast.error(
          errorData.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className={`contact ${theme} pt-4 overflow-x-hidden`}>
      <Toaster />
      <div className="flex flex-col justify-center items-center md:flex-row">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-offset="150"
          className="w-full md:w-[50%] flex flex-col justify-center gap-10 px-4 md:px-20"
        >
          <div className="flex flex-col gap-10">
            <p className="text-4xl">Let's Get In Touch!</p>
            <p className="text-xl">
              I'm excited to connect with you! Whether you have a project in
              mind, a question, or just want to say hello, feel free to reach
              out. You can contact me using the form below, or connect with me
              through my social media channels.
            </p>
          </div>
        </div>
        <div
        data-aos="fade-left"
        data-aos-duration="2000"
        data-aos-offset="150"
         className="form-card1 w-full md:w-[50%] px-4 py-10 flex justify-center">
          <div className="form-card2">
            <form className="form" onSubmit={handleSubmit}>
              <p className="form-heading">Get In Touch</p>

              {error && <p className="error-message">{error}</p>}

              <div className="form-field">
                <input
                  required
                  placeholder="Your Name"
                  className="input-field"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <input
                  required
                  placeholder="Your Email"
                  className="input-field"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <input
                  required
                  placeholder="Subject"
                  className="input-field"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <textarea
                  required
                  placeholder="Message"
                  cols="30"
                  rows="5"
                  className="input-field"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button className="sendMessage-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

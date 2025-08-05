"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="What's this about?"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Your message here..."
        ></textarea>
      </div>
      
      <motion.button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </motion.button>
      
      {submitMessage && (
        <div className="mt-4 p-4 bg-green-500/20 text-green-400 rounded-lg">
          {submitMessage}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
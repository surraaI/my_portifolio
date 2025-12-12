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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    
    try {
      // Google Sheets Integration via Apps Script
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      
      if (GOOGLE_SCRIPT_URL) {
        // Submit to Google Sheets via Apps Script
        // Note: Google Apps Script may return opaque response due to CORS
        // We use no-cors mode and handle it gracefully
        try {
          const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Use no-cors to avoid CORS issues with Google Apps Script
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
              message: formData.message,
              timestamp: new Date().toISOString(),
            }),
          });

          // With no-cors, we can't check response.ok, but if no error is thrown, assume success
          setIsSubmitting(false);
          setSubmitMessage("Thank you for your message! I'll get back to you soon.");
          setFormData({ name: "", email: "", subject: "", message: "" });
          
          setTimeout(() => {
            setSubmitMessage("");
          }, 5000);
        } catch (fetchError) {
          // If fetch fails, try with a different approach
          console.error('Fetch error:', fetchError);
          throw fetchError;
        }
      } else {
        // Fallback: Use mailto if Google Script URL isn't configured
        const subject = encodeURIComponent(formData.subject);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:suraitana@gmail.com?subject=${subject}&body=${body}`;
        
        setIsSubmitting(false);
        setSubmitMessage("Opening your email client...");
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        setTimeout(() => {
          setSubmitMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      setSubmitMessage("There was an error submitting your message. Please try again or email me directly.");
      
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }
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
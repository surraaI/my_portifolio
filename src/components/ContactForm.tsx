"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
          await fetch(GOOGLE_SCRIPT_URL, {
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
          <Label htmlFor="name" className="text-foreground mb-2">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-background"
            placeholder="Your name"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-foreground mb-2">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-background"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="subject" className="text-foreground mb-2">Subject</Label>
        <Input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="bg-background"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <Label htmlFor="message" className="text-foreground mb-2">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="bg-background"
          placeholder="Your message here..."
        />
      </div>

      <Button
        type="submit"
        variant="brand"
        size="lg"
        disabled={isSubmitting}
        className="w-full rounded-lg"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {submitMessage && (
        <div className="mt-4 p-4 bg-secondary text-foreground rounded-lg">
          {submitMessage}
        </div>
      )}
    </form>
  );
};

export default ContactForm;

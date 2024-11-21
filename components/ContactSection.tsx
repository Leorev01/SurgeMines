'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const ContactCTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: { target: { name: string; value: unknown; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('Submitting...');
  
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          
  
      if (response.ok) {
        setSubmitMessage('Your message has been sent! We will get back to you soon.');
      } else {
        const errorData = await response.json();
        console.log('Error response:', errorData);  // Log the error response for better insight
        setSubmitMessage(errorData.error || 'There was an error submitting the form.');
      }
    } catch (error) {
      console.error('Form submit error:', error); // Log any error from the fetch call
      setSubmitMessage('An error occurred while sending the message.');
    } finally {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  };
  

  return (
    <section id='contact' className="bg-gradient-to-r from-blue-500 to-teal-500 py-16 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Let&apos;s Work Together!</h2>
        <p className="text-lg mb-8">We would love to help you bring your vision to life. Get in touch with us today for a free consultation!</p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-xl space-y-6"
          aria-label="Contact Form"
        >
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus-visible:outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-required="true"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus-visible:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Input */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"  
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus-visible:outline-none"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus-visible:outline-none"
              placeholder="Your message"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus-visible:outline-none"
            >
              {isSubmitting ? 'Submitting...' : 'Send Message'}
            </button>
          </div>
        </form>

        {/* Success/Error Message */}
        <p
          className="mt-6 text-xl font-semibold text-yellow-100"
          aria-live="polite"
        >
          {submitMessage}
        </p>

        {/* Secondary CTA */}
        <div className="mt-12">
          <p className="text-lg mb-4">Not ready yet? Let&apos;s schedule a quick consultation!</p>
          <Link
            href="mailto:leo@slick-site.com"
            className="inline-block bg-teal-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus-visible:outline-none"
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;

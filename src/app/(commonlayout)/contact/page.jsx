'use client';

import React, { useState } from 'react';
import Container from '../../components/Container';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 pt-32 bg-base-100">
        <Container>
          <div className="max-w-3xl">
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs underline underline-offset-8 decoration-2 mb-4 block">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-6">
              Contact The <br /> Golden Apron
            </h1>
            <p className="text-base-content/60 text-lg leading-relaxed">
              Have a question or reservation request? We'd love to hear from you. Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24 bg-base-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold mb-12 text-base-content">
                  Contact Information
                </h2>
              </div>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-content">
                      <FaPhone size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-base-content mb-2">Phone</h3>
                    <p className="text-base-content/60">+1 (555) 123-4567</p>
                    <p className="text-base-content/60 text-sm">Monday - Sunday: 10am - 11pm</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-content">
                      <FaEnvelope size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-base-content mb-2">Email</h3>
                    <p className="text-base-content/60">hello@thegoldenapron.com</p>
                    <p className="text-base-content/60 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-content">
                      <FaMapMarkerAlt size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-base-content mb-2">Location</h3>
                    <p className="text-base-content/60">123 Culinary Lane</p>
                    <p className="text-base-content/60">Gastro City, GC 12345</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-base-200 rounded-2xl p-8 space-y-4">
                <h3 className="text-xl font-bold text-base-content">Restaurant Hours</h3>
                <div className="space-y-2 text-base-content/60 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span>10am - 10pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday - Saturday</span>
                    <span>10am - 11pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>11am - 9pm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-base-200 rounded-2xl p-10">
              <h2 className="text-3xl font-bold mb-8 text-base-content">Send us a Message</h2>

              {submitted ? (
                <div className="bg-success/20 border border-success text-success p-6 rounded-lg text-center">
                  <h3 className="font-bold mb-2">Thank you for reaching out!</h3>
                  <p>We've received your message and will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-base-content mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-base-100 border border-base-300 rounded-lg focus:outline-none focus:border-primary text-base-content"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-base-content mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-base-100 border border-base-300 rounded-lg focus:outline-none focus:border-primary text-base-content"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-base-content mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-base-100 border border-base-300 rounded-lg focus:outline-none focus:border-primary text-base-content"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-base-content mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Reservation Request"
                      className="w-full px-4 py-3 bg-base-100 border border-base-300 rounded-lg focus:outline-none focus:border-primary text-base-content"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-base-content mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      rows="5"
                      className="w-full px-4 py-3 bg-base-100 border border-base-300 rounded-lg focus:outline-none focus:border-primary text-base-content resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full btn bg-base-content text-base-100 px-8 py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-sm hover:opacity-90"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

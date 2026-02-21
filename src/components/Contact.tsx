import { useState, FormEvent } from 'react';
import { LINKS } from '../constants';
import { Mail, Phone, MapPin, ExternalLink, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-10">
              Have questions or want to learn more? We'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                  <a href={LINKS.email} className="text-gray-600 hover:text-blue-600 transition-colors">
                    info@sebaid.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                  <a href={LINKS.phone} className="text-gray-600 hover:text-blue-600 transition-colors">
                    +233 24 543 6230
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                  <p className="text-gray-600">
                    {LINKS.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Feedback & Testimonials</h3>
              <p className="text-blue-700 mb-4 text-sm">
                We value your input. Share your thoughts or experience with us.
              </p>
              <a 
                href={LINKS.feedback} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
              >
                Fill out form <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg relative overflow-hidden">
            {submitted ? (
              <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you for reaching out. We'll get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-gray-50 focus:bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Volunteering</option>
                    <option>Partnership</option>
                    <option>Donation Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

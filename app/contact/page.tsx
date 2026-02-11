'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useFormSubmit } from '@/lib/hooks/useFormSubmit';

export default function ContactPage() {
  const [contactData, setContactData] = useState<any>(null);
  
  useEffect(() => {
    fetch('/api/content').then(res => res.json()).then(data => {
      setContactData(data.contact || {});
    }).catch(() => {});
  }, []);
  const [contactForm, setContactForm] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    eventType: '',
    participants: '',
    preferredDate: '',
    message: ''
  });
  
  const { submit, isSubmitting, error, success } = useFormSubmit();

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submit('contact', contactForm);
      
      // Reset form on success
      setContactForm({ 
        name: '', 
        organisation: '', 
        email: '', 
        phone: '', 
        eventType: '', 
        participants: '', 
        preferredDate: '', 
        message: '' 
      });
    } catch (err) {
      // Error is handled by the hook
      console.error('Contact form error:', err);
    }
  };

  return (
    <div className="bg-[var(--color-bg-primary)] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative bg-[hsl(235,52%,27%)] text-white py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-accent)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium rounded-full mb-8">
              💬 Get in Touch
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              {contactData?.hero?.title || 'Plan Your Experience'}
            </h1>
            <p className="text-xl md:text-2xl mb-6 font-light max-w-4xl mx-auto leading-relaxed">
              {contactData?.hero?.subtitle || 'Tell us a little about your event, and we\'ll craft something perfect for your team.'}
            </p>
            {/* <p className="text-lg max-w-3xl mx-auto text-white/90">
              {contactData?.hero?.description || 'Send us a message and let\'s create something unforgettable.'}
            </p> */}
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-8">
                Let&apos;s Connect
              </h2>
              
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--color-brand-primary)] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">Email Us</h3>
                    <a 
                      href={`mailto:${contactData?.info?.email || 'connect@sparkplug.in'}`}
                      className="text-[var(--color-brand-primary)] hover:text-[var(--color-brand-secondary)] font-medium text-lg"
                    >
                      {contactData?.info?.email || 'connect@sparkplug.in'}
                    </a>
                  </div>
                </div>

                {/* Linkedin */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">Reach via Linkedin</h3>
                    <a 
                      href={contactData?.info?.linkedinurl || 'https://instagram.com/thesparkplugin'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-brand-primary)] hover:text-[var(--color-brand-secondary)] font-medium text-lg"
                    >
                      {contactData?.info?.instagram || '@thesparkplugin'}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">Reach via Instagram</h3>
                    <a 
                      href={contactData?.info?.instagramUrl || 'https://instagram.com/thesparkplugin'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-brand-primary)] hover:text-[var(--color-brand-secondary)] font-medium text-lg"
                    >
                      {contactData?.info?.instagram || '@thesparkplugin'}
                    </a>
                  </div>
                </div>

                {/* WhatsApp - Coming Soon */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">WhatsApp Us</h3>
                    {contactData?.info?.whatsapp && contactData.info.whatsapp !== 'Coming soon' ? (
                      <a 
                        href={`https://wa.me/${contactData.info.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-brand-primary)] hover:text-[var(--color-brand-secondary)] font-medium text-lg"
                      >
                        {contactData.info.whatsapp}
                      </a>
                    ) : (
                      <p className="text-[var(--color-text-tertiary)] italic">
                        {contactData?.info?.whatsapp || 'Coming soon'}
                      </p>
                    )}
                  </div>
                </div>


         
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[var(--color-bg-secondary)] p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
                  Send Us a Message
                </h3>
                
                {success && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 rounded-lg">
                    Thank you for your enquiry! We will get back to you soon.
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="organisation" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                        Organisation
                      </label>
                      <input
                        type="text"
                        id="organisation"
                        value={contactForm.organisation}
                        onChange={(e) => setContactForm({ ...contactForm, organisation: e.target.value })}
                        className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
                        placeholder="Your company/organisation"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                        Type of Event
                      </label>
                      <select
                        id="eventType"
                        value={contactForm.eventType}
                        onChange={(e) => setContactForm({ ...contactForm, eventType: e.target.value })}
                        className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
                      >
                        <option value="">Select event type</option>
                        <option value="drum-circle">Corporate Drum Circle</option>
                        <option value="team-building">Team-Building Workshop</option>
                        <option value="workplace-culture">Workplace Culture Session</option>
                        <option value="community">Community/Celebration Event</option>
                        <option value="custom">Custom Experience</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="participants" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                        Number of Participants
                      </label>
                      <select
                        id="participants"
                        value={contactForm.participants}
                        onChange={(e) => setContactForm({ ...contactForm, participants: e.target.value })}
                        className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
                      >
                        <option value="">Select range</option>
                        <option value="10-50">10 - 50</option>
                        <option value="50-100">50 - 100</option>
                        <option value="100-300">100 - 300</option>
                        <option value="300-500">300 - 500</option>
                        <option value="500-1000">500 - 1,000</option>
                        <option value="1000+">1,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      value={contactForm.preferredDate}
                      onChange={(e) => setContactForm({ ...contactForm, preferredDate: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] border border-[var(--color-brand-primary)]/20 rounded-lg focus:ring-2 focus:ring-[var(--color-brand-primary)] focus:border-transparent resize-none"
                      placeholder="Tell us more about your event, goals, or any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--color-brand-primary)] text-[var(--color-button-text)] py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[var(--color-brand-secondary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

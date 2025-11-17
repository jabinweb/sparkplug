export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              Sparkplug
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              Please read these terms carefully before using our website and services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Effective Date:</strong> October 17, 2025<br />
              <strong>Last Updated:</strong> October 17, 2025
            </p>

            <div className="space-y-8">
              {/* Agreement to Terms */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using the Sparkplug (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) website 
                  and services, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              {/* Description of Service */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sparkplug provides high-energy team building experiences, drum circles, and engagement services 
                  through our four service offerings:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Corporate Team-Building:</strong> Engaging workshops and high-energy activities</li>
                  <li><strong>Experiential Events:</strong> Memorable experiences from celebrations to brand activations</li>
                  <li><strong>Music & Drum Circles:</strong> Unique music-led sessions that create unity</li>
                  <li><strong>Creator Collaborations:</strong> Partnerships with agencies and venues</li>
                </ul>
              </section>

              {/* Acceptable Use */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Acceptable Use Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree to use our services only for lawful purposes and in a way that does not infringe the rights 
                  of, restrict, or inhibit anyone else&apos;s use of the website. You may not:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Use the service for any unlawful purpose or encourage unlawful activity</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Transmit viruses, malware, or other harmful code</li>
                  <li>Spam, harass, or abuse other users</li>
                  <li>Violate intellectual property rights</li>
                  <li>Impersonate another person or organization</li>
                  <li>Interfere with the proper functioning of the website</li>
                </ul>
              </section>

              {/* User Accounts */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Accounts</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When creating an account with us, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information to keep it accurate</li>
                  <li>Keep your login credentials secure and confidential</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Take responsibility for all activities under your account</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The content, organization, graphics, design, compilation, magnetic translation, digital conversion, 
                  and other matters related to the Sparkplug website are protected under applicable copyrights, trademarks, 
                  and other proprietary rights.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Our Content</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All content on our website, including text, graphics, logos, images, audio clips, and software, 
                  is the property of Sparkplug or its content suppliers and is protected by copyright and other intellectual property laws.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 User Content</h3>
                <p className="text-gray-700 leading-relaxed">
                  By submitting content to our website, you grant Sparkplug a non-exclusive, worldwide, royalty-free license 
                  to use, modify, and distribute such content for the purpose of providing our services and promoting our team-building solutions.
                </p>
              </section>

              {/* Privacy Policy */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, 
                  to understand our practices regarding the collection and use of your information.
                </p>
              </section>

              {/* Bookings and Payments */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Bookings and Payments</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bookings for Sparkplug experiences are subject to availability and confirmation. 
                  Please note:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Full payment or deposit may be required to confirm bookings</li>
                  <li>Cancellation and refund policies apply as per agreement terms</li>
                  <li>We reserve the right to reschedule activities due to weather or unforeseen circumstances</li>
                  <li>Payment processing may be handled by third-party services</li>
                  <li>You are responsible for any applicable taxes on services</li>
                </ul>
              </section>

              {/* Team-Building Programs */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Team-Building Programs and Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Participation in Sparkplug programs is subject to the following terms:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Programs are provided for team-building and engagement purposes</li>
                  <li>We reserve the right to modify or cancel programs due to safety or logistical concerns</li>
                  <li>Participants must comply with safety guidelines and codes of conduct</li>
                  <li>Certificates or acknowledgments are awarded at our discretion</li>
                  <li>Program materials and content are for participant use only unless otherwise specified</li>
                </ul>
              </section>

              {/* Disclaimers */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimers</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our services are provided &quot;as is&quot; without warranties of any kind, either express or implied, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>We do not warrant that our services will be uninterrupted or error-free</li>
                  <li>We make no guarantees about the accuracy or completeness of content</li>
                  <li>Educational outcomes and program effectiveness may vary</li>
                  <li>Third-party links and content are not under our control</li>
                  <li>We are not responsible for technical issues beyond our control</li>
                </ul>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  To the fullest extent permitted by law, Sparkplug shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
                  or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
                </p>
              </section>

              {/* Indemnification */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to defend, indemnify, and hold harmless Sparkplug, its officers, directors, employees, and agents 
                  from and against any claims, damages, costs, and expenses arising from or related to your use of our services 
                  or your violation of these Terms of Service.
                </p>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, 
                  for any reason whatsoever, including without limitation if you breach the Terms of Service. 
                  Upon termination, your right to use the service will cease immediately.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be interpreted and governed by the laws of India. Any disputes arising from these terms 
                  shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu, India.
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. 
                  What constitutes a material change will be determined at our sole discretion.
                </p>
              </section>

              {/* Severability */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Severability</h2>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms is held to be invalid or unenforceable by a court, 
                  the remaining provisions of these Terms will remain in effect.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Sparkplug</strong><br />
                    Pan-India Operations<br />
                    Email: hello@sparkplug.in<br />
                    Phone: +91 98765 43210
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
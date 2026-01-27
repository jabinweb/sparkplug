export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[var(--color-bg-primary)]">
      {/* Hero Section */}
      <section className="bg-[var(--color-brand-primary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              Sparkplug
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-[var(--color-text-secondary)] mb-8">
              <strong>Effective Date:</strong> October 17, 2025<br />
              <strong>Last Updated:</strong> October 17, 2025
            </p>

            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">1. Introduction</h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Sparkplug (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                  our website, use our services, or engage with our team building programs, drum circles, and event experiences.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">2.1 Personal Information</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-2 mb-4">
                  <li>Register for our programs or services</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Make a donation</li>
                  <li>Contact us through our website or email</li>
                  <li>Apply for volunteer positions or employment</li>
                  <li>Participate in surveys or feedback forms</li>
                </ul>

                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">2.2 Types of Personal Information</h3>
                <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-2 mb-4">
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Educational background and professional experience</li>
                  <li>Donation and payment information</li>
                  <li>Program participation data</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">2.3 Automatically Collected Information</h3>
                <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-2">
                  <li>IP address and device information</li>
                  <li>Browser type and operating system</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              {/* How We Use Information */}
              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">3. How We Use Your Information</h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-2">
                  <li>Provide and improve our educational programs and services</li>
                  <li>Process donations and manage donor relationships</li>
                  <li>Communicate with you about our programs and initiatives</li>
                  <li>Send newsletters and educational content (with your consent)</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Analyze website usage to improve user experience</li>
                  <li>Comply with legal obligations and protect our rights</li>
                  <li>Conduct research on education mortality and social change</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-2">
                  <li><strong>Service Providers:</strong> With trusted third-party vendors who help us operate our website and programs</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Partner Organizations:</strong> With educational institutions or NGOs for collaborative programs (with your consent)</li>
                  <li><strong>Anonymized Data:</strong> Aggregate, anonymized data for research purposes</li>
                </ul>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">5. Data Security</h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                  the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              {/* Cookies and Tracking */}
              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, 
                  and provide personalized content. You can control cookie settings through your browser preferences.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  We may also use analytics tools like Google Analytics to understand how users interact with our website. 
                  These tools may collect information about your device and browsing behavior.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">7. Your Rights and Choices</h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-[var(--color-text-secondary)] space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing (where applicable)</li>
                  <li>Request data portability</li>
                </ul>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
                  To exercise these rights, please contact us at connect@sparkplug.in.
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">8. Data Retention</h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
                  Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When we no 
                  longer need your information, we will securely delete or anonymize it.
                </p>
              </section>

              {/* International Transfers */}
              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">9. International Data Transfers</h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of residence. 
                  We ensure appropriate safeguards are in place to protect your information in accordance with applicable 
                  data protection laws.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">10. Children&apos;s Privacy</h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Our services are not directed to children under the age of 13. We do not knowingly collect personal 
                  information from children under 13. If we become aware that we have collected such information, 
                  we will take steps to delete it promptly.
                </p>
              </section>

              {/* Updates to Policy */}
              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">11. Updates to This Privacy Policy</h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                  We will notify you of any material changes by posting the updated policy on our website and updating the 
                  effective date.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">12. Contact Us</h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-[var(--color-text-secondary)]">
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
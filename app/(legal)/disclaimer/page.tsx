export default function DisclaimerPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Disclaimer
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              Sparkplug
            </p>
            <p className="text-lg max-w-3xl mx-auto">
              Important information about our services, team building experiences, and limitations of liability.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last Updated:</strong> October 17, 2025
            </p>

            <div className="space-y-8">
              {/* General Disclaimer */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  The information provided by Sparkplug (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) 
                  on our website and through our services is for general informational purposes only. 
                  All information is provided in good faith, however, we make no representation or warranty of any kind, 
                  express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness 
                  of any information.
                </p>
              </section>

              {/* Service Content */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Team Building & Events Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our team building programs, drum circles, and event experiences are provided for engagement and 
                  entertainment purposes. Please note:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Team outcomes and engagement levels may vary based on participant involvement</li>
                  <li>Our programs do not guarantee specific business results or team performance improvements</li>
                  <li>Physical activities are undertaken at participants&apos; own risk</li>
                  <li>Participants should disclose any health conditions that may affect participation</li>
                  <li>Customization of activities should be discussed prior to booking</li>
                </ul>
              </section>

              {/* Professional Advice */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Professional Advice Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  The content provided through Sparkplug should not be considered as professional HR, 
                  psychological, or legal advice. While our team includes qualified professionals, our services 
                  are designed for team building and engagement purposes. Always seek the advice of qualified 
                  professionals regarding specific HR, mental health, or legal matters.
                </p>
              </section>

              {/* External Links */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. External Links Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our website may contain links to external sites that are not operated by us. Please be aware that:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>We have no control over the content and practices of these sites</li>
                  <li>We cannot and do not assume responsibility for their content or privacy policies</li>
                  <li>The inclusion of any links does not imply endorsement by us</li>
                  <li>You should review the terms and privacy policies of external sites</li>
                </ul>
              </section>

              {/* Research and Data */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Activity Customization Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sparkplug offers customized team-building experiences. Regarding our activities:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Activities are designed based on client requirements and team dynamics</li>
                  <li>Results and engagement levels may vary among different teams</li>
                  <li>Physical activities are subject to participant health and fitness levels</li>
                  <li>Activity modifications may be necessary based on venue and conditions</li>
                  <li>Team outcomes depend on multiple factors beyond our control</li>
                </ul>
              </section>

              {/* Technology and Website */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Technology and Website Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While we strive to keep our website running smoothly:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>We cannot guarantee uninterrupted availability of our services</li>
                  <li>Technical issues may occasionally affect website functionality</li>
                  <li>We are not responsible for losses due to technical problems</li>
                  <li>Website content may be updated without notice</li>
                  <li>Compatibility with all devices and browsers is not guaranteed</li>
                </ul>
              </section>

              {/* Financial Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Financial and Donation Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Regarding donations and financial matters:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Donation impact estimates are projections and may vary</li>
                  <li>Financial transparency reports are prepared in good faith</li>
                  <li>Tax deductibility depends on applicable tax laws and individual circumstances</li>
                  <li>We recommend consulting tax professionals for donation-related advice</li>
                  <li>Currency exchange rates may affect international donations</li>
                </ul>
              </section>

              {/* Partnership Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Partnership and Collaboration Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  Information about our partners and collaborators is provided for transparency. 
                  However, partnership arrangements may change, and we are not responsible for 
                  the independent actions or policies of partner organizations. Each partnership 
                  operates under specific agreements that may not be fully detailed on our website.
                </p>
              </section>

              {/* Accessibility */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Accessibility Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  We strive to make our website accessible to all users, including those with disabilities. 
                  However, we cannot guarantee complete accessibility compliance at all times. 
                  If you experience accessibility issues, please contact us, and we will work to 
                  address them promptly.
                </p>
              </section>

              {/* Translation and Language */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Translation and Language Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  If content is provided in multiple languages, the English version shall be considered 
                  authoritative in case of any discrepancies. Translations are provided for convenience 
                  and may not capture all nuances of the original content.
                </p>
              </section>

              {/* Changes and Updates */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes and Updates</h2>
                <p className="text-gray-700 leading-relaxed">
                  This disclaimer may be updated periodically to reflect changes in our services, 
                  legal requirements, or organizational policies. Continued use of our services 
                  after such modifications constitutes acceptance of the updated disclaimer.
                </p>
              </section>

              {/* Contact for Clarifications */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact for Clarifications</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about this disclaimer or need clarification on any aspect 
                  of our services, please contact us:
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
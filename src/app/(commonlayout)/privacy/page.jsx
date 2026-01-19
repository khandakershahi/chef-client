import React from 'react';
import Container from '../../components/Container';

export default function PrivacyPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 pt-32 bg-base-100">
        <Container>
          <div className="max-w-3xl">
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs underline underline-offset-8 decoration-2 mb-4 block">
              Your Data
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-6">
              Privacy <br /> Policy
            </h1>
            <p className="text-base-content/60 text-lg leading-relaxed">
              We're committed to protecting your privacy and ensuring you have a positive experience on our website and at The Golden Apron.
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-base-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Information We Collect */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-base-content">1. Information We Collect</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  We collect information you provide directly, such as when you make a reservation, place an order, or contact us. This may include your name, email address, phone number, dietary preferences, and feedback.
                </p>
                <p>
                  We also automatically collect certain information about your device and how you interact with our website, including IP address, browser type, operating system, and pages visited.
                </p>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">2. How We Use Your Information</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Process and fulfill your reservations and orders</li>
                  <li>Communicate with you about your orders and provide customer support</li>
                  <li>Send promotional emails and special offers (with your consent)</li>
                  <li>Improve our website, services, and customer experience</li>
                  <li>Comply with legal obligations and prevent fraud</li>
                  <li>Analyze usage patterns to enhance our offerings</li>
                </ul>
              </div>
            </div>

            {/* Data Protection */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">3. Data Protection & Security</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and restricted access protocols.
                </p>
                <p>
                  However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">4. Cookies & Tracking</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  Our website uses cookies to enhance your experience. These include essential cookies for site functionality, analytical cookies to understand user behavior, and marketing cookies for personalized content. You can control cookie preferences in your browser settings.
                </p>
              </div>
            </div>

            {/* Third-Party Sharing */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">5. Third-Party Sharing</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our website and conducting our business, such as payment processors, email providers, and analytics services. All third parties are contractually obligated to maintain your privacy.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">6. Your Rights</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at privacy@thegoldenapron.com.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">7. Children's Privacy</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will promptly delete it.
                </p>
              </div>
            </div>

            {/* Policy Changes */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">8. Changes to This Policy</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  We may update this privacy policy periodically. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our website constitutes your acceptance of the updated policy.
                </p>
              </div>
            </div>

            {/* Contact Us */}
            <div className="space-y-6 border-t border-base-300 pt-12 bg-base-200 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-base-content">9. Contact Us</h2>
              <div className="space-y-4 text-base-content/70">
                <p>
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <div className="space-y-2">
                  <p><strong className="text-base-content">Email:</strong> privacy@thegoldenapron.com</p>
                  <p><strong className="text-base-content">Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong className="text-base-content">Address:</strong> 123 Culinary Lane, Gastro City, GC 12345</p>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-base-content/50 pt-8">
              Last Updated: January 2026
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}

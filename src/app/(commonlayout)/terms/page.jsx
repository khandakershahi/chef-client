import React from 'react';
import Container from '../../components/Container';

export default function TermsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 pt-32 bg-base-100">
        <Container>
          <div className="max-w-3xl">
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs underline underline-offset-8 decoration-2 mb-4 block">
              Legal
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-6">
              Terms of <br /> Use
            </h1>
            <p className="text-base-content/60 text-lg leading-relaxed">
              Please read these terms of use carefully before accessing or using The Golden Apron website and services.
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-base-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Agreement */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-base-content">1. Agreement to Terms</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  By accessing and using The Golden Apron website and services, you agree to be bound by these Terms of Use. If you do not agree to any part of these terms, you may not access or use our services.
                </p>
              </div>
            </div>

            {/* Use License */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">2. Use License</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  We grant you a limited, non-exclusive, non-transferable license to use our website and services for personal, non-commercial purposes. You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Modify or copy website content</li>
                  <li>Use content for commercial purposes without authorization</li>
                  <li>Attempt to decompile, reverse engineer, or disassemble the website</li>
                  <li>Remove any copyright, trademark, or other proprietary notices</li>
                  <li>Transfer rights to any third party</li>
                  <li>Access the website through unauthorized means or bots</li>
                </ul>
              </div>
            </div>

            {/* Reservation & Ordering Terms */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">3. Reservation & Ordering</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  When making a reservation or order:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>You must provide accurate, current, and complete information</li>
                  <li>All reservations must be made 24 hours in advance</li>
                  <li>Cancellations must be made at least 12 hours prior to reservation</li>
                  <li>No-show reservations may incur a cancellation fee</li>
                  <li>Menu items are subject to availability</li>
                  <li>Prices are subject to change without notice</li>
                  <li>All orders are confirmed subject to our acceptance</li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">4. Payment Terms</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  All orders must be paid in full upon placement. We accept major credit cards and other payment methods as indicated on our website. By providing payment information, you authorize us to charge your account for the full amount of your order, including taxes and applicable fees.
                </p>
              </div>
            </div>

            {/* Refund Policy */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">5. Refund & Return Policy</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  All sales are final. Refunds are only available for:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Cancelled reservations within the required timeframe</li>
                  <li>Orders not fulfilled due to restaurant error</li>
                  <li>Duplicate charges (within 30 days)</li>
                </ul>
                <p>
                  Refund requests must be submitted within 30 days of the transaction. Special dietary or customization requests do not qualify for refunds.
                </p>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">6. User Responsibilities</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  You are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Maintaining the confidentiality of your account information</li>
                  <li>Notifying us of any unauthorized use of your account</li>
                  <li>Ensuring your information is accurate and up-to-date</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Not engaging in any illegal or harmful activities</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">7. Intellectual Property Rights</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  All content on our website, including text, images, graphics, logos, and recipes, is the property of The Golden Apron or its content suppliers and is protected by international copyright laws. Unauthorized reproduction or distribution is prohibited.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">8. Limitation of Liability</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  To the fullest extent permitted by law, The Golden Apron shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the website or services, even if we have been advised of the possibility of such damages.
                </p>
              </div>
            </div>

            {/* Allergies & Dietary Restrictions */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">9. Allergies & Dietary Restrictions</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  While we take dietary restrictions and allergies seriously, we cannot guarantee that our kitchen facilities are free from all allergens. Please inform us of any allergies when making reservations. We are not liable for reactions to undisclosed allergies or allergens.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">10. Indemnification</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  You agree to indemnify and hold harmless The Golden Apron, its owners, employees, and agents from any claims, damages, losses, or expenses arising from your violation of these terms or your use of our website and services.
                </p>
              </div>
            </div>

            {/* Modifications */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">11. Modifications to Terms</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  We reserve the right to modify these terms at any time. Changes become effective when posted to the website. Your continued use constitutes acceptance of the modified terms.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6 border-t border-base-300 pt-12 bg-base-200 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-base-content">12. Contact Us</h2>
              <div className="space-y-4 text-base-content/70">
                <p>
                  For questions about these terms, please contact us at:
                </p>
                <div className="space-y-2">
                  <p><strong className="text-base-content">Email:</strong> legal@thegoldenapron.com</p>
                  <p><strong className="text-base-content">Phone:</strong> +1 (555) 123-4567</p>
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

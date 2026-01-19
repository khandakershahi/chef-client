import React from 'react';
import Container from '../../components/Container';

export default function CookiesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 pt-32 bg-base-100">
        <Container>
          <div className="max-w-3xl">
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs underline underline-offset-8 decoration-2 mb-4 block">
              Transparency
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-6">
              Cookie <br /> Policy
            </h1>
            <p className="text-base-content/60 text-lg leading-relaxed">
              Learn how The Golden Apron uses cookies to enhance your experience and understand your cookie preferences.
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-base-100">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            {/* What Are Cookies */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-base-content">1. What Are Cookies?</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  Cookies are small text files stored on your device when you visit a website. They help us remember information about your visit, such as your preferences, login details, and browsing behavior. Cookies are widely used to enhance user experience and website functionality.
                </p>
              </div>
            </div>

            {/* Types of Cookies */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">2. Types of Cookies We Use</h2>
              <div className="space-y-6">
                {/* Essential Cookies */}
                <div>
                  <h3 className="text-xl font-bold text-base-content mb-3">Essential Cookies</h3>
                  <p className="text-base-content/70">
                    These cookies are necessary for the website to function properly. They enable basic features like page navigation, security, and access to secure areas. These cookies cannot be disabled as the website will not work without them.
                  </p>
                </div>

                {/* Performance Cookies */}
                <div>
                  <h3 className="text-xl font-bold text-base-content mb-3">Performance & Analytics Cookies</h3>
                  <p className="text-base-content/70">
                    These cookies collect information about how you use our website, such as which pages you visit, how long you stay, and which links you click. This helps us understand user behavior and improve our services. We use Google Analytics for this purpose.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div>
                  <h3 className="text-xl font-bold text-base-content mb-3">Functional Cookies</h3>
                  <p className="text-base-content/70">
                    These cookies remember your preferences and choices, such as your language preferences, dietary restrictions, and saved items. They enhance your experience by personalizing content based on your previous interactions.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div>
                  <h3 className="text-xl font-bold text-base-content mb-3">Marketing & Tracking Cookies</h3>
                  <p className="text-base-content/70">
                    These cookies track your activity across websites to provide personalized advertisements and promotional content. They help us understand which marketing campaigns are most effective and deliver relevant offers.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookie Duration */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">3. Cookie Duration</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  <strong className="text-base-content">Session Cookies:</strong> These cookies expire when you close your browser. They are temporary and used to track your activity during a single visit.
                </p>
                <p>
                  <strong className="text-base-content">Persistent Cookies:</strong> These cookies remain on your device for a set period (typically 1-2 years) and are used to remember your preferences across multiple visits.
                </p>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">4. Third-Party Cookies</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  We use third-party services that may set their own cookies on your device:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-base-content">Google Analytics:</strong> Tracks website usage and user behavior</li>
                  <li><strong className="text-base-content">Payment Processors:</strong> Secure payment processing and fraud detection</li>
                  <li><strong className="text-base-content">Social Media:</strong> Integration with social media platforms</li>
                  <li><strong className="text-base-content">Marketing Partners:</strong> Personalized advertising and campaign tracking</li>
                </ul>
              </div>
            </div>

            {/* How to Control Cookies */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">5. Managing Your Cookies</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  Most web browsers allow you to control cookies through settings. You can:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Accept or reject all cookies</li>
                  <li>Choose which types of cookies to accept</li>
                  <li>Delete existing cookies from your device</li>
                  <li>Set your browser to notify you when a cookie is placed</li>
                  <li>Disable cookies entirely (though this may affect website functionality)</li>
                </ul>
                <p>
                  Please note that disabling essential cookies may prevent certain website features from working properly. We recommend keeping essential cookies enabled while managing other cookie types according to your preferences.
                </p>
              </div>
            </div>

            {/* Specific Services */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">6. Popular Cookie Management Tools</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  You can learn more about cookies and manage cookie preferences using these resources:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-base-content">AllAboutCookies.org:</strong> Provides information on cookies and how to manage them</li>
                  <li><strong className="text-base-content">Google Ads Settings:</strong> Manage personalized ads from Google</li>
                  <li><strong className="text-base-content">Your Browser Settings:</strong> Built-in cookie management in all major browsers</li>
                  <li><strong className="text-base-content">Network Advertising Initiative:</strong> Opt-out options for behavioral advertising</li>
                </ul>
              </div>
            </div>

            {/* Do Not Track */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">7. Do Not Track Signals</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  Some browsers include Do Not Track (DNT) features. While we respect DNT signals, we cannot guarantee all third-party service providers will honor them. If you have DNT enabled and prefer not to be tracked, please adjust your cookie preferences or disable non-essential cookies.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">8. Updates to This Policy</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  We may update this cookie policy periodically to reflect changes in our practices or applicable laws. We will notify you of material changes by updating the "Last Updated" date and, where appropriate, requesting your consent for new cookie types.
                </p>
              </div>
            </div>

            {/* Legal Basis */}
            <div className="space-y-6 border-t border-base-300 pt-12">
              <h2 className="text-3xl font-bold text-base-content">9. Legal Basis for Cookies</h2>
              <div className="space-y-4 text-base-content/70 leading-relaxed">
                <p>
                  In accordance with applicable privacy laws such as GDPR and CCPA, we use cookies based on:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Your explicit consent for marketing and analytics cookies</li>
                  <li>Legitimate business interests for performance improvement</li>
                  <li>Legal compliance requirements</li>
                  <li>Essential functionality for website operation</li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6 border-t border-base-300 pt-12 bg-base-200 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-base-content">10. Questions About Cookies?</h2>
              <div className="space-y-4 text-base-content/70">
                <p>
                  If you have questions about our use of cookies or wish to exercise your rights regarding cookies, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong className="text-base-content">Email:</strong> privacy@thegoldenapron.com</p>
                  <p><strong className="text-base-content">Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong className="text-base-content">Mailing Address:</strong> 123 Culinary Lane, Gastro City, GC 12345</p>
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

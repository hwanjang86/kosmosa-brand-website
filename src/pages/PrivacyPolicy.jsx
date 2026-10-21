import React from 'react';
import LegalLayout from '../components/LegalLayout';
import LegalContact from '../components/LegalContact';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="2026-10-21">
      <p>KOSMOSA is operated by timbee Co., Ltd. in the Republic of Korea. This policy explains how we handle personal information associated with this brand website and inquiries sent to us.</p>

      <section>
        <h2>1. Information we handle and why</h2>
        <p>This website introduces our products and links to Amazon for purchases. It does not provide account registration, a checkout, payment processing, or an on-site inquiry form.</p>
        <p>If you contact us by email or Instagram, we receive the information you choose to send, such as your name, email address or Instagram username, message, and attachments. We use it only to respond to and handle your inquiry, not for marketing. Please do not send passwords, payment details, or other sensitive information.</p>
        <p>Our hosting provider may process technical request information, such as IP addresses, requested URLs, browser information, and timestamps, to deliver and secure the website.</p>
      </section>

      <section>
        <h2>2. Cookies, analytics, and fonts</h2>
        <p>We have not installed Google Analytics, Meta Pixel, advertising trackers, or other visitor analytics tools. Our website code does not set cookies or use local storage to track visitors. Hosting security services and external websites may have their own practices.</p>
        <p>We use Google Fonts to display the Inter typeface. Your browser requests font resources from Google, which receives technical request information including your IP address. This is separate from Google Analytics. For details, see <a href="https://fonts.googleblog.com/2022/11/your-privacy-and-google-fonts.html">Google Fonts privacy information</a> and <a href="https://policies.google.com/privacy">Google’s Privacy Policy</a>.</p>
        <p>You can manage cookies through your browser settings. These settings may also affect external websites you choose to visit.</p>
      </section>

      <section>
        <h2>3. Service providers and external platforms</h2>
        <p>Vercel provides website hosting and delivery. Google provides the externally loaded fonts. Email and Instagram services process messages sent through their platforms. These services may process information outside the Republic of Korea, including in the United States, depending on their infrastructure and practices. See <a href="https://vercel.com/legal/privacy-notice">Vercel’s Privacy Notice</a> for its information handling practices.</p>
        <p>Amazon and Instagram links take you to separate services with their own privacy policies. We do not process payments on this website or separately download and retain Amazon customer order information. Information handled by Amazon or Instagram remains subject to their respective policies, including records those platforms retain.</p>
        <p>We do not sell inquiry information or share it for advertising. Information may be handled by service providers as needed to deliver the website or communications, or disclosed where required by applicable law.</p>
      </section>

      <section>
        <h2>4. Retention and deletion</h2>
        <p>We delete inquiry-related personal information under our control within 90 days of receiving it. If a specific legal obligation requires longer retention, we retain only the information required for the legally required period.</p>
        <p>The 90-day period applies to our inquiry records. Hosting logs, font requests, and records maintained by external platforms are subject to those providers’ retention practices. We do not maintain a separate Amazon customer order database.</p>
      </section>

      <section>
        <h2>5. Your privacy requests</h2>
        <p>You may contact us to request access to, correction of, or deletion of personal information we hold about you, or to request restriction of its use or withdraw consent where applicable. We handle requests in accordance with applicable law and may need to confirm your identity. Please provide only the information necessary to identify your inquiry.</p>
        <p>For information controlled by Amazon, Instagram, or another external provider, you can also use that provider’s privacy request process. Deleting our copy of an inquiry does not necessarily delete records held independently by the platform.</p>
      </section>

      <section>
        <h2>6. Changes to this policy</h2>
        <p>We will publish updates on this page and revise the date above when our practices change. Where required by law, we will provide additional notice or obtain consent.</p>
      </section>

      <section>
        <h2>7. Privacy contact</h2>
        <p>For questions about this policy or to make a privacy request, contact:</p>
        <LegalContact />
      </section>
    </LegalLayout>
  );
}

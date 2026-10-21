import React from 'react';
import LegalLayout from '../components/LegalLayout';
import LegalContact from '../components/LegalContact';

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" updated="2026-10-21">
      <p>These terms govern your use of the KOSMOSA brand website, operated by timbee Co., Ltd. in the Republic of Korea. By using this website, you agree to these terms to the extent permitted by applicable law.</p>

      <section>
        <h2>1. About this website</h2>
        <p>This website provides information about KOSMOSA and its products. It does not accept orders or payments. Buttons labeled “Add to Cart” and “Shop Amazon” link to Amazon; clicking them does not place an order or add an item to a cart on this website.</p>
      </section>

      <section>
        <h2>2. Product information and purchases</h2>
        <p>We aim to keep product descriptions, images, availability, and prices accurate, but they may change or contain errors. Colors may appear differently depending on your display. Prices shown in dollars on this website are in US dollars.</p>
        <p>Before purchasing, confirm the selected product, variation, final price, taxes, shipping charges, availability, and applicable conditions on Amazon. Orders, payments, delivery, cancellations, and returns are handled through Amazon under the applicable Amazon and seller terms. These website terms do not replace those purchase terms or limit your statutory consumer rights.</p>
      </section>

      <section>
        <h2>3. Intellectual property</h2>
        <p>Unless otherwise indicated, the KOSMOSA name, logos, product photographs, text, and website design belong to timbee Co., Ltd. or their respective rights holders. You may view the website for personal use. Reproduction, distribution, or commercial use requires permission unless otherwise allowed by law. Third-party trademarks remain the property of their owners.</p>
      </section>

      <section>
        <h2>4. Acceptable use</h2>
        <p>Use this website lawfully. Do not attempt unauthorized access, introduce malicious software, disrupt the website, or infringe the rights of others.</p>
      </section>

      <section>
        <h2>5. External links and privacy</h2>
        <p>Links to Amazon, Instagram, and other external websites are provided for your convenience. Those services are operated separately and have their own terms and privacy policies. We do not control their content, availability, or information handling practices.</p>
        <p>Our handling of personal information associated with this website and inquiries is described in our <a href="/privacy.html">Privacy Policy</a>.</p>
      </section>

      <section>
        <h2>6. Availability and responsibility</h2>
        <p>We may update, suspend, or discontinue website content. We do not guarantee uninterrupted access or that all content will always be current or free of errors.</p>
        <p>To the extent permitted by applicable law, we are not responsible for losses arising solely from interruptions to this informational website or from services operated by third parties. Nothing in these terms excludes liability that cannot lawfully be excluded, including liability for intentional misconduct or gross negligence, or limits mandatory consumer protections.</p>
      </section>

      <section>
        <h2>7. Changes and applicable law</h2>
        <p>Updates to these terms will be posted here with a revised date. Where required, we will provide additional notice. Changes apply prospectively, subject to applicable law.</p>
        <p>These terms are governed by the laws of the Republic of Korea, without depriving you of mandatory protections or rights to bring claims available under the laws that apply to you.</p>
      </section>

      <section>
        <h2>8. Contact</h2>
        <p>For questions about this website or these terms, contact:</p>
        <LegalContact />
      </section>
    </LegalLayout>
  );
}

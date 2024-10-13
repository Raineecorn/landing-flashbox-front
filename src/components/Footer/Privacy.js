import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function PrivacyPolicy() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Card className="shadow-lg p-5">
          <h1 className="text-primary mb-4 text-start" style={{ color: '#052c4c' }}> Privacy Policy for Flashbox Cargo</h1>
            <p><strong>Effective Date:</strong> May 1, 2024</p>

            <p>
              At <strong>Flashbox Cargo</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect the information you provide when using our tracking services via <strong>[Flashbox Cargo’s website]</strong>. By accessing or using our services, you agree to the terms of this policy.
            </p>

            <h2 className="text-primary mt-4 text-left">1. Information We Collect</h2>
            <p>When you use our services, we may collect the following information:</p>
            <ul>
              <li><strong>Tracking Numbers:</strong> Information related to the tracking number you provide for shipment status.</li>
              <li><strong>Personal Information:</strong> This includes your name, email address, phone number, and any other contact details you provide to us voluntarily.</li>
              <li><strong>Device Information:</strong> Details about your device, including IP address, browser type, and usage logs.</li>
              <li><strong>Cookies:</strong> We may use cookies to track your interactions on our site to improve user experience.</li>
            </ul>

            <h2 className="text-primary mt-4 text-left">2. How We Use Your Information</h2>
            <p>We use the information we collect for:</p>
            <ul>
              <li><strong>Shipment Tracking:</strong> To provide real-time tracking updates for your shipments.</li>
              <li><strong>Communication:</strong> To respond to your inquiries and provide customer support.</li>
              <li><strong>Service Improvement:</strong> To analyze website traffic and usage to improve our services.</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations or as required by law.</li>
            </ul>

            <h2 className="text-primary mt-4 text-left">3. Confidentiality and Security</h2>
            <p>We take your privacy seriously and employ several measures to protect your information:</p>
            <ul>
              <li><strong>Data Encryption:</strong> All data transmissions are encrypted using industry-standard encryption protocols.</li>
              <li><strong>Restricted Access:</strong> Access to personal information is limited to authorized personnel only.</li>
              <li><strong>Data Retention:</strong> We retain your data only for as long as necessary to fulfill the services we offer or as required by law.</li>
            </ul>

            <h2 className="text-primary mt-4 text-left">4. Sharing of Information</h2>
            <p>We do not sell, rent, or share your personal information with third parties except:</p>
            <ul>
              <li><strong>Service Providers:</strong> We may share information with service providers who help us facilitate shipment tracking or deliver our services.</li>
              <li><strong>Legal Obligations:</strong> In compliance with legal requests, regulatory requirements, or court orders.</li>
            </ul>

            <h2 className="text-primary mt-4 text-left">5. Your Rights</h2>
            <p>You have the following rights regarding your data:</p>
            <ul>
              <li><strong>Access and Correction:</strong> You may request access to the personal data we hold and correct any inaccuracies.</li>
              <li><strong>Data Deletion:</strong> You may request the deletion of your personal data when it is no longer needed for service purposes.</li>
              <li><strong>Opt-out:</strong> You can opt out of receiving promotional communications from us at any time.</li>
            </ul>

            <h2 className="text-primary mt-4 text-left">6. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can disable cookies through your browser settings, although this may affect the website&#39;s functionality.
            </p>

            <h2 className="text-primary mt-4 text-left">7. Third-Party Links</h2>
            <p>
              Our website may include links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. Please review their privacy policies before providing any personal information.
            </p>

            <h2 className="text-primary mt-4 text-left">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any updates will be posted on this page with a new effective date. Please review this policy periodically for any changes.
            </p>

            <h2 className="text-primary mt-4 text-left">9. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy or your personal data, please contact us at:
            </p>
            <p>
              <strong>Flashbox Cargo</strong><br />
              No.1/1 Warehouse No. 217, Nimitmai 42 Aelly,<br />
              Klongsamwatawanook Sub-district,<br />
              Klongsamwa District, Bangkok 10520<br />
              Tel: 09 2971 8868, 0910104929, 0645532226<br />
              Email: flashcargo@gmail.com
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PrivacyPolicy;

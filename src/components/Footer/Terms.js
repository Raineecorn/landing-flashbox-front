import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function TermsOfService() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Card className="shadow-lg p-5">
            <h1 className="text-primary mb-4 text-start" style={{ color: '#052c4c' }}>Terms of Service for Flashbox Cargo</h1>
            <p><strong>Effective Date:</strong> May 1, 2024</p>

            <p>
              Welcome to <strong>Flashbox Cargo</strong>. These Terms of Service (“Terms”) govern your use of our website, services, and features provided by Flashbox Cargo. By accessing or using our services, you agree to comply with these Terms. If you do not agree to these Terms, you should not use our services.
            </p>

            <h2 className="text-primary mt-4 text-start">1. Use of Our Services</h2>
            <p>
              Flashbox Cargo provides shipment tracking and other related services. By using our services, you agree that:
            </p>
            <ul>
              <li>You will use our services only for lawful purposes and in compliance with applicable local, national, or international laws and regulations.</li>
              <li>You will not use our services to engage in illegal, fraudulent, or abusive activity.</li>
            </ul>

            <h2 className="text-primary mt-4 text-start">2. Account and Information Accuracy</h2>
            <p>
              To use certain services, you may be required to provide information such as your tracking number or personal details (e.g., name, phone number, and email address). You agree that:
            </p>
            <ul>
              <li>You will provide accurate, current, and complete information.</li>
              <li>You will promptly update any necessary information to ensure accuracy.</li>
              <li>You are responsible for maintaining the confidentiality of any account details you provide to us.</li>
            </ul>

            <h2 className="text-primary mt-4 text-start">3. Tracking Information</h2>
            <p>
              Flashbox Cargo offers shipment tracking services. When using our tracking system:
            </p>
            <ul>
              <li>You acknowledge that the information provided is based on real-time data available from shipping partners.</li>
              <li>Tracking information is provided solely for your reference, and Flashbox Cargo makes no guarantees regarding delivery timelines or accuracy.</li>
              <li>Flashbox Cargo is not liable for any delays, damages, or losses related to shipments, including missed deadlines or misdeliveries by third-party carriers.</li>
            </ul>

            <h2 className="text-primary mt-4 text-start">4. Service Availability</h2>
            <p>
              We strive to keep our services available and operational at all times. However, we do not guarantee uninterrupted access to our services. Flashbox Cargo may:
            </p>
            <ul>
              <li>Modify, suspend, or discontinue our services at any time for maintenance, updates, or other reasons.</li>
              <li>Restrict or block access to the services if there is any suspicion of misuse, violation of these Terms, or for any other reason at our discretion.</li>
            </ul>

            <h2 className="text-primary mt-4 text-start">5. Intellectual Property Rights</h2>
            <p>
              All content, logos, trademarks, and intellectual property displayed on our website or through our services are the property of Flashbox Cargo or its licensors. You agree that:
            </p>
            <ul>
              <li>You will not copy, reproduce, modify, or distribute any of the content or intellectual property without express written permission from Flashbox Cargo.</li>
              <li>You will not use our trademarks, service marks, or logos in any unauthorized manner.</li>
            </ul>

            <h2 className="text-primary mt-4 text-start">6. Privacy and Data Protection</h2>
            <p>
              By using our services, you agree to the collection and use of your personal data as described in our <a href="/privacy">Privacy Policy</a>. You acknowledge that:
            </p>
            <ul>
              <li>We may collect personal information, including but not limited to your name, email address, phone number, and shipping details to provide our services.</li>
              <li>We are committed to protecting your personal information, and we will use it in compliance with applicable data protection laws.</li>
            </ul>

            <h2 className="text-primary mt-4 text-start">7. Limitation of Liability</h2>
            <p>
              To the extent permitted by law, Flashbox Cargo shall not be liable for:
            </p>
            <ul>
              <li>Any indirect, incidental, special, consequential, or punitive damages arising out of your use or inability to use our services.</li>
              <li>Any loss of profits, revenue, or data resulting from delays, misdeliveries, or any actions by third-party carriers or shipping providers.</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein.</li>
            </ul>

            <h2 className="text-primary mt-4 text-start">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the **Kingdom of Thailand**, without regard to its conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in **Bangkok, Thailand**.
            </p>

            <h2 className="text-primary mt-4 text-start">9. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Any changes will be posted on this page with an updated effective date. Your continued use of the services after any such changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className="text-primary mt-4 text-start">10. Contact Us</h2>
            <p>
              If you have any questions regarding these Terms, please contact us:
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

export default TermsOfService;

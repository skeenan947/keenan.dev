import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>CozyTime AI - Privacy Policy</h2>

            <p>Last Updated: 1/5/2024</p>

            <p>This Privacy Policy explains how Shaun Keenan, the entity behind the "CozyTime AI" app (referred to as "we," "our," or "us"), collects, uses, and shares user data. We are committed to protecting your privacy and providing transparency regarding the information we collect and how it is handled.</p>

            <h3>1. Information We Collect</h3>

            <h3>1.1 Personal Information</h3>
            <p>We may collect the following types of personal information:</p>
            <ul>
                <li>User account information (e.g., username, email address, profile picture).</li>
                <li>Information you provide when contacting our support team (e.g., email address, name, description of the issue).</li>
            </ul>

            <h3>1.2 Usage and Device Information</h3>
            <p>We may collect usage information and device-specific data, including but not limited to:</p>
            <ul>
                <li>Device type and model</li>
                <li>Operating system version</li>
                <li>App usage data</li>
                <li>IP address</li>
                <li>Unique device identifiers</li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <p>We use the collected data for the following purposes:</p>
            <ul>
                <li>To provide and improve our services, including the "CozyTime AI" app.</li>
                <li>To personalize user experiences and content.</li>
                <li>To respond to user inquiries and provide support.</li>
                <li>To process payments and fulfill purchases.</li>
                <li>To monitor and analyze app usage for optimization and security purposes.</li>
                <li>To comply with legal obligations.</li>
            </ul>

            <h3>3. Data Sharing</h3>
            <p>We may share your data with the following third parties:</p>
            <ul>
                <li>Payment processors.</li>
                <li>Analytics partners to improve our services and offer relevant content.</li>
                <li>Law enforcement, government authorities, or legal parties as required by law or to protect our rights and interests.</li>
            </ul>

            <h3>4. Data Security</h3>
            <p>We implement appropriate security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. However, no data transmission or storage method is entirely secure, and we cannot guarantee absolute security.</p>

            <h3>5. Data Retention</h3>
            <p>We retain your data for as long as necessary to fulfill the purposes outlined in this policy or as required by applicable laws and regulations. You may request the deletion of your data by contacting us at <a href="mailto:support@keenan.dev">support@keenan.dev</a>.</p>

            <h3>6. Your Choices</h3>
            <p>You have the following rights regarding your data:</p>
            <ul>
                <li>Access: You can request access to the personal information we hold about you.</li>
                <li>Correction: You can request correction of inaccurate or incomplete data.</li>
                <li>Deletion: You can request the deletion of your data.</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <a href="mailto:privacy@keenan.dev">privacy@keenan.dev</a>.</p>

            <h3>7. Contact Us</h3>
            <p>If you have any questions, concerns, or inquiries regarding this privacy policy or our data practices, please contact us at:</p>
            <ul>
                <li>Email: <a href="mailto:privacy@keenan.dev">privacy@keenan.dev</a></li>
            </ul>

            <h3>8. Changes to This Privacy Policy</h3>
            <p>We may update this privacy policy from time to time to reflect changes in our data handling practices. We will notify you of any significant changes by posting the updated policy on our website or within the app.</p>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        textAlign: 'left',
        maxWidth: '800px',
        margin: '0 auto'
    },
    header: {
        color: '#333',
        margin: '20px 0'
    }
};

export default PrivacyPolicy;

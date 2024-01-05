import React, { useEffect } from 'react';

const SupportPage = () => {
    useEffect(() => {
        document.title = "CozyTime AI - Support"
    }, []);

    const emailAddress = "support@keenan.dev"; // Replace with your email address

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Support & FAQ</h2>

            {/* FAQ Section */}
            <div style={styles.faqSection}>
                <h3>FAQ</h3>
                <p><strong>How do I download the app?</strong><br/>You can download the app from the App Store or Google Play.</p>
                {/* Add more FAQs as needed */}
            </div>

            {/* Contact Section */}
            <div style={styles.contactSection}>
                <h3>Contact Us</h3>
                <p>If you have any questions or need further assistance, please don't hesitate to contact us.</p>
                <a href={`mailto:${emailAddress}`} style={styles.emailLink}>Send an Email to {`${emailAddress}`}</a>
            </div>
            <div>
            <h2>Feedback</h2>
                <p>We value your feedback. If you have any suggestions or feedback on how we can improve CozyTime, please feel free to share it with us at <a href="mailto:feedback@keenan.dev">feedback@keenan.dev</a>.</p>
            </div>
            <div>
            <h2>Privacy Policy</h2>
                <p>For information on how we handle your data, please review our <a href="/privacy-policy">privacy policy</a>.</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        textAlign: 'center'
    },
    header: {
        color: '#333',
        margin: '20px 0'
    },
    faqSection: {
        margin: '20px 0'
    },
    contactSection: {
        margin: '20px 0'
    },
    emailLink: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        textDecoration: 'none',
        display: 'inline-block'
    }
};

export default SupportPage;

import React from 'react';

const SupportPage = () => {
    const emailAddress = "skeenan+cozytime@gmail.com"; // Replace with your email address

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
                <a href={`mailto:${emailAddress}`} style={styles.emailLink}>Send an Email</a>
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

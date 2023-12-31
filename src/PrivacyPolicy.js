import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Privacy Policy</h2>

            <p>Last updated: [12/30/2023]</p>

            <h3>Introduction</h3>
            <p>Our privacy policy explains the details of the personal data we collect from our users, how we use it, and the steps we take to protect it.</p>

            <h3>Data Collection</h3>
            <p>We collect a minimal amount of data from our users, specifically their names and email addresses. This information is gathered solely for the purpose of enhancing the user experience within our app.</p>

            <h3>Use of Data</h3>
            <p>The collected names and email addresses are used for in-app functionality that requires personal identification and communication. We do not use this information for marketing purposes or share it with any third parties.</p>

            <h3>Data Protection</h3>
            <p>We are committed to protecting your data. We implement a variety of security measures to maintain the safety of your personal information.</p>

            <h3>Changes to This Privacy Policy</h3>
            <p>Our Privacy Policy may change from time to time. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice.</p>

            <h3>Contact Us</h3>
            <p>If you have any questions or concerns about our Privacy Policy, please contact us.</p>
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

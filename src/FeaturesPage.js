import React from 'react';

const FeaturesPage = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>App Features</h2>
            <div style={styles.feature}>
                <h3>Feature One</h3>
                <p>Describe the first key feature of your app here.</p>
            </div>
            <div style={styles.feature}>
                <h3>Feature Two</h3>
                <p>Describe the second key feature of your app here.</p>
            </div>
            <div style={styles.feature}>
                <h3>Feature Three</h3>
                <p>Describe the third key feature of your app here.</p>
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
    feature: {
        margin: '20px 0'
    }
};

export default FeaturesPage;

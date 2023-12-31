import React from 'react';

const FeaturesPage = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.header}>App Features</h2>
            <div style={styles.feature}>
                <h3>AI Story Creation</h3>
                <p>You describe the story, in as few or as many words as you want, and our AI will craft a story for you.</p>
            </div>
            <div style={styles.feature}>
                <h3>Story Reading</h3>
                <p>Stories will be read aloud to you by one of our custom voices.</p>
            </div>
            <div style={styles.feature}>
                <h3>Image Creation</h3>
                <p>An image will be created to go along with your story.</p>
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

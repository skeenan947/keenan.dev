import React, { useEffect } from 'react';

const FeaturesPage = () => {
    useEffect(() => {
        document.title = "CozyTime AI - Features"
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Introducing CozyTime AI - Your Personal Sleep Storyteller!</h1>
            <p>Tired of restless nights and tossing and turning in bed? Say goodbye to sleepless nights and hello to sweet dreams with CozyTime AI, your ultimate sleep companion.</p>
            
            <h2 style={styles.header}>What is CozyTime AI?</h2>
            <p>CozyTime AI is the app that brings the power of artificial intelligence right to your bedtime routine. Imagine having a tailor-made bedtime story, crafted just for you, every night. With CozyTime AI, that dream becomes a reality.</p>
            
            <div style={styles.feature}>
                <h3>Personalized Sleep Stories</h3>
                <p>Simply input your preferences, and CozyTime AI will create a soothing, one-of-a-kind sleep story just for you. Tell us your favorite characters, settings, or themes, and let our AI do the rest.</p>
            </div>
            <div style={styles.feature}>
                <h3>Sleep-Inducing Narration</h3>
                <p>Our expertly designed narratives are sure to whisk you away to a world of tranquility, helping you relax and fall asleep faster.</p>
            </div>
            <div style={styles.feature}>
                <h3>Customizable Soundscapes</h3>
                <p>Choose from a library of calming soundscapes, from gentle rain to crackling fire, to enhance your sleep experience.</p>
            </div>
            <div style={styles.feature}>
                <h3>Nightly Relaxation Routine</h3>
                <p>Set a nightly reminder, and CozyTime AI will be your consistent bedtime companion, ensuring you drift off to dreamland effortlessly.</p>
            </div>

            <h2 style={styles.header}>Why Choose CozyTime AI?</h2>
            <ul>
                <li>Enjoy a good night's sleep every night, and wake up refreshed and ready to conquer the day.</li>
                <li>Say goodbye to stress, anxiety, and insomnia with our soothing bedtime stories.</li>
                <li>Customize your sleep experience to suit your unique preferences.</li>
                <li>Improve your sleep quality and overall well-being.</li>
            </ul>

            <p>CozyTime AI is here to transform your bedtime routine into a magical, relaxing, and unforgettable experience. Say hello to peaceful nights and dreamy sleep with CozyTime AI.</p>
            <p>Download the app today and let the power of AI create your perfect sleep story. Sweet dreams are just a tap away!</p>
            <p><strong>Get CozyTime AI now<p><a href="https://apps.apple.com/us/app/cozytime-ai/id6473547179"><img src="/download-on-the-app-store.svg" alt="Download on the App Store"></img></a></p></strong></p>

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

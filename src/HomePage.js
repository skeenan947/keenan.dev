import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>CozyTime</h1>
            </header>
            <div style={styles.content}>
                <p>Introducing CozyTime AI - Your Personal Sleep Storyteller!</p>
                <img 
                    src="cozytime.png" 
                    alt="Mobile App Screenshot" 
                    style={styles.image} 
                /> 
                <img 
                    src="cozytime2.png" 
                    alt="Mobile App Screenshot" 
                    style={styles.image} 
                /> 
                <img 
                    src="cozytime3.png" 
                    alt="Mobile App Screenshot" 
                    style={styles.image} 
                /><br></br>
                <Link to="/features" style={styles.button}>Learn More</Link>
            </div>
            <footer style={styles.footer}>
                © 2023 Shaun Keenan
            </footer>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
    },
    header: {
        backgroundColor: '#003366',
        color: 'white',
        padding: '10px 0'
    },
    content: {
        padding: '20px'
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        margin: '20px 0'
    },
    button: {
        backgroundColor: '#008CBA',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer'
    },
    footer: {
        backgroundColor: '#333',
        color: 'white',
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        textAlign: 'center',
        padding: '10px 0'
    }
};

export default HomePage;

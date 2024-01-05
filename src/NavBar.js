import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={styles.navBar}>
            <Link to="/" style={styles.navItem}>Home</Link>
            <Link to="/features" style={styles.navItem}>Features</Link>
            <Link to="/support" style={styles.navItem}>Support</Link>
            <Link to="/privacy-policy" style={styles.navItem}>Privacy</Link>
        </nav>
    );
};

const styles = {
    navBar: {
        backgroundColor: '#333',
        color: 'white',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center'
    },
    navItem: {
        margin: '0 10px',
        color: 'white',
        textDecoration: 'none'
    }
};

export default NavBar;

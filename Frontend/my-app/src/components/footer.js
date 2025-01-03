import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#343a40',
        color: 'white',
        padding: '1rem 0',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        textAlign: 'center'
    };

    return (
        <footer style={footerStyle}>
            <div className="container">
                <p>&copy; 2025 Taza Khabar. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
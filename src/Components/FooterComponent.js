import React from 'react';
import '.././App.css';

function FooterComponent() {
    const footerStyle = {
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        textAlign: 'center',
        padding: '30px 0',
        left: '0',
        bottom: '0',
        width: '100%',
    };

    return (
        <footer style={footerStyle}>
            <p>© 2024 Martin Grulyo | Computer Science Student, Esbjerg</p>
            <p>📧 Email: martingrulyo@gmail.com</p>
            <p>Open to job or internship opportunities!</p>
        </footer>
    );
}

export default FooterComponent;

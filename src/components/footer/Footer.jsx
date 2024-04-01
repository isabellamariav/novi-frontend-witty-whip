import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer-text">All rights reserved | Witty Whip {currentYear}</p>
        </footer>
    );
};

export default Footer;

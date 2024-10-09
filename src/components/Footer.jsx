import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons

const Footer = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [hoveredLink, setHoveredLink] = useState(null);

    // Function to handle mouse enter and leave for icons
    const handleMouseEnterIcon = (icon) => {
        setHoveredIcon(icon);
    };

    const handleMouseLeaveIcon = () => {
        setHoveredIcon(null);
    };

    // Function to handle mouse enter and leave for links
    const handleMouseEnterLink = (link) => {
        setHoveredLink(link);
    };

    const handleMouseLeaveLink = () => {
        setHoveredLink(null);
    };

    return (
        <footer className="bg-dark text-white text-center py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-2">
                        <h5>About Us</h5>
                        <p>
                            We are a leading e-commerce platform offering a wide range of products at competitive prices.
                        </p>
                    </div>
                    <div className="col-md-3 mb-3">
                        <h5>Quick Links</h5>
                        {['/', '/about', '/shop', '/contact'].map((link, index) => (
                            <NavLink
                                key={index}
                                to={link}
                                className="d-block"
                                onMouseEnter={() => handleMouseEnterLink(link)}
                                onMouseLeave={handleMouseLeaveLink}
                                style={{
                                    color: hoveredLink === link ? 'blueviolet' : 'lightgray',
                                    textDecoration: 'none',
                                    margin: '0.5rem 0',
                                    transition: 'color 0.3s ease',
                                    fontSize: '1rem',
                                    fontWeight:'bold'
                                }}
                            >
                                {link === '/' ? 'Home' : link === '/about' ? 'About' : link === '/shop' ? 'Shop' : 'Contact'}
                            </NavLink>
                        ))}
                    </div>
                    <div className="col-md-3 mb-2">
                        <h5>Follow Us</h5>
                        <div>
                            {['facebook', 'twitter', 'instagram', 'linkedin'].map((icon) => (
                                <a
                                    key={icon}
                                    href={`https://${icon}.com`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onMouseEnter={() => handleMouseEnterIcon(icon)}
                                    onMouseLeave={handleMouseLeaveIcon}
                                    style={{
                                        color: hoveredIcon === icon ? 'orangered' : 'lightgray',
                                        marginRight: '1rem',
                                        transition: 'color 0.3s ease, transform 0.2s ease',
                                        display: 'inline-block',
                                        fontSize: '1.5rem',
                                    }}
                                >
                                    {icon === 'facebook' && <FaFacebook />}
                                    {icon === 'twitter' && <FaTwitter />}
                                    {icon === 'instagram' && <FaInstagram />}
                                    {icon === 'linkedin' && <FaLinkedin />}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-3 mb-2">
                        <h5>Contact Us</h5>
                        <p>Email: vadalishanmukha@gmail.com</p>
                        <p>Phone: 9550353530</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="mb-0">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useState, useEffect } from 'react';

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <div className={`app-header ${scrolled ? 'scrolled' : ''}`}>
            <nav>
                <a href="#hero">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    );
}

export default Header;

'use client';
import React from 'react';
import StaggeredMenu from './StaggeredMenu';

const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
    { label: 'Project', ariaLabel: 'View our projects', link: '#project' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' },
];

const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com/theofannyr' },
    { label: 'Gmail', link: 'mailto:theofannyrewah@gmail.com' },
    { label: 'Whatsapp', link: 'https://wa.me/6285183005287' },
];

export default function Navbar() {
    return (
        <StaggeredMenu
            isFixed={true}
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#646262ff"
            openMenuButtonColor="#000000"
            changeMenuColorOnOpen={true}
            colors={['#4a494aff', '#2b2b2bff']}
            logoUrl="" // Empty or provide a valid path if available
            accentColor="#716f6fff"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
        />
    );
}

"use client";
import styles from "./header.module.css";
import { useState } from 'react';

const pages = [
    { id: 1, name: "Livros", href: "/books" },
    { id: 2, name: "Personagens", href: "/characters" },
    { id: 3, name: "Casas", href: "/houses" },
    { id: 4, name: "Castelos", href: "/castles" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className={styles.headerBackground}>
            <header className={styles.container}>
                <div className={styles.iconContainer}>
                    <a href="/" className={styles.homeIconLink}>
                        <img src="/favicon.ico" alt="Página home" className={styles.homeIconImage} />
                    </a>
                </div>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Me in Westeros</h1>
                    <h2 className={styles.subtitle}>Uma viagem gelo e fogo</h2>
                </div>

                {/* Desktop Navigation */}
                <nav className={styles.navbar}>
                    {pages.map((page) => (
                        <div key={page.name} className={styles.navItem}>
                            <a href={`pages/${page.href}`} className={styles.navLink}>
                                {page.name}
                            </a>
                        </div>
                    ))}
                </nav>

                {/* Mobile Hamburger Button */}
                <button 
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
                    <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
                    <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ''}`}></span>
                </button>

                {/* Mobile Dropdown Menu */}
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                    {pages.map((page) => (
                        <a 
                            key={page.name} 
                            href={page.href} 
                            className={styles.mobileNavLink}
                            onClick={closeMenu}
                        >
                            {page.name}
                        </a>
                    ))}
                </div>
            </header>
        </div>
    );
}
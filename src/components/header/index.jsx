import styles from "./header.module.css";

const pages = [
    { id: 1, name: "Livros", href: "/books" },
    { id: 2, name: "Personagens", href: "/characters" },
    { id: 3, name: "Casas", href: "/houses" },
    { id: 4, name: "Castelos", href: "/castles" },
];

export default function Header() {
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
                <nav className={styles.navbar}>
                    {pages.map((page) => (
                            <div key={page.name} className={styles.navItem}>
                                <a key={page.name} href={page.href} className={styles.navLink}>
                                    {page.name}
                                </a>
                            </div>
                    ))}
                </nav>
            </header>
        </div>
    );
}

import styles from "./header.module.css";

export default function Header() {  
    return (
        <header className={styles.container}>
            <h1 className={styles.title}>Me in Westeros</h1>
            <p className={styles.subtitle}>Uma viagem gelo e fogo</p>   
        </header>
    );
};
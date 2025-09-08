import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <span className={styles.brand}>Me in Westeros</span>
        <nav className={styles.socialNav}>
          <a
            href="https://github.com/pedro-ols/pedro-ols"
            target="_blank"
            className={styles.socialLink}
          >
            <img
              src="/icons/github-logo.png"
              alt="Meu GitHub"
              className={styles.socialLinkImage}
            />
          </a>
        </nav>
        <p>Desenvolvido por Pedro Santos</p>
      </div>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Me in Westeros. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}

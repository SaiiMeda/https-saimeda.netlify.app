import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made by Sai Meda <img src="/favicon-16x16.png" alt="Sai Meda Logo" className={styles.logo} /> for you
      </footer>
    </>
  )
}

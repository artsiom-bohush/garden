import styles from './styles.module.css'
import logo from '../../assets/logo.png'
import shopIcon from '../../assets/shopIcon.png'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" />
        <button className={styles.catalogButton}>Catalog</button>
      </div>
      <div className={styles.navbar}>
        <div className={styles.linksContainer}>
          <a className={styles.navbarLinks} href="">
            Main Page
          </a>
          <a className={styles.navbarLinks} href="">
            All Products
          </a>
          <a className={styles.navbarLinks} href="">
            All Sales
          </a>
        </div>
        <div>
          <img src={shopIcon} alt="shop icon" />
        </div>
      </div>
    </header>
  )
}

import styles from './styles.module.css'
import bush from '../../assets/bushAd.png'

export const AdSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titlesContainer}>
        <span className={styles.title}>Sale</span>
        <span className={styles.subtitle}>New Season</span>
        <button className={styles.saleButton}>Sale</button>
      </div>

      <div className={styles.adImgContainer}>
        <img src={bush} alt="bush" />
      </div>
    </div>
  )
}

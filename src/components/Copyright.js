import styles from './Copyright.module.css'
import reactLogo from '../logo.svg';

export default function Copyright() {

    return (
        <div className={styles.copyright}>
            <p className={styles.copy}>&copy; Copyright of Dhaval Ladani</p>
            <p className={styles.copy}>Made using React</p>
            <img className={styles.logo} src={reactLogo}></img>
        </div>
    )
}
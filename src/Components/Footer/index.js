import styles from './footer.module.css';

export default function Footer(){
    return(
        <div className={styles.footerbody}>
            <a className={styles.defaultlink} href="https://paypal.me/erincarver926" target="_blank" rel="noreferrer">Donate to Erin's coffee fund</a>
            <a className={styles.defaultlink} href="https://www.twitch.tv/webdeverin" target="_blank" rel="noreferrer">View Erin's coding streams</a>
            <a className={styles.defaultlink} href="https://www.linkedin.com/in/erin-carver/" target="_blank" rel="noreferrer">Connect on Linkedin</a>
        </div>
    )
}
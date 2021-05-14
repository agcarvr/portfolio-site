import {Link} from 'react-router-dom';
import styles from './nav.module.css';

export default function Nav(){
    return (
        <nav className={styles.navbody}>
            <Link className={styles.links} to="/"><h4>Erin C</h4></Link>
            <a className={styles.links} href="https://github.com/agcarvr" target="_blank" rel="noreferrer">Erin's Github</a>
            <Link className={styles.links} to="/projects" >Erin's Projects</Link>
        </nav>
    )
}
import {Link} from 'react-router-dom';
import styles from './nav.module.css';

export default function Nav(){
    return (
        <nav className={styles.navbody}>
            <Link className={styles.links} to="/"><h4>Homepage</h4></Link>
            <Link className={styles.links} to="/resume" >Erin's Resume</Link>
            <Link className={styles.links} to="/projects" >Erin's Projects</Link>
        </nav>
    )
}
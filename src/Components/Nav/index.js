import {Link} from 'react-router-dom';
import styles from './nav.module.css';

export default function Nav(){
    return (
        <nav className={styles.navbody}>
            <Link to="/"><h4>Erin C</h4></Link>
            <a href="https://github.com/agcarvr" target="_blank" rel="noreferrer">Erin's Github</a>
            <Link to="/projects" >My Projects</Link>
        </nav>
    )
}
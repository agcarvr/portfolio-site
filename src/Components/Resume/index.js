import resume from '../../images/resume.png';
import styles from './resume.module.css';
import {BiArrowToBottom} from 'react-icons/bi';

export default function Resume(){
    return(
        <div className={styles.container}>
            <div className={styles.skills}>
                <h4>Skills:</h4>
                <p><b>Backend:</b> Python, Linux, Django, PostgreSQL, Node.js, MongoDB, Express</p>
                <p><b>Frontend:</b> React.js, HTML5, CSS, JavaScript, Sass, Django</p>
            </div>
            <img className={styles.resume} src={resume}></img>
            <a href="https://docs.google.com/document/d/1oY4xjBBTKlIopDQxMfc48GC-JYhmUhsEGy_QehBBRhU/edit?usp=sharing" target="_blank" rel="noreferrer" className={styles.docsbutton} >View or Download in Google Docs<BiArrowToBottom className={styles.arrowicon}/></a>
        </div>
    )
}
import styles from './homepage.module.css';
import {GrReactjs} from 'react-icons/gr'
import {DiMongodb} from 'react-icons/di';

export default function HomePage(){
    return (
        <div className={styles.homebody}>
            <center className={styles.textbody}>
            <h1 className={styles.header}>Hello!</h1>
            <h3>I'm Erin Carver,</h3>
            <h3>a full stack engineer</h3>
            <h3 className={styles.reactstring}> specializing in react {<GrReactjs className={styles.reacticon}/>}</h3>
            <h3 className={styles.mernstring}> and the MERN stack {<DiMongodb className={styles.mongoicon}/>}</h3>
            </center>
        </div>
    )
}
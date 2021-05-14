import styles from './homepage.module.css';
import {GrReactjs} from 'react-icons/gr'
import {DiMongodb} from 'react-icons/di';

export default function HomePage(){
    return (
        <div className={styles.homebody}>
            <center>
            <h1>Welcome To My Portfolio</h1>
            <h3>I'm Erin Carver,</h3>
            <h3>a full stack engineer</h3>
            <h3 className={styles.reactstring}>specializing in react</h3>
            <GrReactjs className={styles.reacticon}/>
            <br></br>
            <br></br>
            <h3 className={styles.mernstring}>and the MERN stack</h3>
            <DiMongodb className={styles.mongoicon}/>
            </center>
        </div>
    )
}
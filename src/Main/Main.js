import styles from '../styles/Main.module.scss'
import { Link } from 'react-router-dom'

export const Main = () => {
    const id = 1;
    return (
        <div className={styles.main}>
            <Link to={`/women/${id}`}><button>Women</button></Link>
        </div>
    )
}
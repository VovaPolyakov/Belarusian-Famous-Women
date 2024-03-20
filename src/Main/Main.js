import styles from '../styles/Main.module.scss'
import { Link } from 'react-router-dom'
import data from '../assets/data/data'

export const Main = () => {
    const id = 1;
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>ЖЕНЦИНЫ В ИСТОРИИ БЕЛАРУСИ</h1>
                <div className={styles.main_row}>
                    <div className={styles.main_cards}>
                        {data.map((item) => {
                            return(
                                <Link to={`/women/${item.id}`}>
                                    <div key={item.id} className={styles.card}>
                                        <img src={item.img}></img>
                                        <p>{item.name}</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
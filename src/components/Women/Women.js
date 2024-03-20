import styles from '../../styles/Women.module.scss'
import { useState } from 'react'
import data from '../../assets/data/data'
import { useParams } from 'react-router-dom'

export const Women = () => {
    const {id} = useParams();
    const women = data.filter((woman) => woman.id == id);
    return (
        <div className={styles.women}>
            <div className={styles.container}>
                <div className={styles.woman_main}>
                    <div className={styles.img}>
                        <img src={women[0].img}></img>
                    </div>
                    <div className={styles.main_text}>
                        <h2>{women[0].name}</h2>
                        <p>{women[0].year}</p>
                        <p>
                            {women[0].text[0].main}
                        </p>
                    </div>
                </div>
                <div className={styles.women_second}>
                    <h3>Биография</h3>
                    <div>
                        {women[0].text[1].bio}
                    </div>
                </div>
            </div>
        </div>
    )
}
import styles from '../../styles/Women.module.scss'
import { useState } from 'react'
import { data } from '../../assets/data/data'
import { useParams } from 'react-router-dom'

export const Women = () => {
    const {id} = useParams();
    const women = data.filter((woman) => woman.id == id);
    return (
        <div className={styles.women}>
            <p>{women[0].name}</p>
        </div>
    )
}
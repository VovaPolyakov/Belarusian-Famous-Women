import styles from '../../styles/Header.module.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
    return(
        <div className={styles.header}>
             <div className={styles.container}>
                <div className={styles.header_row}>
                    <div className={styles.header_button}>
                        <Link to='/'><i class="fa fa-home" style={{fontSize:"36px",color:"black"}}></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
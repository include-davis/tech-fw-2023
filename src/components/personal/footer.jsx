import React from 'react'
import styles from '@/styles/components/personal/about.module.scss'
import { FiMail } from 'react-icons/fi';

export default function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.footerIcons}>
                <FiMail/>
            </div>
            
        </div>
    )
}
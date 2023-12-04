import styles from '@/styles/components/personal/navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link href={'https://includedavis.com/'}>
                <Image className={styles.logo} width={40} height={40} src={'/personal/logo.png'}/>
            </Link>
            <div className={styles.links}>
                <Link className={styles.link} href={'https://www.keenavasiloff.com/'} target='_blank'>Personal Website</Link>
                <Link className={styles.link} href={'https://www.keenavasiloff.com/projects.html'}>Projects</Link>
            </div>
        </nav>
    )
}
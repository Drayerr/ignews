import { SignInButton } from '../SignInButton'
import Image from 'next/image'
import styles from './styles.module.scss'
import logo from '../../images/logo.svg'

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src={logo} alt="ig.news" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a href="/posts">Posts</a>
                </nav>

                <SignInButton/>
            </div>
        </header>
    )
}
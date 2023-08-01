import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
type Props = {}

const Header = (props: Props) => {
    return (
        <header className={styles.wrapper}>
            <Link href='blog'>blog</Link>
            <Link href='about' >about</Link>
            <Link href='/'>welcome</Link>
        </header>
    )
}

export default Header
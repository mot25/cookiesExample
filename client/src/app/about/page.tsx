import React from 'react'
import styles from './about.module.scss'
console.log("🚀 ~ file: page.tsx:3 ~ styles:", styles)
type Props = {}

const page = (props: Props) => {
    return (
        <div className={styles.title}>About page </div>
    )
}

export default page
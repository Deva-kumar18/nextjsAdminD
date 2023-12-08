import Link from 'next/link'
import React from 'react'
import styles from './MenuLinks.module.css'

const MenuLinks = ({item}) => {
  return (
    <Link href={item.path} className={styles.container}>
        {item.icon}
    {item.title}</Link>
  )
}

export default MenuLinks
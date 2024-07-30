import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hello, fellow Devs! Discover my stories and creative ideas!</b>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amer sagnoa argandfoga </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint voluptate aspernatur incidunt ex, dolor quis natus quas. Aspernatur voluptatem repellendus, consectetur expedita corrupti, a aut maiores at possimus veritatis mollitia?
          </p>
          <button className={styles.button} >Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
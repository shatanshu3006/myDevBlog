'use client'
import React from 'react'
import styles from "./themeToggle.module.css"
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

export const ThemeToggle = () => {

  const {toggle,theme}=useContext(ThemeContext)


  return (
    <div className={styles.container} onClick={toggle} style={
      theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
    }>
      <Image src='/moon.png' alt="" width={14} height={14}/>
      {/* now when we have to click on them, the circle/ball will move and show the changing action */}
      <div className={styles.ball} style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" ,transition: "left 0.5s, background 0.5s"}
            : { right: 1, background: "white", transition: "right 0.5s, background 0.5s" }
        }></div>
      <Image src='/sun.png' alt="" width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle

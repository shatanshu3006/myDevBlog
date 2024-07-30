"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
//import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Comments = () => {
    const status="authenticated";


  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status==="authenticated" ? (
            <div className={styles.write}>
                <textarea placeholder="Write a comment... " className={styles.input}/>
                <button className={styles.button}>Comment</button>
            </div>
        ) : (
            <Link href='/login' >Login to write a comment!</Link>
        )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>1.01.2023</span>
                    </div>
                </div>
                <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore dolorum maiores quisquam, ullam voluptatum placeat? Minima vitae ab, non porro quia architecto a libero similique sit consequatur dolor corrupti ad!</p>
            
            </div>

            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>1.01.2023</span>
                    </div>
                </div>
                <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore dolorum maiores quisquam, ullam voluptatum placeat? Minima vitae ab, non porro quia architecto a libero similique sit consequatur dolor corrupti ad!</p>
            
            </div>

            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>1.01.2023</span>
                    </div>
                </div>
                <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore dolorum maiores quisquam, ullam voluptatum placeat? Minima vitae ab, non porro quia architecto a libero similique sit consequatur dolor corrupti ad!</p>
            
            </div>

        </div>
      
    </div>
  )
}

export default Comments

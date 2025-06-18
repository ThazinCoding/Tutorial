"use client";
import styles from './Example13.module.css';

export default function UserProfile(){
    return(
        <div>
            <h1 ckassName={styles.h1}>User Profile</h1>
            <h1 ckassName={styles.name}>Name:Mg Mg</h1>
            <input className={styles.userInput}/>
        </div>
    );
}
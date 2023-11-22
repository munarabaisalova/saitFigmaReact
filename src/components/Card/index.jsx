import React from "react";
import styles from './Card.module.css'

export const Card =()=>{
    return(
        <div className={styles.card}>
<h1 className={styles.text1}>Kshitij Choudhary</h1>
<h2 className={styles.text2}>UI/UX Designer & Developer</h2>
<div className={styles.block}>
    <a href="">twitter.com/howbadeh</a>
    <a href="">dribbble.com/itskshitij</a>
    <a href="">kshitij.ws</a>
</div>
<a className={styles.text3} href="">If you like what I am doing , you can support me by following me on twitter</a>
 </div>

        
       
    )
}
import React from "react";
import styles4 from './Romb.module.css'


export const Romb=()=>{
return(
    <div>
         <div className={styles4.restApp1}>
        <div className={styles4.red}><ul><li>Physical Health</li></ul></div>
            <div className={styles4.red1}><ul><li>Mental Health</li></ul></div>
            <img className={styles4.red2} src="/img1/joanna-kosinska-340748.png" alt="" />
            <div className={styles4.red3}><ul><li>Gymnastics</li></ul></div>
            <div className={styles4.red4}><ul><li>Crossfit</li></ul></div>
            <div className={styles4.red5}><ul><li>Aerobics</li></ul></div>

        </div>
    </div>
)
}
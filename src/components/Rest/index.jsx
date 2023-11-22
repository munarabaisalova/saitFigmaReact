import React from "react";
import styles3 from './Rest.module.css'


export const Rest=()=>{
    return(
       <div>
         <div className={styles3.rest}>
            <h1 className={styles3.restText}>ABOUT US</h1>
            <p className={styles3.restp}>We want to help you thrive! Whether you are just looking for someone to talk to, or are struggling with a mental wellness issue we’re here to help.  Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>

        </div>
        <div className={styles3.restApp}>
        <div className={styles3.red}><ul><li>Weight Lifting</li></ul></div>
            <div className={styles3.red1}><ul><li>Running  & Spinning</li></ul></div>
            <div className={styles3.red2}><ul><li>Pumping Iron</li></ul></div>
            <div className={styles3.red3}><ul><li>Pumping Iron</li></ul></div>

        </div>
       
       </div>
    )
}
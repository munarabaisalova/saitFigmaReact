import React from "react";
import styles2 from './Servis.module.css'


export const Servis=()=>{
    return(
        <div className={styles2.servis}>
            <div className={styles2.serv}>
                <h1 className={styles2.servText}>Why Thrive?</h1>
                <p className={styles2.tex}>Want to improve your well-being from the comfort of your own couch? Are you having trouble finding the right therapist?  Here at ThriveTalk, our licensed therapists provide the same quality care you would get in office from anywhere you can access your laptop or mobile phone. Become your best self with ThriveTalk.  Start therapy now with a licensed therapist!</p>
            </div>
            <img className={styles2.imges1} src="img1/chris.png" alt="" />

        </div>
    )
}
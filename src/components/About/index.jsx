import React from "react";
import styles1 from './About.module.css';
// import Images from './img1/Rectangle 3.1 png'


export const About=()=>{
    return(
        <div className={styles1.about}>
            <div className={styles1.homs}>

                <p className={styles1.homs1}>Thrivetalk</p>
                <div className={styles1.hom}>
                <a className={styles1.homs2} href="">Home</a>  
                <a className={styles1.homs2} href="">About</a> 
                <a className={styles1.homs2} href="">Services </a> 
                <a className={styles1.homs2} href="">Blog</a> 
                </div>
                <button className={styles1.btn}>CONTACT US</button>                     
            </div>
<div className={styles1.aboutBl}>
<div>
    <div>
        <h1 className={styles1.zero}>HELPING YOU THRIVE  <br />
        IN ALL AREAS OF LIFE</h1>
        <p className={styles1.zero2}>Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
        </div>
        <div>
            <button className={styles1.zeroBtn}>WHO AM I</button>
            <button className={styles1.zeroBtn}>WHO AM I</button>

        </div>

</div>

    <img className={styles1.imgz} src="/img1/Mask Group.png" alt="" />



</div>

       
       
        </div>
    )
}
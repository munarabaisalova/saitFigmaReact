import React from "react";
import style3 from "./Footer.module.css"

export const Footer=()=>{
    return(
        <div>
            <div className={style3.foot}>
            <img src="/img1/woumen.png" alt="" />
                <div className={style3.footIn}>
                    <div className={style3.footInfo}>
                        <h1>SOME INFO</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula.</p>
                    </div>
                    <div className={style3.footInfo}>
                        <h1>ENFOLD HEALTH</h1>
                        <p>Main Street 1, Olcott
Buffalo, United States

+555 283 784 333
</p>
<span>office@enfold-health.com</span>
                    </div>
                    <div className={style3.footInfo}>
                        <h1>OFFICE HOURS</h1>
                        <p>Mo-Fr: 8:00-19:00
Sa: 8:00-14:00
Su: closed</p>
                    </div>
                </div>
                
            </div>
<div className={style3.bluefoot}></div>
        </div>
    )
}
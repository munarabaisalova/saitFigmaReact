import React from "react";
import style2 from "./Laout.module.css"

export const Laout=()=>{
    return(
        <div>
            <div className={style2.laout}>
                <img  src="img1/img.png" alt="" />
                <div className={style2.lao}>
<h2>YOU SHOULD ALSO KNOW</h2>
<p>MDD affects more than 16.1 million American adults, or about 6.7%of the U.S. population age 18 and older in a given year. We at <span>ThriveTalk</span> can help you.</p>
<h3>GET HELP NOW</h3>

                </div>
            </div>

            <div className={style2.laout1}>
                
                <div className={style2.lao1}>
<h2>CONTACT US</h2>
<h1>Ready. Set. Smile</h1>
<p>MDD affects more than 16.1 million American adults, or about 6.7%of the U.S. population age 18 and older in a given year. We at <span>ThriveTalk</span> can help you.</p>
<h3>GET HELP NOW</h3>

                </div>
                <img  src="img1/cer.png" alt="" />
            </div>

        </div>
    )
}
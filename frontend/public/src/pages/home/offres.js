import React from "react";

import offres1 from '../../media/home/offres1.webp'
import offres2 from '../../media/home/offres2.webp'
import offres3 from '../../media/home/offres3.webp'

export default function Offres()
{
    return(
        <section className="section">
            <div className="container">
                <h2>We believe in:</h2>
                <div className="offres1">
                    <div className="content">
                        <img src={offres1} alt="" />
                        <div className="textanim"><p>COMPREHENSIVE<br />SUSTAINABILITY</p></div>
                        <div className="underline1">
                        </div>
                    </div>
                </div>
                <div className="offres2">
                    <div className="content">
                        <img src={offres2} alt="" />
                        <div className="textanim"><p>COMPREHENSIVE<br />SUSTAINABILITY</p></div>
                        <div className="underline2">
                        </div>
                    </div>
                </div>
                <div className="offres3">
                    <div className="content">
                        <img src={offres3} alt="" />
                        <div className="textanim"><p>COMPREHENSIVE<br />SUSTAINABILITY</p></div>
                        <div className="underline3">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
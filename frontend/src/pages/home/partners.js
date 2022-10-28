import  React from 'react';

import partner1 from '../../media/home/partner1.webp'
import partner2 from '../../media/home/partner2.webp'
import partner3 from '../../media/home/partner3.webp'
import partner4 from '../../media/home/partner4.webp'

export default function Partners()
{
    return(
        <section className="section">
            <div className="partners">
                <div className="partners__box">
                    
                </div>
                <div className="partners__box">
                    <img src={partner1} alt="" />
                </div>
                <div className="partners__box">
                    <img src={partner2} alt="" />
                </div>
                <div className="partners__box">
                    <img src={partner3} alt="" />
                </div>
                <div className="partners__box">
                    <img src={partner4} alt="" />
                </div>
            </div>
        </section>
    )
}
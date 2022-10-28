import React from 'react';
import {Link} from "react-router-dom"

const Hero = () =>
{
    return <section className='hero'>
        <div className="hero__container">
            <div className="arr"></div>
            <div className="hero__textbox">
			    <h1>For Life On Earth</h1>
                <div className="btn"><button className="btn"><Link to='/shop'>shop all</Link></button></div>
            </div>
            <div className="arr"></div>
		</div>
    </section>
}

export default Hero;
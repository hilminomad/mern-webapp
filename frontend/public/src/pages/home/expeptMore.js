import React from "react";
import { Link } from "react-router-dom";

export default function ExpectMore()
{
    return(
        <section className="expectMore section">
            <div className="container">
                <h2>Expect More From Your Furniture</h2>
                <h4>From sustainable production to closed-loop solutions – and every lounging session in-between.</h4>
                <div className="btn"><button><Link to="/sustainablty">learn more</Link></button></div>
            </div>
        </section>
    )
}

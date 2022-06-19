import React from 'react';
import style from './Sass/style.scss';

function Hero() {
    return(
        <div className="hero--wrapper">
            <div className="text--wrapper">
                <h1 className="heading">
                    More than just shorter links
                </h1>
                <p className="desc">
                    Build your brand's recognition and get detailed insights on how your links are performing.
                </p>

                <a className="start--btn">
                    Get Started
                </a>
            </div>

            <div className="hero--img--container">
                <img src="../images/illustration-working.svg" alt="" />
            </div>
        </div>
    )
}

export default Hero;
import React from 'react';
import style from './Sass/style.scss';

function Statistics() {
    return(
        <div className='statistics--container'>
            <div className="stats--container">
                <h2 className="title">Advanced Statistics</h2>
                <p className="info">
                    Track how your links are performing across the web with our advanced statistics dashboard.
                </p>
            </div>

            <div className="feature--wrapper">
                <div className="feature--card">
                    <div className="stat--logo">
                        <img src="../images/icon-brand-recognition.svg" alt="" />
                    </div> 
                    <h3 className="caption">Brand Recognition</h3>
                    <p className="about">
                        Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>
                <div className="line"></div>

                <div className="feature--card">
                    <div className="stat--logo">
                        <img src="../images/icon-detailed-records.svg" alt="" />
                    </div> 
                    <h3 className="caption">Detailed Records</h3>
                    <p className="about">
                        Gain insights who is clicking your links. Knowing when and where people engage with your content helps inform better decisions. 
                    </p>
                </div>

                <div className="line"></div>

                <div className="feature--card">
                    <div className="stat--logo">
                        <img src="../images/icon-fully-customizable.svg" alt="" />
                    </div> 
                    <h3 className="caption">Fully Customizable</h3>
                    <p className="about">
                        Improve brand awareness and content discoverability through customizability links, superchargin audience engagement.
                    </p>
                </div>



            </div>
        </div>
    )
}

export default Statistics;
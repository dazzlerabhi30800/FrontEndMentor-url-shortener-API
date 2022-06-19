import React from 'react';
import style from './Sass/style.scss';

function ShortenLink() {
    return (
        <div className='shorten--link--wrapper'>
            <div className="shorten--link--container">
                <div className="input--wrapper">
                    <input type="text" placeholder='Shorten a link here' />
                    <span className="error">Please add a link</span>
                </div>
                <button type="submit" className="shorten--btn">Shorten It!</button>
            </div>

            <div className="shorten--link--list--wrapper">
                <div className="input--link">Input Link</div>
                <div className="shorted--link--wrapper">
                    <a href="#" className="short--link">Shorted Link</a>
                    <button className="copy--link">Copy</button>
                </div>
            </div>
        </div>
    )
}

export default ShortenLink;
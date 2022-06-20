import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import style from './Sass/style.scss';
import ShortLinkCard from './ShortLinkCard';


function ShortenLink({ setShortLinks, shortLinks }) {
    const [inputText, setInputText] = useState('')
    const [showError, setShowError] = useState(true);

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (inputText != '') {
            setShowError(prevState => prevState = true)
            setShortLinks([
                ...shortLinks, { inputUrl: inputText, copied :false, id: nanoid(), shortedUrl: 'best we are the best'},
            ])
            setInputText('');
        }
        else {
            setShowError(prevState => prevState = false);
        }
    }

    const shortenCardComp = shortLinks.map((shortLink, index) => {
        return(
             <ShortLinkCard
                item={shortLink}
                key={index}
                setShortLinks={setShortLinks}
                shortLink={shortLink}
                shortLinks={shortLinks}
              />
        )
    })


    return (
        <div className='shorten--link--wrapper'>
            <form className="shorten--link--container">
                <div className="input--wrapper">
                    <input value={inputText} onChange={handleChange} type="text" className={showError ? 'short-input' : 'short-input show'} placeholder='Shorten a link here' />
                    <span className={showError ? 'error' : 'error show'}>Please add a link</span>
                </div>
                <button onClick={handleSubmit} type="submit" className="shorten--btn">Shorten It!</button>
            </form>

            <div className="shorten--link--list--wrapper"> 
               {shortenCardComp}
            </div>
        </div>
    )
}

export default ShortenLink;
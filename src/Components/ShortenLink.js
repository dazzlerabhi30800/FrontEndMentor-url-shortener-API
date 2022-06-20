import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import style from './Sass/style.scss';
import ShortLinkCard from './ShortLinkCard';
import axios from "axios";


function ShortenLink({ setShortLinks, shortLinks }) {
    const [inputText, setInputText] = useState('')
    const [showError, setShowError] = useState(true);
    const [shortLink, setShortLink] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    useEffect(() => {
        if(inputText.length) {
            handleShortenUrl();
        }
    }, [inputText]);

    const handleShortenUrl = async () => {
        try {
            setLoading(true);
            const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputText}`)
            setShortLink(res.data.result.full_short_link);
            // console.log(shortLink);
        }
        catch(error) {

        }
        finally {

        }
    } 


    function handleSubmit(e) {
        e.preventDefault();
        const string = '^https://'
        const regexp = new RegExp(string);
        if (inputText != '' && regexp.test(inputText)) {
            setShowError(prevState => prevState = true)
            handleShortenUrl();
            if(shortLink.length) {
                setShortLinks([
                    ...shortLinks, { inputUrl: inputText, copied :false, id: nanoid(), shortedUrl: shortLink},
                ])
            }
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
                    <span className={showError ? 'error' : 'error show'}>Please add a valid link</span>
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
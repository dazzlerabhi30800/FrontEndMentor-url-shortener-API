import React, { useState } from 'react';
import style from './Sass/style.scss';

function ShortLinkCard({ item, setShortLinks, shortLinks, shortLink }) {

    // const [copy, setCopy] = useState(false);

    const handleCopy = () => {
       setShortLinks(shortLinks.map((link) => {
        if(link.id === item.id) {
            if(!link.copy) {
                navigator.clipboard.writeText(link.id);
                return {
                    ...link, copy: true , 
                }
            }
            else {
                navigator.clipboard.writeText('You uncopied the url');
                return{
                    ...link, copy: false,
                }
            }
           
        }
        return link;
       })) 
    }

    return (
        <div className="shorted--link--card">
            <div className="input--link">{item.inputUrl}</div>
            <div className="shorted--link--wrapper">
                <a id='short--url' className="short--link">{item.id}</a>
                <button onClick={handleCopy} className={shortLink.copy ? 'copy--link copy' : 'copy--link'}>{shortLink.copy ? 'Copied' : 'Copy'}</button>
            </div>
        </div>
    )
}

export default ShortLinkCard;
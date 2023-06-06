import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import background from '../Images/map.png'

export default function Contact(){
    const styles = {backgroundImage: `url(${background})` }  

    return(
        <main className="contact--box" style={styles}>
            <a href="https://twitter.com/brozef_">
                <div className="contact--box-container">
                    <FontAwesomeIcon icon={faTwitter} />
                    Stay in Touch
                </div>
            </a>
        </main>
    )
}
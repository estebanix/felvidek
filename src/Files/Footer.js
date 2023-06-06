import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSteam, faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <footer className="footer--box">
            <a href="https://store.steampowered.com/app/2299900/Felvidek/">
            <FontAwesomeIcon icon={faSteam} />
            </a>
            <a href="https://twitter.com/brozef_">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/brozef/">
            <FontAwesomeIcon icon={faInstagram} />   
            </a>
        </footer>
    )
}
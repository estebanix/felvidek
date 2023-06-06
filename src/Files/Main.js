import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSteam } from '@fortawesome/free-brands-svg-icons'
import Footer from './Footer';
import About from './About';
import Trailer from './Trailer';
import Abouttitle from "./Abouttitle"
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'
import background from '../Images/map.png' 

export default function Main() {
  useEffect(() => {
    AOS.init({duration: 3000});
    }, [])

  const styles = {backgroundImage: `url(${background})` }  

  return (
    <main className="main--content">
    <div className="hero--main">
        <div className="hero--image" style={styles}></div>
        <div className="hero--content">
          <h1>Felvidek</h1>
          <h3>Explore the Upper Land</h3>
          <h2>Coming September 2023</h2>
          <button className="steam--btn">
            <a href="https://store.steampowered.com/app/2299900/Felvidek/">
              Available <FontAwesomeIcon icon={faSteam} />
            </a>
          </button>
        </div>
    </div>


      <div className='about--container'>
      Sometimes fate doesn't ask. Sometimes you just have to take it into your own hands and not look back...
      </div>
      <About />
      <Abouttitle />
      <Trailer />
      <Contact />
      <Footer />
    </main>
  );
}


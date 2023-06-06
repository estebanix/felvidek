import React, {useEffect, useState} from 'react';
import CallAbout from './CallAbout';
import Background from './Background';
import AOS from 'aos';
import 'aos/dist/aos.css'
import img1 from '../Images/felvidekgif3.gif' 
import img2 from '../Images/felvidekgif1.gif'
import img3 from '../Images/felvidekgif2.gif' 


export default function About() {
  useEffect(() => {
    AOS.init({duration: 2500});
    }, [])

const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

const trueWin = (<>
    <div className='call-about-left'>
          <h3>Experience a Unique Story</h3>
          <p>Progress the linear story by meeting interesting characters, both loyal to the king and those who incline to heresy. Complete side quests to gain unique gifts</p>
        </div>
        <div>
          <img src={img1} />
        </div>
</>)

const falseWin = (<>
    <div>
            <img src={img1} />
          </div>
      <div className='call-about-left'>
            <h3>Experience a Unique Story</h3>
            <p>Progress the linear story by meeting interesting characters, both loyal to the king and those who incline to heresy. Complete side quests to gain unique gifts</p>
      </div>
</>)

  return (
    <main data-aos="fade-up" className="about--box">
      <CallAbout class={'call-about push-down'}>
        <div className='call-about-right'>
          <h3>Explore the Land</h3>
          <p>Traverse the illustrated 2D isometric world to see new locations full of surreal atmosphere. Unveil secret doors and hidden passageways
          </p>
        </div>
        <div>
        <img src={img2} />
        </div>
      </CallAbout>

      <CallAbout class={'call-about'}>
      {windowWidth >= 992 ? falseWin : trueWin}
      </CallAbout>

      <CallAbout class={'call-about'}>
        <div className='call-about-right'>
          <h3>Turn Based Combat System</h3>
          <p>Fight your way through 20+ different enemy types in turn-based RPG combat. Gather gear and supplies to become a more effective fighter
          </p>
        </div>
        <div>
          <img src={img3} />
        </div>
      </CallAbout>
    </main>
  );
}
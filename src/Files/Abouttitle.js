import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function Abouttitle(props) {
 
    useEffect(() => {
    AOS.init({duration: 1500});
    }, [])

  return (
    <main data-aos="fade-up" className='abouttitle--box'>
      <h3>Find out what unlikely events take place in this alternate history region of Slovak Highlands,
         for Ottoman conquest in the far away lands may have unforeseen consequences even on our corner of Europe.
         It's now up to Paul, a fair knight with alcohol problems,
        to gather a party and stop those who conspire against the king.</h3>
    </main>
  );
}
import React from 'react';
import Navbar from './Navbar';
import Intro from './Intro';
import FAQ from './FAQ';
import Footer from './Footer';
import Sponsers from './Sponsers';
import Eschd from './EventScheduler';
import Esd1 from './Esd1';
import Extra from './Extra';
// import Help from './Help';
import Venue from './Venue';
import Gallery from './Gallery';
// import CardCarousel from './CardCarousel';
function Home() {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Extra/>
        <Gallery/>
        <Eschd />
        <div className="profilecard mx-2 p-2">
          <Esd1/>
        </div>
        <Sponsers />
        <Venue/>
        <FAQ/>
        {/* <Help/> */}
        <Footer/>
    </div>
 )
}

export default Home
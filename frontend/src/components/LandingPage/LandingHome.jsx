import React, { useEffect } from 'react';
import About from '../Footer/About';
import Footer from '../Footer/Footer';
import TrendingVideos from './TrendingVideos';
import LikedVideos from './LikedVideos';
import LandingPage from './LandingPage';
import FAQ from './FAQ';
import LandingNavbar from '../NavBars/LandingNavBar';

const LandingHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{width :'100%'}}>
    <header>
        <LandingNavbar/>
    </header>
      <section>
        <LandingPage/>
      </section>
      <section>
        <TrendingVideos/>
      </section>
      <section>
        <LikedVideos/>
      </section>
     
      <FAQ/>
      {/* <section className="my-5">
        <About />
      </section> */}
    <section>
        <Footer/>
    </section>
    </div>
  );
};

export default LandingHome;

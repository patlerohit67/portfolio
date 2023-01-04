import React from 'react';

import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2';
import AboutContant from '../Components/AboutContant';

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="ABOUT." text="Im a friendly Front-End Developer." />
      <AboutContant />
      <Footer />
    </div>
  )
}

export default About
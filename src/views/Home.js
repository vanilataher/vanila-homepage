import React, { Component } from 'react';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import CTA from '../components/CTA/CTA';
import Feedback from '../components/Feedback/Feedback';
import Team from '../components/Team/Team';
import Projects from '../components/Projects/Projects';
import Tech from '../components/Tech/Tech';
import Social from '../components/Social/Social';
import Footer from '../components/Footer/Footer';
import '../../public/styles/home.css';

import SEO from '../components/seo';
import LazyLoad from 'react-lazyload';
export default class App extends Component {
  render() {
    return (
      <div className="mainWrapperInner">
        <LazyLoad>
          <Header />
        </LazyLoad>
        <LazyLoad>
          <SEO url="home" />
        </LazyLoad>
        <LazyLoad>
          <About />
        </LazyLoad>
        <LazyLoad>
          <Projects />
        </LazyLoad>
        <LazyLoad>
          <CTA />
        </LazyLoad>
        <LazyLoad>
          <Team />
        </LazyLoad>
        <LazyLoad>
          <Feedback />
        </LazyLoad>
        <LazyLoad>
          <Tech />
        </LazyLoad>
        <LazyLoad>
          <Social />
        </LazyLoad>
        <LazyLoad>
          <Footer />
        </LazyLoad>
      </div>
    );
  }
}

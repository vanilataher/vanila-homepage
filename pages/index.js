import React, { Component } from 'react';
import dynamic from 'next/dynamic';

import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import CTA from '@/components/CTA/CTA';
import Feedback from '@/components/Feedback/Feedback';
import Team from '@/components/Team/Team';
import Projects from '@/components/Projects/Projects';
import Tech from '@/components/Tech/Tech';
import Social from '@/components/Social/Social';
import Footer from '@/components/Footer/Footer';
import SEO from '@/components/seo';
import LazyLoad from 'react-lazyload';

// non-react and non-nextjs script
const Reveal = dynamic(() => import('@/components/Reveal'), {
  ssr: false,
});

export default class App extends Component {
  render() {
    return (
      <div className="mainWrapperInner">
        <Reveal />
        <SEO url="home" />
        <LazyLoad>
          <Header />
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

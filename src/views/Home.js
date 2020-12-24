import React, {Component} from 'react';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import CTA from '../components/CTA/CTA';
import Feedback from '../components/Feedback/Feedback';
import Team from '../components/Team/Team';
import Projects from '../components/Projects/Projects';
import Tech from '../components/Tech/Tech';
import Social from '../components/Social/Social';
import Footer from '../components/Footer/Footer';
import '../styles/home.css'
import ScrollReveal from 'scrollreveal';
import SEO from '../components/seo';

export default class App extends Component {
    constructor(){
        super();
    }
    componentDidMount(){
      var sr = new ScrollReveal();
      sr.reveal('.navbar-default', {
        origin: 'top',
        duration: 500
      });

      sr.reveal('.enterLeft-header', {
        origin: 'left',
        distance: '100%',
        duration: 1000,
        scale: 1
      },80);

      sr.reveal('.enterRight-header', {
        origin: 'right',
        distance: '100%',
        duration: 1000,
        scale: 1
      });

      sr.reveal('.enterRight-dev', {
        origin: 'right',
        distance: '100%',
        duration: 1000,
        scale: 1
      },80);

      sr.reveal('.enterLeft-dev', {
        origin: 'left',
        distance: '100%',
        duration: 1000,
        scale: 1
      },80);

      sr.reveal('.enterRight-des', {
        origin: 'right',
        distance: '100%',
        duration: 1000,
        scale: 1
      },80);

      sr.reveal('.enterLeft-des', {
        origin: 'left',
        distance: '100%',
        duration: 1000,
        scale: 1
      },80);

      sr.reveal('.enterRight-js', {
        origin: 'right',
        distance: '100%',
        duration: 1000,
        scale: 1
      },80);

      sr.reveal('.enterLeft-js', {
        origin: 'left',
        distance: '100%',
        duration: 1000,
        scale: 1
      },80);

      sr.reveal('.enterCta', {
        duration: 1000,
          delay:500
      },80);

      sr.reveal('.enterLeft-cta', {
        origin: 'left',
        distance: '100%',
        duration: 1000,
        scale: 1
      });

      sr.reveal('.enterRight-cta', {
        origin: 'right',
        distance: '100%',
        duration: 1000,
        scale: 1
      });

      sr.reveal('.enterLeft-feedback', {
        origin: 'left',
        distance: '100%',
        duration: 1000,
        scale: 1,
        delay: 700
      },200);

      sr.reveal('.enterLeft-f', {
        origin: 'left',
        distance: '100%',
        duration: 1000,
        scale: 1
      },80);

      sr.reveal('.teamBoxReveal',  {
        duration: 1000,
        scale: 0.1
      },250);

      sr.reveal('.enterLeft-t', {
        origin: 'left',
        distance: '100%',
        duration: 1000,
        scale: 1
      },80);

      sr.reveal('.rowTech li:nth-child(odd)',  {
        origin: 'right',
        distance: '100%',
        duration: 1000,
        scale: 0.5,
        delay:  500
      },250);

      sr.reveal('.rowTech li:nth-child(even)',  {
        origin: 'left',
        distance: '100%',
        duration: 1000,
        scale: 0.5,
        delay:  500
      },250);

      sr.reveal('.enterLeft-social', {
        origin: 'left',
        distance: '100%',
        duration: 1000,
        scale: 1
      },80);

      sr.reveal('.socialBoxReveal',  {
        duration: 1000,
        scale: 0.1
      },250);

      sr.reveal('.enterFooter', {
        duration: 1000
      },80);

      sr.reveal('.enterProjectLeft', {
        origin: 'left',
        distance: '100%',
        duration: 1000,
        scale: 1
      },80);
      sr.reveal('.enterProjectRight', {
        origin: 'right',
        distance: '100%',
        duration: 1000,
        scale: 1,
        delay:800
      },80);
      sr.reveal('.enterProjectBottom', {
        origin: 'bottom',
        distance: '100%',
        duration: 1000,
        scale: 1,
        delay:400
      },80);


    }
    render() {
        return (
            <div className="mainWrapperInner">
              <Header />
              <SEO url="home" />
              <About />
              <Projects />
              <CTA />
              <Team />
              <Feedback />
              <Tech />
              <Social />
              <Footer />
            </div>
        );
    }
}

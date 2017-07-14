import React, {Component} from 'react';

import Navigation from '../components/Header/Navigation';
import Footer from '../components/Footer/Footer';

import '../../public/styles/home.css'

import ScrollReveal from 'scrollreveal';

export default class Meteor extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
      var audio = document.getElementById("audio");
      audio.volume = 0.1;
      audio.play();
  }
    render() {
        return (
          <div className="aboutMeteorDev">
              <div id="zoomScale" className="headerIntro">
                <audio id="clickSound" src="https://vanila.io/sound/click.ogg"></audio>
                <Navigation />
                <div className="row rowHeader">
                <div className="container">
                  <div className="col-md-7">
                    <h1 className="enterLeft-header">Meteor.js Web & <br/>Mobile App Development</h1>
                    <h2 className="enterLeft-header">Do you need professional service with low cost and fast turnaround? Check five main advantages of technology we use.</h2>
                    <ul className="enterLeft-header meteorAdv">
                       <li><img src={require('../../public/img/homeAssets/Watchclock.png')} alt="Time"/>MVP in 4-5 weeks</li>
                       <li><img src={require('../../public/img/homeAssets/Dollarbag.png')} alt="Money"/>Cut development cost by ~40%</li>
                       <li><img src={require('../../public/img/homeAssets/iPad.png')} alt="Cross Platform"/> Cross-Platform, IOS, Android, Desktop</li>
                       <li><img src={require('../../public/img/homeAssets/Datatransfers.png')} alt="Realtime"/>RealTime & Scalability</li>
                       <li><img src={require('../../public/img/homeAssets/meteor-icon.png')} alt="Meteor"/>Powered by Meteor.js</li>
                    </ul>
                    <div className="buttonGroup enterLeft-header">
                      <a href="#contact" className="btn btn-lg btn-primary btnGetStarted" id="button" onClick={this.onClickPlay}>Get started</a>
                    </div>
                  </div>
                  <div className="col-md-5"><img className="enterRight-header" src={require('../../public/img/homeAssets/meteor-graphics.png')} /></div>
                </div>
                </div>
              </div>
              <div className="aboutAppDev">
                <div className="container">
                  <div className="col-md-6 aboutAppDev-txt">
                    <h2 className="enterLeft-dev"><strong>What is Meteor.js?</strong></h2>
                    <p className="enterLeft-dev">Meteor.js is an open source platform that allows for mobile and web apps to be built in a fraction of the time.
                      Using a single language, it combines different elements to ensure that your app is built faster, and ready for multiple platforms.
                      Meteor.js is the future of app development, with a robust platform that allows for faster development and a higher quality output.
                    </p>
                     <br></br>
                    <p className="enterLeft-dev">
                      <blockquote> <em>With Meteor.js, we are able to simplify the development process. This means fewer bugs and a higher quality output. Simply put - Meteor.js is the future of app development. </em></blockquote>
                    </p>
                  </div>
                  <div className="col-md-6 aboutAppDev-img"><img className="enterRight-dev" src={require('../../public/img/homeAssets/partner-logo.png')} /></div>
                </div>
                </div>
                <div className="row rowFeatures rowWhyMeteor">
                  <div className="container">
                      <h2>Why Meteor.js?</h2>
                      <span>Full stack JavaScript for amazing apps</span>
                      <div className="row">
                          <div className="col-md-4">
                              <img src={require('../../public/img/homeAssets/Galaxy.png')} alt="Hybrid mobile apps" />
                              <h3>Universal javascript</h3>
                              <p>The same code runs from the client to the cloud, from packages to database APIs. The same code runs cross browsers and mobile devices via Meteor's unified Isobuild system.</p>
                          </div>
                          <div className="col-md-4">
                              <img src={require('../../public/img/homeAssets/iPhone.png')} alt="Native mobile apps" className="imgIphone" />
                              <h3>Mobile and Web</h3>
                              <p>A great experience both as an installable iOS and Android app, and as a web app that loads on demand.</p>
                          </div>
                          <div className="col-md-4">
                              <img src={require('../../public/img/homeAssets/DBinterface-flat.png')} alt="Fast turnaround time" />
                              <h3>Reactive rendering</h3>
                              <p>Client GUI components provide the look, feel and response of a thick client app using Meteor's Blaze framework or integrating with AngularJS and ReactJS.</p>
                          </div>
                          <div className="col-md-4">
                              <img src={require('../../public/img/homeAssets/Rocket.png')} alt="Hybrid mobile apps" />
                              <h3>Hot deploys</h3>
                              <p>Type one command to push your app into production and update all connected browsers and devices - even if your app is in the App Store.</p>
                          </div>
                          <div className="col-md-4">
                              <img src={require('../../public/img/homeAssets/Browserscript.png')} alt="Native mobile apps" />
                              <h3>Radically less code</h3>
                              <p>Accomplish in 10 lines what would otherwise take 1000, thanks to a reactive programming model that extends all the way from the database to the user's screen.</p>
                          </div>
                          <div className="col-md-4">
                              <img src={require('../../public/img/homeAssets/USBcable.png')} alt="Fast turnaround time" />
                              <h3>Fully integrated and flexible</h3>
                              <p>Meteor's integrated stack means you don't have to spend time managing and integrating components and code. You can focus on building your app. And with Meteor's package system, you can plug in thousands of libraries with additional functionality.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row rowMeteorTech">
                <div className="container">

                    <div className="col-md-12">
                    <h2>Meteor platform technology.</h2>
                    <div className="col-md-4">
                        <h3>Meteor framework</h3>
                        <p>The Meteor framework is a series of 100% open source projects (MIT license) that combine to create a complete JavaScript App Platform for full stack reactive app development on mobile and web. You can find the code, and contribute, via Github.</p>
                        <ul className="meteorAdv">
                            <li>Blaze</li>
                            <li>DDP</li>
                            <li>LiveQuery</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Galaxy service</h3>
                        <p>The Meteor Galaxy service is the best way to operate and scale 'Connected Client' apps built with Meteor. Galaxy provides a great experience to simplify DevOps for apps. </p>
                        <ul className="meteorAdv">
                            <li>Connected client operations</li>
                            <li>Container management</li>
                            <li>Coordinated version updates</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Tools and services</h3>
                        <p>Meteor provides a number of tools and services to simplify the development process. Additionally, the Atmosphere service provides access to 10196 community contributed packages.</p>
                        <ul className="meteorAdv">
                            <li>Meteor tool</li>
                            <li>Developer accounts</li>
                            <li>Atmosphere</li>
                        </ul>
                    </div>


                    </div>

                </div>
                </div>
            <Footer />
          </div>
        );
    }
}

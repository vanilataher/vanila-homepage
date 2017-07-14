import React, {Component} from 'react';

import Navigation from '../components/Header/Navigation';
import Footer from '../components/Footer/Footer';

import '../../public/styles/home.css'


export default class MobileDev extends Component {
    render() {
        return (
          <div className="aboutMobileDev">
            <div id="zoomScale" className="headerIntro">
              <audio id="clickSound" src="https://vanila.io/sound/click.ogg"></audio>
              <Navigation />
              <div className="row rowHeader">
              <div className="container">
                <div className="col-md-7">
                  <h1 className="enterLeft-header">Mobile App Development for <br />IOS and Android</h1>
                  <h2 className="enterLeft-header">If you are looking for right mobile development partner, then you are in right company. Check five main advantages of technology we use.</h2>
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
                <div className="col-md-5"><img className="enterRight-header" src={require('../../public/img/homeAssets/app-dev.png')} /></div>
              </div>
              </div>
            </div>
            <div className="aboutAppDev">
              <div className="container">
                <div className="col-md-6 aboutAppDev-txt">
                  <h2 className="enterLeft-dev"><strong>About mobile app development.</strong></h2>
                  <p className="enterLeft-dev">
                    Vanila specialises in mobile app development for your startup or business. As a leading development team, we have the skills and the expertise
                    to provide you with reliable, powerful and scalable mobile apps for your business. Regardless of the platform that you use.
                  </p>
                   <br />
                   <p className="enterLeft-dev">
                     At Vanila we provide an affordable and professional service, with a fast turnaround time. We use only the best technologies and this means you'll get the most robust, highest quality mobile apps.
                    </p>
                    <br />
                      <p className="enterLeft-dev">
                        We know that you want a team that offers you value for money, great support, and most of all - a product that will help to build and expand your business. Our mobile apps can do that.
                       </p>
                       <br />
                  <p className="enterLeft-dev">
                    <blockquote> <em>We do awesome mobile app development that your customers will love.</em></blockquote>
                  </p>
                </div>
                <div className="col-md-6 aboutAppDev-img"><img className="enterRight-dev" /></div>
              </div>
              </div>
              <div className="aboutAppDev">
                <div className="container">
                  <div className="col-md-6 aboutAppDev-img"><img className="enterRight-dev" /></div>
                  <div className="col-md-6 aboutAppDev-txt">
                    <h2 className="enterLeft-dev"><strong>Technologies we use.</strong></h2>
                    <p className="enterLeft-dev">
                      We use only the best technologies to develop your apps. This includes Meteor.js, a reliable, scalable and efficient platform that results in the best quality web and mobile apps for your business.


                    </p>
                     <br />
                     <p className="enterLeft-dev">
Our mobile app development team is experienced in a range of technologies and platforms, and can put your ideas into a practical, effective result. You don't need to hire separate teams for web, iOS or Android; using Meteor.js, we save you time and money.                      </p>
                      <br />
                        <p className="enterLeft-dev">
                          But there are other development solutions available to business owners too. With a reliable e-commerce solution, you can take your business online and sell your products and services to customers worldwide. Our e-commerce solutions are tailor-made to suit your unique business requirements. Our development solutions are geared toward small, medium and large businesses all over the globe. We help you to grow your business and your profits by creating scalable, robust and visually stunning app solutions. From professional mobile app development to e-commerce solutions and branding, we make sure that your business or start-up has the best possible online presence.

                         </p>
                         <br />
                    <p className="enterLeft-dev">
                      <blockquote> <em>We make modern development technology work for you.</em></blockquote>
                    </p>
                  </div>

                </div>
                </div>
                <div className="row rowFeatures rowWhyMeteor">
                  <div className="container">
                      <h2>Why Work with Us?</h2>
                      <span>At Vanila we provide a professional service and top-notch mobile app development to our customers. Our team consists of front- and backend developers, web developers, graphic designers and software engineers. We can handle any project with ease - big or small. Here's why you should partner with us:</span>
                      <div className="row">
                          <div className="col-md-4">
                              <h3>Hybrid mobile apps</h3>
                              <p>Simplicity for the user.Helpful user interface.</p>
                          </div>
                          <div className="col-md-4">
                              <h3>Native mobile apps</h3>
                              <p>Speed of loading mustn't keep users holding up.</p>
                          </div>
                          <div className="col-md-4">
                              <h3>Fast turnaround time</h3>
                              <p>Ensure the application can work in offline mode.</p>
                          </div>
                          <div className="col-md-4">
                              <h3>Reduced development costs</h3>
                              <p>Simplicity for the user.Helpful user interface.</p>
                          </div>
                          <div className="col-md-4">
                              <h3>Cross platform development</h3>
                              <p>Speed of loading mustn't keep users holding up.</p>
                          </div>
                          <div className="col-md-4">
                              <h3>iOS, Android, Desktop</h3>
                              <p>Ensure the application can work in offline mode.</p>
                          </div>
                          <div className="col-md-4">
                              <h3>RealTime and scalable</h3>
                              <p>Speed of loading mustn't keep users holding up.</p>
                          </div>
                          <div className="col-md-4">
                              <h3>Powered by Meteor.js</h3>
                              <p>Ensure the application can work in offline mode.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <Footer />
          </div>
        );
    }
}

import React, {Component} from 'react';
import '../../public/styles/home.css'


export default class MobileDev extends Component {
    render() {
        return (
          <div>
            <header className="header" id="headerAuto">
            <canvas width='1200' height='480' id="hero-bar"></canvas>
            <div className="row rowHeader">
            <div className="container">
             <h1 data-sr="enter top wait 0.6s over 1.2s">Mobile App Development for <br>IOS and Android</br>
            </h1>
             <div className="col-md-6 colText" data-sr="enter left wait 0.6s over 1s">
                     <p data-sr="enter left wait 0.6s">

            If you are looking for right mobile development partner, then you are in right company. Check five main advantages of technology we use.


                     </p>
                     <div className="landDesc">
                         <ul>
                        <li data-sr="enter left wait 0.8s vFactor 0.1"><img src="img/Watchclock.png" alt="Time"/>MVP in 4-5 weeks</li>
                        <li data-sr="enter left wait 1s vFactor 0.1"><img src="img/Dollarbag.png" alt="Money"/>Cut development cost by ~40%</li>
                        <li data-sr="enter left wait 1.2s vFactor 0.1"><img src="img/iPad.png" alt="Cross Platform"/> Cross-Platform, IOS, Android, Desktop</li>
                        <li data-sr="enter left wait 1.4s vFactor 0.1"><img src="img/Datatransfers.png" alt="Realtime"/>RealTime & Scalability</li>
                        <li data-sr="enter left wait 1.6s vFactor 0.1"><img src="img/meteor.png" alt="Meteor"/>Powered by Meteor.js</li>
                        <li data-sr="enter left wait 1.8s vFactor 0.1"><button className="btn btn-success aContact">Get quote</button>
            </li>
                    </ul>
                     </div>
             </div>
             <div className="col-md-6 colImg">
                <img src="img/mobile-tablet.png" alt="Mobile & Web Development" data-sr="enter right wait 0.6s over 1s 50px"/>
             </div>
            </div>
            </div>
            </header>
            <div id="team" className="row rowAboutApp">
            <div className="container">
            <div className="col-md-8">
                <h2>About mobile app development.</h2>
                <p>
                    Vanila specialises in <strong>mobile app development</strong>  for your startup or business. As a leading development team, we have the skills and the expertise to provide you with reliable, powerful and scalable mobile apps for your business. Regardless of the platform that you use.
                </p>
                <p>At Vanila we provide an affordable and professional service, with a fast turnaround time. We use only the best technologies and this means you'll get the most robust, highest quality mobile apps.</p>
                <p>
                    We know that you want a team that offers you value for money, great support, and most of all - a product that will help to build and expand your business. Our mobile apps can do that.
                </p>
                <p>
                    <blockquote> <em>We do awesome mobile app development that your customers will love.</em>
                    </blockquote>
                </p>
            </div>
            <div className="col-md-4">
                <img src="img/homeBg.png" alt="Mobile app development"/>
            </div>

            </div>
            </div>
            <div id="technologies" className="row rowTech">
            <div className="container">

                <div className="col-md-4 imgVisible">
                </div>
                <div className="col-md-8">
                <h2>Technologies we use.</h2>
                    <p>
                        We use only the best technologies to develop your apps. This includes <a href="https://vanila.io/meteorjs">Meteor.js</a>, a reliable, scalable and efficient platform that results in the best quality web and mobile apps for your business.
                    </p>

                    <p>
                        Our mobile app development team is experienced in a range of technologies and platforms, and can put your ideas into a practical, effective result. You don't need to hire separate teams for web, iOS or Android; using Meteor.js, we save you time and money.
                    </p>
                    <p>But there are other development solutions available to business owners too. With a reliable e-commerce solution, you can take your business online and sell your products and services to customers worldwide. Our e-commerce solutions are tailor-made to suit your unique business requirements.
            Our development solutions are geared toward small, medium and large businesses all over the globe. We help you to grow your business and your profits by creating scalable, robust and visually stunning app solutions. From professional mobile app development to e-commerce solutions and branding, we make sure that your business or start-up has the best possible online presence.</p>
                     <p><blockquote><em>We make modern development technology work for you.</em></blockquote></p>
                </div>
                <div className="col-md-4 imgHidden">
                </div>
            </div>
            </div>

            <div className="row rowFeatures">
                <div className="container">
                    <h2>Why Work with Us?</h2>
                    <span>At Vanila we provide a professional service and top-notch mobile app development to our customers. Our team consists of front- and backend developers, web developers, graphic designers and software engineers. We can handle any project with ease - big or small. Here's why you should partner with us:</span>
                    <div className="row">
                        <div className="col-md-4">
                            <img src="img/FBinterface.png" alt="Hybrid mobile apps"/>
                            <h3>Hybrid mobile apps</h3>
                            <p>Simplicity for the user.Helpful user interface.</p>
                        </div>
                        <div className="col-md-4">
                            <img src="img/Develop.png" alt="Native mobile apps"/>
                            <h3>Native mobile apps</h3>
                            <p>Speed of loading mustn't keep users holding up.</p>
                        </div>
                        <div className="col-md-4">
                            <img src="img/No.png" alt="Fast turnaround time"/>
                            <h3>Fast turnaround time</h3>
                            <p>Ensure the application can work in offline mode.</p>
                        </div>
                        <div className="col-md-4">
                            <img src="img/FBinterface.png" alt="Reduced development costs"/>
                            <h3>Reduced development costs</h3>
                            <p>Simplicity for the user.Helpful user interface.</p>
                        </div>
                        <div className="col-md-4">
                            <img src="img/Develop.png" alt="Cross platform development"/>
                            <h3>Cross platform development</h3>
                            <p>Speed of loading mustn't keep users holding up.</p>
                        </div>
                        <div className="col-md-4">
                            <img src="img/No.png" alt="iOS, Android, Desktop"/>
                            <h3>iOS, Android, Desktop</h3>
                            <p>Ensure the application can work in offline mode.</p>
                        </div>
                        <div className="col-md-4">
                            <img src="img/Develop.png" alt="RealTime and scalable"/>
                            <h3>RealTime and scalable</h3>
                            <p>Speed of loading mustn't keep users holding up.</p>
                        </div>
                        <div className="col-md-4">
                            <img src="img/No.png" alt="Powered by Meteor.js"/>
                            <h3>Powered by Meteor.js</h3>
                            <p>Ensure the application can work in offline mode.</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

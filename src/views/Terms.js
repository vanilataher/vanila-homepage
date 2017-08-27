import React, {Component} from 'react';

import Navigation from '../components/Header/Navigation';
import Footer from '../components/Footer/Footer';

import '../../public/styles/home.css'

import SEO from '../components/seo';

export default class MobileDev extends Component {
    render() {
        return (
          <div className="termsWrapper">
            <Navigation />
            <div className="container">
              <p className="termsTxt">
                By paying Paypal invoices you accept and agree that there is no refund of the money once the development start.
                This is not standard e-commerce purchase of digital goods, and that you are paying for web development service,
                which mean the once the project start, money and time will be invested into developing.
              </p>
            </div>
          </div>
        );
    }
}

'use strict';

import React from 'react';
import Meta from '../meta';
import { Helmet } from 'react-helmet';
import _ from 'lodash';


const SEO = (props) => {

    let content = _.find( Meta, { url: props.url } );
    if ( ! content ) {
        content = _.find( Meta, { url: 'default' } );
    }

    return (
        <Helmet>
            <title>{ content.title }</title>
            <meta name="description" content={ content.description } />
            <meta name="keywords" content={ content.keywords } />
              <meta property="og:image" content="https://vanila.io/img/vanila-og.png" />
                  <meta property="og:title" content="Vanila - Mobile & Web development, Design, SEO" />
                  <meta property="og:url" content="https://vanila.io" />
                  <meta property="og:site_name" content="Vanila Team" />
                  <meta property="og:description" content="Vanila is team who is specialized in front and backend development, seo and marketing." />
                  <meta name="twitter:card" content="summary" />
                  <meta name="twitter:url" content="https://vanila.io" />
                  <meta name="twitter:title" content="Vanila - Mobile & Web development, Design, SEO" />
                  <meta name="twitter:description" content="Vanila is team who is specialized in front and backend development, seo and marketing." />
                  <meta name="twitter:image" content="https://vanila.io/img/vanila-og.png" />
        </Helmet>
    );

}


export default SEO;

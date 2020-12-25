import React from 'react';
import { Helmet } from 'react-helmet';
import _ from 'lodash';
import Meta from './meta';

const SEO = (props) => {
  let content = _.find(Meta, { url: props.url });
  if (!content) {
    content = _.find(Meta, { url: 'default' });
  }

  return (
    <Helmet>
      <title>{content.title}</title>
      <meta name="description" content={content.description} />
      <meta name="keywords" content={content.keywords} />
    </Helmet>
  );
};

export default SEO;

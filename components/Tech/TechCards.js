import React from 'react';

const TechCards = (props) => {
  const techDetails = [
    {
      logo: '/img/homeAssets/meteor.webp',
      title: 'Meteor.js',
      description:
        'Meteor is a complete platform for building web and mobile apps in pure JavaScript.',
      githubStars: '36.7',
      url: '',
    },
    {
      logo: '/img/homeAssets/node.webp',
      title: 'Node.js',
      description:
        'Node.js is a JavaScript runtime built on Chromes V8 JavaScript engine. It uses an event-driven, non-blocking i/O.',
      githubStars: '32.1',
      url: '',
    },
    {
      logo: '/img/homeAssets/react.webp',
      title: 'React.js',
      description:
        'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
      githubStars: '60.5',
      url: '',
    },
    {
      logo: '/img/homeAssets/graphql.webp',
      title: 'GraphQL',
      description:
        'GraphQL is a query language and execution engine to any backend service.',
      githubStars: '5.7',
      url: '',
    },
    {
      logo: '/img/homeAssets/react-native.webp',
      title: 'React Native',
      description:
        'React Native enables you to build world-class native application using JavaScript and React.',
      githubStars: '44.6',
      url: '',
    },
    {
      logo: '/img/homeAssets/ember.webp',
      title: 'Ember.js',
      description:
        'Ember.js is a JavaScript framework that greatly reduces the time, effort and resources needed to build any web.',
      githubStars: '17.5',
      url: '',
    },
    {
      logo: '/img/homeAssets/angular.webp',
      title: 'Angular.js',
      description:
        'AngularJS lets you write client-side web applications as if you had a smarter browser. It lets you use good old HTML.',
      githubStars: '54.9',
      url: '',
    },
    {
      logo: '/img/homeAssets/vue.webp',
      title: 'Vue.js',
      description:
        'A progressive, incrementally-adoptable JavaScript framework for building UI on the web.',
      githubStars: '44.7',
      url: '',
    },
  ];

  const techCard = techDetails.map((techCard, index) => {
    return (
      <li className="media col-md-6 techBoxReveal" key={index}>
        <div className="techCardInner">
          <div className="media-left">
            <a href="#">
              <img className="media-object" src={techCard.logo} />
            </a>
          </div>
          <div className="media-body">
            <div className="media-heading">
              <strong>{techCard.title}</strong>
              <br></br>
              <p>{techCard.description}</p>
            </div>
            <div>
              <img
                className="techGithubLogo"
                src={'/img/homeAssets/githubLogo.webp'}
              />
              <br></br>
              <img src={'/img/homeAssets/githubStar.webp'} />
              <span className="githubStars">{techCard.githubStars + 'k'}</span>
            </div>
          </div>
        </div>
      </li>
    );
  });

  return <ul className="details">{techCard}</ul>;
};

export default TechCards;

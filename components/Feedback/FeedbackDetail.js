import React from 'react';

const FeedbackDetail = (props) => {
  const feedbackDetails = [
    {
      name: 'James Taliento',
      position: 'Founder of CursiveSecurity',
      location: 'Huntington, NY',
      feedback:
        'This is one of several projects that I have worked with Stefan and the Vanila team on. They are amazing',
      avatar: '/img/homeAssets/james.webp',
    },
    {
      name: 'Rodolfo Ruiz',
      position: 'CEO at Driblet.io',
      location: 'Cambridge, Massachusetts',
      feedback:
        'Great work! Followed instructions and worked till I was satisfied with the end result. Couldnt do this job without them. Thanks heaps for your hard work.',
      avatar: '/img/homeAssets/rodolfo.webp',
    },
    {
      name: 'Kaileb Gunn',
      position: 'CEO at DiscoveryCloth.com',
      location: 'Denver, CO',
      feedback:
        'Stefan and the Vanila team are the BEST. They are my go to from now on for all things dev and design. This is the second successful project.',
      avatar: '/img/homeAssets/kaileb.webp',
    },
    {
      name: 'Rudy Robin',
      position: 'Co-founder of Affimobiz.com',
      location: 'Pariz, France',
      feedback:
        'Loved working with Jelena, really great about communicating and delivering great quality work :)',
      avatar: '/img/homeAssets/rudy.webp',
    },
  ];

  const feedbackEach = feedbackDetails.map((feedbackEach, index) => {
    return (
      <li
        className="media col-md-6 col-md-offset-3 enterLeft-feedback"
        key={index}
      >
        <div className="media-left">
          <a href="#">
            <img className="media-object" src={feedbackEach.avatar} />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{feedbackEach.name}</h4>
          <h5>
            {feedbackEach.position + ', '}
            {feedbackEach.location}
          </h5>
          <p>"{feedbackEach.feedback}"</p>
        </div>
      </li>
    );
  });

  return <ul className="details">{feedbackEach}</ul>;
};

export default FeedbackDetail;

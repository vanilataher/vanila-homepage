import React from 'react';

const SocialCards = (props) => {

  const socialDetails = [
    {
        logo: require('../../../public/img/homeAssets/social-vaniladesign.png'),
        title: 'vanila.design',
        description: 'Logos, Illustrations, Vector',
        followers: '53.7',
        posts:'1.2'
    },
    {
      logo: require('../../../public/img/homeAssets/social-uiux.png'),
      title: 'ui__ux',
      description: 'UI/UX Daily Inspiration',
      followers: '17.2',
      posts:'136'
    },
    {
      logo: require('../../../public/img/homeAssets/social-wireflow.png'),
      title: 'wireflow',
      description: 'Wireframing, Prototyping, Sketching',
      followers: '16.1',
      posts:'98'
    },
    {
      logo: require('../../../public/img/homeAssets/social-startupspace.png'),
      title: 'startup.space',
      description: 'UI/UX Daily Inspiration',
      followers: '12.3',
      posts:'580'
    },
    {
      logo: require('../../../public/img/homeAssets/social-vanilaio.png'),
      title: 'vanila.io',
      description: 'Web & Mobile App Development',
      followers: '3.6',
      posts:'37'
    }
  ]

  const socialCard = socialDetails.map( ( socialCard, index ) => {
    return (
      <li className="col-md-2" key={index}>
        <div className="socialCardInner">
          <img className="media-object" src={socialCard.logo}/>
          <p className="instaUsername"><strong>{socialCard.title}</strong></p>
          <p className="instaDescription">{socialCard.description}</p>
          <div className="instaFollow">
          <div className="instaFollowers"><span className="no">{socialCard.followers}k </span><br></br><span className="txt">followers</span></div>
          <div className="instaFollowing"><span className="no">{socialCard.posts}k </span><br></br><span className="txt">posts</span></div>
          </div>
          <p className="instaTags"><span>illustrator</span><span>app</span><span>ui/ux</span><span>photoshop</span></p>
        </div>
     </li>
    );
    })

  return (
      <ul className="details">
        {socialCard}
      </ul>
  );
};

export default SocialCards;

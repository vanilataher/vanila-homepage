import React from 'react';
import { Link } from 'react-router';

const SocialCards = (props) => {

  const socialDetails = [
    {
        logo: require('../../../public/img/homeAssets/social-vaniladesign.png'),
        title: 'vanila.design',
        description: 'Logos, Illustrations, Vector',
        followers: '90.3k',
        posts:'1.6k',
        url: 'https://www.instagram.com/vanila.design/'
    },
    {
      logo: require('../../../public/img/homeAssets/social-uiux.png'),
      title: 'ui__ux',
      description: 'UI/UX Daily Inspiration',
      followers: '39k',
      posts:'246',
      url: 'https://www.instagram.com/ui__ux/'
    },
    {
      logo: require('../../../public/img/homeAssets/social-wireflow.png'),
      title: 'wireflow',
      description: 'Wireframing, Prototyping, Sketching',
      followers: '22k',
      posts:'131',
      url: 'https://www.instagram.com/wireflow/'
    },
    {
      logo: require('../../../public/img/homeAssets/social-startupspace.png'),
      title: 'startup.space',
      description: 'UI/UX Daily Inspiration',
      followers: '12k',
      posts:'585',
      url: 'https://www.instagram.com/startup.space/'
    },
    {
      logo: require('../../../public/img/homeAssets/social-vanilaio.png'),
      title: 'vanila.io',
      description: 'Web & Mobile App Development',
      followers: '4.9k',
      posts:'49',
      url: 'https://www.instagram.com/vanila.io/'
    }
  ]

  const socialCard = socialDetails.map( ( socialCard, index ) => {
    return (
      <li className="col-md-2" key={index}>
        <div className="socialCardInner socialBoxReveal">
          <img className="media-object" src={socialCard.logo}/>
          <Link to={socialCard.url} className="instaUsername"><strong>{socialCard.title}</strong></Link>
          <p className="instaDescription">{socialCard.description}</p>
          <div className="instaFollow">
          <div className="instaFollowers"><span className="no">{socialCard.followers} </span><br></br><span className="txt">followers</span></div>
          <div className="instaFollowing"><span className="no">{socialCard.posts} </span><br></br><span className="txt">posts</span></div>
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

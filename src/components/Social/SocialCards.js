import React from 'react';
import { Link } from 'react-router';

const SocialCards = () => {

  return (
      <ul className="details">
        <li className="col-md-2">
          <a href="https://www.instagram.com/vanila.design/" target="_blank">
          <div className="socialCardInner socialBoxReveal">
            <img className="media-object" src={require('../../../public/img/homeAssets/social-vaniladesign.png')}/>
            <p className="instaUsername"><strong>vanila.design</strong></p>
            <p className="instaDescription">Logos, Illustrations, Vector</p>
            <div className="instaFollow">
            <div className="instaFollowers"><span className="no">90.3k </span><br></br><span className="txt">followers</span></div>
            <div className="instaFollowing"><span className="no">1.6k </span><br></br><span className="txt">posts</span></div>
            </div>
            <p className="instaTags"><span>illustration</span><span>logo</span><span>vector</span><span>graphics</span></p>
          </div>
          </a>
       </li>
       <li className="col-md-2">
         <a href="https://www.instagram.com/ui__ux/" target="_blank">
         <div className="socialCardInner socialBoxReveal">
           <img className="media-object" src={require('../../../public/img/homeAssets/social-uiux.png')}/>
           <p className="instaUsername"><strong>ui__ux</strong></p>
           <p className="instaDescription">UI/UX Daily Inspiration</p>
           <div className="instaFollow">
           <div className="instaFollowers"><span className="no">39k </span><br></br><span className="txt">followers</span></div>
           <div className="instaFollowing"><span className="no">246 </span><br></br><span className="txt">posts</span></div>
           </div>
           <p className="instaTags"><span>ui/ux</span><span>app design</span><span>web design</span><span>interface</span></p>
         </div>
         </a>
      </li>
      <li className="col-md-2">
        <a href="https://www.instagram.com/wireflow/" target="_blank">
        <div className="socialCardInner socialBoxReveal">
          <img className="media-object" src={require('../../../public/img/homeAssets/social-wireflow.png')}/>
          <p className="instaUsername"><strong>wireflow</strong></p>
          <p className="instaDescription">Wireframing, Prototyping, Sketching</p>
          <div className="instaFollow">
          <div className="instaFollowers"><span className="no">22k </span><br></br><span className="txt">followers</span></div>
          <div className="instaFollowing"><span className="no">131 </span><br></br><span className="txt">posts</span></div>
          </div>
          <p className="instaTags"><span>wireframing</span><span>wires</span><span>sketching</span><span>user flow</span></p>
        </div>
        </a>
     </li>
     <li className="col-md-2">
       <a href="https://www.instagram.com/startup.space/" target="_blank">
       <div className="socialCardInner socialBoxReveal">
         <img className="media-object" src={require('../../../public/img/homeAssets/social-vaniladesign.png')}/>
         <p className="instaUsername"><strong>startup.space</strong></p>
         <p className="instaDescription">Place for Startups & Business</p>
         <div className="instaFollow">
         <div className="instaFollowers"><span className="no">12k </span><br></br><span className="txt">followers</span></div>
         <div className="instaFollowing"><span className="no">585 </span><br></br><span className="txt">posts</span></div>
         </div>
         <p className="instaTags"><span>startup</span><span>business</span><span>success</span><span>entrepreneur</span></p>
       </div>
       </a>
    </li>
    <li className="col-md-2">
      <a href="https://www.instagram.com/vanila.io/" target="_blank">
      <div className="socialCardInner socialBoxReveal">
        <img className="media-object" src={require('../../../public/img/homeAssets/social-vanilaio.png')}/>
        <p className="instaUsername"><strong>vanila.io</strong></p>
        <p className="instaDescription">Web & Mobile App Development</p>
        <div className="instaFollow">
        <div className="instaFollowers"><span className="no">4.9k </span><br></br><span className="txt">followers</span></div>
        <div className="instaFollowing"><span className="no">49 </span><br></br><span className="txt">posts</span></div>
        </div>
        <p className="instaTags"><span>web apps</span><span>mobile apps</span><span>coding</span><span>ui/ux</span></p>
      </div>
      </a>
   </li>
      </ul>
  );
};

export default SocialCards;

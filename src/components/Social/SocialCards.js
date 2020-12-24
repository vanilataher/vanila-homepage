import React from 'react';
import { Link } from 'react-router';

const SocialCards = () => {

  return (
      <ul className="details">
        <li className="col-md-2">
          <a href="https://www.instagram.com/vanila.design/" target="_blank">
          <div className="socialCardInner socialBoxReveal">
            <img className="media-object" src={('../../img/homeAssets/social-vaniladesign.png')}/>
            <p className="instaUsername"><strong>vanila.design</strong></p>
            <p className="instaDescription">Logos, Illustrations, Vector</p>
            <div className="instaFollow">
            <div className="instaFollowers"><span className="no">155k </span><br></br><span className="txt">followers</span></div>
            <div className="instaFollowing"><span className="no">2.5k </span><br></br><span className="txt">posts</span></div>
            </div>
            <p className="instaTags"><span>illustration</span><span>logo</span><span>vector</span><span>graphics</span></p>
          </div>
          </a>
       </li>
       <li className="col-md-2">
         <a href="https://www.instagram.com/ui__ux/" target="_blank">
         <div className="socialCardInner socialBoxReveal">
           <img className="media-object" src={('../../img/homeAssets/social-uiux.png')}/>
           <p className="instaUsername"><strong>ui__ux</strong></p>
           <p className="instaDescription">UI/UX Daily Inspiration</p>
           <div className="instaFollow">
           <div className="instaFollowers"><span className="no">2.5M </span><br></br><span className="txt">followers</span></div>
           <div className="instaFollowing"><span className="no">1.3k </span><br></br><span className="txt">posts</span></div>
           </div>
           <p className="instaTags"><span>ui/ux</span><span>app design</span><span>web design</span><span>interface</span></p>
         </div>
         </a>
      </li>
      <li className="col-md-2">
        <a href="https://www.instagram.com/wireflow/" target="_blank">
        <div className="socialCardInner socialBoxReveal">
          <img className="media-object" src={('../../img/homeAssets/social-wireflow.png')}/>
          <p className="instaUsername"><strong>wireflow</strong></p>
          <p className="instaDescription">Wireframing, Prototyping, Sketching</p>
          <div className="instaFollow">
          <div className="instaFollowers"><span className="no">29.9k </span><br></br><span className="txt">followers</span></div>
          <div className="instaFollowing"><span className="no">282 </span><br></br><span className="txt">posts</span></div>
          </div>
          <p className="instaTags"><span>wireframing</span><span>wires</span><span>sketching</span><span>user flow</span></p>
        </div>
        </a>
     </li>
     <li className="col-md-2">
       <a href="https://www.instagram.com/ux_store/" target="_blank">
       <div className="socialCardInner socialBoxReveal">
         <img className="media-object" src={('../../img/homeAssets/social-uxstore.jpg')}/>
         <p className="instaUsername"><strong>UX_STORE</strong></p>
         <p className="instaDescription">UX Design Tools - UX Store</p>
         <div className="instaFollow">
         <div className="instaFollowers"><span className="no">20.2k </span><br></br><span className="txt">followers</span></div>
         <div className="instaFollowing"><span className="no">118 </span><br></br><span className="txt">posts</span></div>
         </div>
         <p className="instaTags"><span>ui/ux</span><span>wireframing</span><span>web design</span><span>ux tools</span></p>
       </div>
       </a>
    </li>
    <li className="col-md-2">
      <a href="https://www.instagram.com/vanila.io/" target="_blank">
      <div className="socialCardInner socialBoxReveal">
        <img className="media-object" src={('../../img/homeAssets/social-vanilaio.png')}/>
        <p className="instaUsername"><strong>vanila.io</strong></p>
        <p className="instaDescription">Web & Mobile App Development</p>
        <div className="instaFollow">
        <div className="instaFollowers"><span className="no">4.1k </span><br></br><span className="txt">followers</span></div>
        <div className="instaFollowing"><span className="no">60 </span><br></br><span className="txt">posts</span></div>
        </div>
        <p className="instaTags"><span>web apps</span><span>mobile apps</span><span>coding</span><span>ui/ux</span></p>
      </div>
      </a>
   </li>
      </ul>
  );
};

export default SocialCards;

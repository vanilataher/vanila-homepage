import React from 'react';

const TeamCards = (props) => {

  const teamInfo = [
    {
        name: 'Stefan Smiljkovic',
        position: 'Founder of Vanila.io',
        avatar: ('../../img/homeAssets/stefan.webp')
    },
    {
        name: 'Jelena Jovanovic',
        position: 'Co-founder and Frontend Developer',
        avatar: ('../../img/homeAssets/jelena.webp')
    },
    {
        name: 'Md Abu Taher',
        position: 'Full Stack Developer, JavaScript',
        avatar:('../../img/homeAssets/tahy.jpg')
    },
    {
        name: 'Marko Rajkovic',
        position: 'Frontend Developer',
        avatar:('../../img/homeAssets/belac.webp')
    },
    {
        name: 'Mustafa Hossaini',
        position: 'Full Stack Developer',
        avatar: ('../../img/homeAssets/mustafa.webp')
    },
    {
        name: 'Boran Jocic',
        position: 'Business Development',
        avatar: ('../../img/homeAssets/boran.webp')
    },
    {
        name: 'Marija Jovanovic',
        position: 'Graphic Designer',
        avatar: ('../../img/homeAssets/marija.webp')
    },
    {
        name: 'Faizur Rehman',
        position: 'Full Stack Designer',
        avatar:('../../img/homeAssets/faizur.webp')
    }
  ]



  const teamPersonEach = teamInfo.map( ( teamPersonEach, index ) => {
    return (
      <li className="col-md-4 teamBoxReveal" key={index}>
          <div className="purple">
            <div className="teamBoxInner">
              <h4 className="example">{teamPersonEach.name}</h4>
              <h5>{teamPersonEach.position}</h5>
            </div>
          </div>
          <img src={teamPersonEach.avatar}/>
      </li>
    );
  })

  return (
    <div>
      <ul className="details">
        {teamPersonEach}
        <li className="col-md-4 communityBlock teamBoxReveal">
        <div className="purple">
        <div className="communityBlockOuter">
        <div className="communityBlockInner">
          <p>1600 + trusted <br></br>
          community members</p>
        <button  className="btn btn-default"><a href="https://chat.vanila.io/" target="_blank">View all</a></button>
          </div>
          </div>
          </div>
          <img src={('../../img/homeAssets/community.webp')} />
        </li>
      </ul>
    </div>
  );
};

export default TeamCards;

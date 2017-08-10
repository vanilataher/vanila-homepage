import React from 'react';

const TeamCards = (props) => {

  const teamInfo = [
    {
        name: 'Stefan Smiljkovic',
        position: 'Founder of Vanila.io',
        avatar: require('../../../public/img/homeAssets/stefan.png')
    },
    {
        name: 'Jelena Jovanovic',
        position: 'Co-founder and frontend developer',
        avatar: require('../../../public/img/homeAssets/jelena.png')
    },
    {
        name: 'Md Abu Taher',
        position: 'Fullstack developer, javascript',
        avatar:require('../../../public/img/homeAssets/tahy.jpg')
    },
    {
        name: 'Jeramel Gauntu',
        position: 'Digital artist',
        avatar:require('../../../public/img/homeAssets/jeramel.png')
    },
    {
        name: 'Mustafa Hossaini',
        position: 'Fullstack developer',
        avatar: require('../../../public/img/homeAssets/mustafa.png')
    },
    {
        name: 'Tsegaselassie Tadesse',
        position: 'Software engineer',
        avatar: require('../../../public/img/homeAssets/tsega.png')
    },
    {
        name: 'Marija Jovanovic',
        position: 'Graphic designer',
        avatar: require('../../../public/img/homeAssets/marija.png')
    },
    {
        name: 'Marko Vujanic',
        position: 'Fullstack developer',
        avatar:require('../../../public/img/homeAssets/markov.jpg')
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
          <img src={require('../../../public/img/homeAssets/community.png')} />
        </li>
      </ul>
    </div>
  );
};

export default TeamCards;
import React from 'react';
import sr, {leftConf, rightConf} from '../sr';

class TeamCards extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    sr.reveal(".teamBoxReveal",{duration:1e3,scale:.1},250);
  }
  render() {
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
        avatar: require('../../../public/img/homeAssets/tahy.jpg')
      },
      {
        name: 'Marko Rajkovic',
        position: 'Frontend developer',
        avatar: require('../../../public/img/homeAssets/belac.png')
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
        avatar: require('../../../public/img/homeAssets/markov.jpg')
      }
    ];

    const teamPersonEach = teamInfo.map((teamPersonEach, index) => {
      return (
        <li className="col-md-4 teamBoxReveal" key={index}>
          <div className="purple">
            <div className="teamBoxInner">
              <h4 className="example">{teamPersonEach.name}</h4>
              <h5>{teamPersonEach.position}</h5>
            </div>
          </div>
          <img src={teamPersonEach.avatar} />
        </li>
      );
    });

    return (
      <div>
        <ul className="details">
          {teamPersonEach}
          <li className="col-md-4 communityBlock teamBoxReveal">
            <div className="purple">
              <div className="communityBlockOuter">
                <div className="communityBlockInner">
                  <p>
                    1600 + trusted <br />
                    community members
                  </p>
                  <button className="btn btn-default">
                    <a
                      href="https://chat.vanila.io/"
                      target="_blank"
                      rel="noopener"
                    >
                      View all
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <img
              src={require('../../../public/img/homeAssets/community.png')}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default TeamCards;

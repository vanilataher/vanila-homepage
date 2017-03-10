import React from 'react';

const ProjectEach = (props) => {

  const projectsInfo = [
    {
        title: 'Instagram automation tool',
        description: 'For a better productivity we build various tools which help you to lead project better.',
        photo: require('../../../public/img/homeAssets/automation.png')
    },
    {
        title: 'Wireflow',
        description: 'Easiest user flow chart tool for real-time collaborative work.',
        photo: require('../../../public/img/homeAssets/wireflow.png')
    },
    {
        title: 'Wekan (Trello like)',
        description: 'Wekan is Trello like Open Source app built with Meteor.js.',
        photo: require('../../../public/img/homeAssets/wekan.png')
    }
  ]

  const projectEach = projectsInfo.map( ( projectEach, index ) => {
    return (
      <li className="projectBox" key={index}>
          <h4 className="example">{projectEach.title}</h4>
          <h5>{projectEach.description}</h5>
          <img src={projectEach.photo}/>
      </li>
      );
      })

  return (
    <div>
      <ul className="details">
        {projectEach}
      </ul>
    </div>
  );
};

export default ProjectEach;
